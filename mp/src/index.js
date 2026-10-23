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

function isReplaced(ws) {
  try {
    const att = ws.deserializeAttachment ? ws.deserializeAttachment() : null;
    return !!(att && att.replaced);
  } catch (e) {
    return false;
  }
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
    const otherRole = role === "host" ? "guest" : "host";

    // A refresh reconnects with the same role while the old socket may still
    // look alive. Replace it instead of rejecting the rejoin, but suppress the
    // peer-left notification for the replaced socket.
    for (const old of this.state.getWebSockets(role)) {
      try { old.serializeAttachment({ replaced: true }); } catch (e) {}
      try { old.close(1000, "replaced"); } catch (e) {}
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.state.acceptWebSocket(server, [role]);

    const peers = 1 + this.state.getWebSockets(otherRole).length;
    this.send(server, { c: "welcome", role, peers });

    for (const other of this.state.getWebSockets(otherRole)) {
      this.send(other, { c: "peer-joined", role });
    }

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws, message) {
    if (isReplaced(ws)) return;
    const role = this.state.getTags(ws).find((t) => t === "host" || t === "guest");
    if (!role) return;
    const otherRole = role === "host" ? "guest" : "host";
    for (const other of this.state.getWebSockets(otherRole)) {
      this.send(other, message);
    }
  }

  webSocketClose(ws) {
    if (isReplaced(ws)) return;
    const role = this.state.getTags(ws).find((t) => t === "host" || t === "guest");
    if (!role) return;
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
