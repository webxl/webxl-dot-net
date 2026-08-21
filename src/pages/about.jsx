import { SITE } from "../site";
import { usePageTitle } from "../usePageTitle";

const profiles = [
  { href: SITE.linkedin, label: "LinkedIn" },
  { href: SITE.github, label: "GitHub" },
  { href: SITE.twitter, label: "Twitter" },
];

export default function About() {
  usePageTitle(`About – ${SITE.name}`);

  return (
    <div className="mx-auto max-w-page px-6 pb-24 pt-12 sm:pt-16">
      <div className="max-w-2xl">
        <div className="mb-6 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <p className="kicker">About</p>
        <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Reno-based. Still in the code.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I’m a senior full-stack engineer and digital transformation advisor
            in often-sunny, sometimes-snowy Reno, Nevada. When I’m not in a
            codebase I ski, hike, golf, and 3D-print things. Economics and
            security still occupy spare brain cycles.
          </p>
          <p>
            I studied Economics at Stanford, with a Computer Science minor.
            These days I’m especially interested in AI and agentic computing,
            along with home automation.
          </p>
          <p>
            Most of my career has been shipping product software — a long run on
            Informa’s Zephyr platform, then senior engineering at Silo, and now
            advisory work at RedTap. I take on product engineering and advisory
            engagements directly. Email is the fastest way to start that
            conversation.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={SITE.mailto} className="btn-primary">
            Email {SITE.email}
          </a>
          {profiles.map((profile) => (
            <a
              key={profile.href}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] font-medium text-ink no-underline hover:text-accent"
            >
              {profile.label}
            </a>
          ))}
        </div>
      </div>

      <section className="mt-20 max-w-2xl border-t border-rule pt-10" aria-labelledby="site-heading">
        <h2 id="site-heading" className="font-serif text-2xl font-medium text-ink">
          This site
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Built with{" "}
          <a href="https://vitejs.dev/" className="text-link">
            Vite
          </a>
          , React, and{" "}
          <a href="https://tailwindcss.com/" className="text-link">
            Tailwind CSS
          </a>
          . Source is on{" "}
          <a href={SITE.source} className="text-link">
            GitHub
          </a>
          . The mark was generated with{" "}
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
      </section>
    </div>
  );
}
