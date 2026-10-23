// Lightweight challenge coordinator for 3D Snake.
//
// POST /create        -> { code }
// GET  /ws?code=&role= -> WebSocket upgrade, routed to the room's Durable Object
//
// The room only relays messages between the host and guest sockets. Once the
// WebRTC DataChannel opens the peers talk directly; if it fails, the same room
// forwards game packets (the client marks the session as "relayed").

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_LEN = 5;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function randomCode() {
  const bytes = new Uint8Array(CODE_LEN);
  crypto.getRandomValues(bytes);
  let s = "";
  for (const b of bytes) s += CODE_ALPHABET[b % CODE_ALPHABET.length];
  return s;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (url.pathname === "/create" && request.method === "POST") {
      return json({ code: randomCode() });
    }

    if (url.pathname === "/ws") {
      const code = (url.searchParams.get("code") || "").toUpperCase();
      if (!new RegExp(`^[${CODE_ALPHABET}]{${CODE_LEN}}$`).test(code)) {
        return new Response("bad code", { status: 400 });
      }
      const id = env.ROOMS.idFromName(code);
      return env.ROOMS.get(id).fetch(request);
    }

    if (url.pathname === "/health") {
      return json({ ok: true });
    }

    return new Response("not found", { status: 404 });
  },
};

export class Room {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("expected websocket", { status: 426 });
    }

    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    if (role !== "host" && role !== "guest") {
      return new Response("bad role", { status: 400 });
    }

    const all = this.state.getWebSockets();
    if (all.length >= 2) return new Response("room full", { status: 409 });
    if (this.state.getWebSockets(role).length > 0) {
      return new Response("role taken", { status: 409 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.state.acceptWebSocket(server, [role]);

    const peers = this.state.getWebSockets().length;
    this.send(server, { c: "welcome", role, peers });

    const otherRole = role === "host" ? "guest" : "host";
    for (const other of this.state.getWebSockets(otherRole)) {
      this.send(other, { c: "peer-joined", role });
    }

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws, message) {
    const role = this.state.getTags(ws)[0];
    const otherRole = role === "host" ? "guest" : "host";
    for (const other of this.state.getWebSockets(otherRole)) {
      this.send(other, message);
    }
  }

  webSocketClose(ws) {
    const role = this.state.getTags(ws)[0];
    const otherRole = role === "host" ? "guest" : "host";
    for (const other of this.state.getWebSockets(otherRole)) {
      this.send(other, { c: "peer-left" });
    }
  }

  send(ws, message) {
    try {
      ws.send(typeof message === "string" ? message : JSON.stringify(message));
    } catch (e) {
      // socket already closing; nothing to do
    }
  }
}
