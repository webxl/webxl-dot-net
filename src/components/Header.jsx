import { Link, NavLink } from "react-router-dom";
import { SITE } from "../site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight text-ink no-underline sm:text-[1.35rem]"
        >
          {SITE.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[0.95rem] no-underline transition-colors ${
                  isActive
                    ? "font-semibold text-ink underline decoration-accent decoration-2 underline-offset-[10px]"
                    : "font-medium text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={SITE.mailto}
            className="text-[0.95rem] font-semibold text-accent no-underline hover:text-accent-dark"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
