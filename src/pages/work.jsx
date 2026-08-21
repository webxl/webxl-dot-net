import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "../site";
import { usePageTitle } from "../usePageTitle";
import resume from "./resume.json";

const silo = resume.work.find((job) => job.company === "Silo Technologies");
const informa = resume.work.find((job) => job.company.includes("Informa"));

const index = [
  {
    n: "01",
    href: "#silo",
    name: "Silo Technologies",
    role: silo.position,
    when: "2021–25",
    line: "Payments architecture contributing to 8-figure ARR.",
  },
  {
    n: "02",
    href: "#zephyr",
    name: "Zephyr OnDEMAND",
    role: informa.position,
    when: "2010–21",
    line: "Led engineering. $3M+ annual revenue.",
  },
  {
    n: "03",
    href: "#tustin",
    name: "Tustin Irvine Internal Medicine",
    role: "Client site",
    when: "—",
    line: "Responsive practice marketing site.",
  },
  {
    n: "04",
    href: "#inflation",
    name: "Inflation Planner",
    role: "Side",
    when: "—",
    line: "Retirement planner that factors inflation.",
  },
  {
    n: "05",
    href: "#btc",
    name: "BTC Charts",
    role: "Side",
    when: "—",
    line: "Bitcoin price against the Power Law trend.",
  },
];

