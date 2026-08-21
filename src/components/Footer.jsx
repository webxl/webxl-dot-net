import { SITE } from "../site";

export default function Footer() {
  return (
    <footer className="relative z-20 mt-24 border-t border-line px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
          {SITE.location} · high sierra
        </p>
        <div className="flex flex-wrap gap-x-5 font-mono text-[11px] uppercase tracking-[0.14em]">
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
            href={SITE.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone-dim no-underline hover:text-bone"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
