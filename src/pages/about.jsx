import { SITE } from "../site";
import { usePageTitle } from "../usePageTitle";

const notes = [
  { k: "Base", v: `${SITE.location} / High Sierra` },
  { k: "School", v: "Stanford · BA Economics, CS minor" },
  { k: "Now", v: "RedTap · Digital Transformation Advisor" },
  { k: "Off-trail", v: "Ski, hike, golf, 3D print" },
];

export default function About() {
  usePageTitle(`About – ${SITE.name}`);

  return (
    <div className="px-4 pb-8 pt-10 sm:px-6">
      <h1 className="overflow-hidden font-poster text-[clamp(4.5rem,18vw,11rem)] uppercase leading-[0.76] tracking-[-0.045em] text-bone">
        About
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,36rem)]">
        <dl className="space-y-4 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
          {notes.map((note) => (
            <div key={note.k}>
              <dt className="text-blaze">{note.k}</dt>
              <dd className="mt-1 normal-case tracking-normal text-bone">{note.v}</dd>
            </div>
          ))}
        </dl>

        <div className="max-w-xl space-y-5 leading-relaxed text-bone-dim">
          <p>
            Senior full-stack engineer and digital transformation advisor in
            often-sunny, sometimes-snowy Reno. Economics and security still
            occupy spare brain cycles.
          </p>
          <p>
            These days I’m especially interested in AI and agentic computing,
            along with home automation.
          </p>
          <p>
            Most of the career has been shipping product software — a long run on
            Informa’s Zephyr platform, then senior engineering at Silo, and now
            advisory work at RedTap. I take on product engineering and advisory
            engagements directly. The orange stamp is the door.
          </p>
        </div>
      </div>

      <section className="mt-20 max-w-xl" aria-labelledby="site-heading">
        <h2
          id="site-heading"
          className="font-poster text-4xl uppercase leading-none tracking-tight text-bone"
        >
          This site
        </h2>
        <p className="mt-4 leading-relaxed text-bone-dim">
          Vite, React, Tailwind. Source on{" "}
          <a href={SITE.source} className="text-link">
            GitHub
          </a>
          . Mark from{" "}
          <a
            href="https://danmarshall.github.io/google-font-to-svg-path/"
            className="text-link"
          >
            Google Font to Svg Path
          </a>{" "}
          and{" "}
          <a href="https://editor.method.ac/" className="text-link">
            Method Draw
          </a>
          .
        </p>
        <p className="mt-6 flex flex-wrap gap-x-5 font-mono text-[11px] uppercase tracking-[0.14em]">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone-dim no-underline hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone-dim no-underline hover:text-bone"
          >
            GitHub
          </a>
          <a
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone-dim no-underline hover:text-bone"
          >
            Twitter
          </a>
        </p>
      </section>
    </div>
  );
}
