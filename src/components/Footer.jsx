import { Link } from "react-router-dom";
import { SITE } from "../site";
import { IconGitHub, IconLinkedIn } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-lg text-ink">{SITE.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            Product engineering &amp; advisory · {SITE.location}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={SITE.mailto} className="font-medium text-ink no-underline hover:text-accent">
            {SITE.email}
          </a>
          <div className="flex items-center gap-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-muted no-underline hover:text-ink"
            >
              <IconLinkedIn className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-muted no-underline hover:text-ink"
            >
              <IconGitHub className="h-4 w-4" />
              GitHub
            </a>
          </div>
          <Link to="/resume" className="text-ink-muted no-underline hover:text-ink">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
