import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
];

export default function Header() {
  return (
    <header className="relative z-20 flex items-end justify-between gap-6 px-4 pt-5 sm:px-6">
      <Link
        to="/"
        className="font-poster text-2xl uppercase leading-none tracking-tight text-bone no-underline"
        aria-label="Matt Motherway, home"
      >
        MM
      </Link>
      <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `font-mono text-[11px] uppercase tracking-[0.16em] no-underline ${
                isActive ? "text-blaze" : "text-bone-dim hover:text-bone"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