export default function Work() {
  usePageTitle(`Work – ${SITE.name}`);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="px-4 pb-8 pt-10 sm:px-6">
      <h1 className="overflow-hidden font-poster text-[clamp(4.5rem,18vw,11rem)] uppercase leading-[0.76] tracking-[-0.045em] text-bone">
        Work
      </h1>
      <p className="mt-6 max-w-md text-bone-dim">
        Client and product outcomes first. Personal projects after.
      </p>

      <ol className="mt-12">
        {index.map((item) => (
          <li key={item.n} className="border-t border-line last:border-b">
            <a
              href={item.href}
              className="grid gap-2 py-5 no-underline sm:grid-cols-[3rem_1fr_auto] sm:items-baseline"
            >
              <span className="font-mono text-[11px] text-blaze">{item.n}</span>
              <span>
                <span className="font-poster text-2xl uppercase leading-none tracking-tight text-bone sm:text-3xl">
                  {item.name}
                </span>
                <span className="mt-2 block text-sm text-bone-dim">{item.line}</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                {item.role} · {item.when}
              </span>
            </a>
          </li>
        ))}
      </ol>

      <article id="silo" className="mt-24 scroll-mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
          01 · Product · {silo.dateRange}
        </p>
        <h2 className="mt-3 font-poster text-5xl uppercase leading-[0.85] tracking-tight text-bone sm:text-6xl">
          {silo.website ? (
            <a
              href={silo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone no-underline hover:text-blaze"
            >
              {silo.company}
            </a>
          ) : (
            silo.company
          )}
        </h2>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
          {silo.position}
        </p>
        <p className="mt-8 max-w-2xl font-poster text-2xl uppercase leading-tight text-bone sm:text-3xl">
          Payments architecture contributing to 8-figure ARR.
        </p>
        <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-bone-dim">
          <p>
            Architected and maintained a high-scale web ERP for the perishable
            goods supply chain using React, TypeScript, Go, and GraphQL.
          </p>
          <p>
            Integrated full-stack payments with Stripe, Plaid, and GraphQL,
            contributing to 8-figure ARR through higher payment success rates
            and a clearer checkout experience. Other work included a reusable
            server-side React email system, branded PDF generation for financial
            documents, and a modular React UI used across the platform.
          </p>
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
          React · TypeScript · Go · GraphQL · Stripe · Plaid · Node.js
        </p>
      </article>

      <article id="zephyr" className="mt-24 scroll-mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
          02 · Product · {informa.dateRange}
        </p>
        <h2 className="mt-3 font-poster text-5xl uppercase leading-[0.85] tracking-tight text-bone sm:text-6xl">
          {informa.website ? (
            <a
              href={informa.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone no-underline hover:text-blaze"
            >
              Zephyr OnDEMAND
            </a>
          ) : (
            "Zephyr OnDEMAND"
          )}
        </h2>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
          {informa.position} · {informa.company}
        </p>
        <p className="mt-8 max-w-2xl font-poster text-2xl uppercase leading-tight text-bone sm:text-3xl">
          Led engineering for a reporting product generating $3M+ in annual
          revenue.
        </p>
        <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-bone-dim">
          <p>
            Led the engineering team for Zephyr OnDEMAND, a financial reporting
            and analytics web app used for interactive, client-facing insights.
          </p>
          <p>
            Built investment analysis applications in TypeScript and .NET for
            the flagship Zephyr platform, with React and GraphQL for data-heavy
            interfaces. Designed an extensible design system and reusable UI
            patterns used across frontend frameworks, and modernized asset
            pipelines with custom Node.js tooling.
          </p>
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
          TypeScript · React · GraphQL · .NET · Node.js
        </p>
      </article>

      <article id="tustin" className="mt-24 scroll-mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
          03 · Client site
        </p>
        <h2 className="mt-3 font-poster text-5xl uppercase leading-[0.85] tracking-tight text-bone sm:text-6xl">
          <a
            href="https://tustinirvineinternalmedicine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone no-underline hover:text-blaze"
          >
            Tustin Irvine Internal Medicine
          </a>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-bone-dim">
          A responsive marketing website for a medical practice serving Tustin
          and Irvine. Built with Bootstrap.
        </p>
        <a
          href="https://tustinirvineinternalmedicine.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block max-w-lg"
        >
          <img
            src="/images/tustin-irvine-internal-medicine.png"
            alt="Tustin Irvine Internal Medicine website"
            className="w-full grayscale contrast-125"
            width="480"
            height="360"
            loading="lazy"
          />
        </a>
      </article>

      <section className="mt-28" aria-labelledby="side-heading">
        <h2
          id="side-heading"
          className="font-poster text-[clamp(3rem,12vw,7rem)] uppercase leading-[0.78] tracking-[-0.04em] text-bone"
        >
          Side
        </h2>
        <p className="mt-4 max-w-md text-bone-dim">
          Smaller apps I built to think through a problem. Not the main case for
          hiring me.
        </p>

        <article id="inflation" className="mt-12 scroll-mt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
            04 · Side
          </p>
          <h3 className="mt-3 font-poster text-4xl uppercase leading-[0.85] tracking-tight">
            <a
              href="https://inflation-planner.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone no-underline hover:text-blaze"
            >
              Inflation Planner
            </a>
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-bone-dim">
            A planner for retirement savings that factors in inflation, rate of
            return, contributions, and withdrawals. It charts the balance over
            time, marks the shift from saving to drawing down, and can
            auto-correct a projected shortfall.
          </p>
          <p className="mt-3">
            <a
              href="https://github.com/webxl/inflation-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              Source
            </a>
          </p>
          <img
            src="/images/inflation-planner.png"
            alt="Inflation Planner app showing a savings chart"
            className="mt-6 w-full max-w-lg grayscale contrast-125"
            width="800"
            height="500"
            loading="lazy"
          />
        </article>

        <article id="btc" className="mt-16 scroll-mt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
            05 · Side
          </p>
          <h3 className="mt-3 font-poster text-4xl uppercase leading-[0.85] tracking-tight">
            <a
              href="https://btc-charts-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone no-underline hover:text-blaze"
            >
              BTC Charts
            </a>
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-bone-dim">
            Historical Bitcoin price against the Power Law trend, with
            logarithmic axes. Shares charting work with Inflation Planner and
            pushes Nivo through a large animated dataset. Python, Flask, and
            Pandas on the backend; hosted on Vercel with PostgreSQL.
          </p>
          <p className="mt-3">
            <a
              href="https://github.com/webxl/btc-charts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              Source
            </a>
          </p>
          <img
            src="/images/btc-charts.png"
            alt="BTC Charts with a power-law overlay"
            className="mt-6 w-full max-w-lg grayscale contrast-125"
            width="800"
            height="500"
            loading="lazy"
          />
        </article>
      </section>

      <p className="mt-20 max-w-md text-bone-dim">
        Full history on the{" "}
        <Link to="/resume" className="text-link">
          resume
        </Link>
        .
      </p>
    </div>
  );
}
