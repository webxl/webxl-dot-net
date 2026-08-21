import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "../site";
import { usePageTitle } from "../usePageTitle";
import resume from "./resume.json";

const silo = resume.work.find((job) => job.company === "Silo Technologies");
const informa = resume.work.find((job) =>
  job.company.includes("Informa")
);

export default function Work() {
  usePageTitle(`Work – ${SITE.name}`);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="mx-auto max-w-page px-6 pb-24 pt-12 sm:pt-16">
      <div className="max-w-2xl">
        <div className="mb-6 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <p className="kicker">Selected work</p>
        <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Client and product outcomes first.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          High-scale SaaS, financial software, and a few client sites. Personal
          projects live further down.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        <article id="silo" className="scroll-mt-32 border-t border-rule pt-12">
          <p className="kicker">
            Product · {silo.dateRange}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            {silo.website ? (
              <a
                href={silo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink no-underline hover:text-accent"
              >
                {silo.company}
              </a>
            ) : (
              silo.company
            )}
          </h2>
          <p className="mt-1 text-ink-muted">{silo.position}</p>
          <p className="mt-6 max-w-3xl border-l-2 border-accent pl-5 font-serif text-xl leading-snug text-ink">
            Payments architecture contributing to 8-figure ARR.
          </p>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-ink-muted">
            <p>
              Architected and maintained a high-scale web ERP for the perishable
              goods supply chain using React, TypeScript, Go, and GraphQL.
            </p>
            <p>
              Integrated full-stack payments with Stripe, Plaid, and GraphQL,
              contributing to 8-figure ARR through higher payment success rates
              and a clearer checkout experience. Other work included a reusable
              server-side React email system, branded PDF generation for
              financial documents, and a modular React UI used across the
              platform.
            </p>
          </div>
          <p className="mt-5 text-sm text-ink-faint">
            React · TypeScript · Go · GraphQL · Stripe · Plaid · Node.js
          </p>
        </article>

        <article id="zephyr" className="scroll-mt-32 border-t border-rule pt-12">
          <p className="kicker">
            Product · {informa.dateRange}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            {informa.website ? (
              <a
                href={informa.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink no-underline hover:text-accent"
              >
                Zephyr OnDEMAND
              </a>
            ) : (
              "Zephyr OnDEMAND"
            )}
          </h2>
          <p className="mt-1 text-ink-muted">
            {informa.position}, {informa.company}
          </p>
          <p className="mt-6 max-w-3xl border-l-2 border-accent pl-5 font-serif text-xl leading-snug text-ink">
            Led engineering for a reporting product generating $3M+ in annual
            revenue.
          </p>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-ink-muted">
            <p>
              Led the engineering team for Zephyr OnDEMAND, a financial reporting
              and analytics web app used for interactive, client-facing insights.
            </p>
            <p>
              Built investment analysis applications in TypeScript and .NET for
              the flagship Zephyr platform, with React and GraphQL for
              data-heavy interfaces. Designed an extensible design system and
              reusable UI patterns used across frontend frameworks, and
              modernized asset pipelines with custom Node.js tooling.
            </p>
          </div>
          <p className="mt-5 text-sm text-ink-faint">
            TypeScript · React · GraphQL · .NET · Node.js
          </p>
        </article>

        <article id="tustin" className="scroll-mt-32 border-t border-rule pt-12">
          <p className="kicker">Client site</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            <a
              href="https://tustinirvineinternalmedicine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink no-underline hover:text-accent"
            >
              Tustin Irvine Internal Medicine
            </a>
          </h2>
          <p className="mt-1 text-ink-muted">
            Marketing site for a medical practice serving Tustin and Irvine.
          </p>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
            <a
              href="https://tustinirvineinternalmedicine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-sm border border-rule bg-cream"
            >
              <img
                src="/images/tustin-irvine-internal-medicine.png"
                alt="Tustin Irvine Internal Medicine website"
                className="w-full"
                width="480"
                height="360"
                loading="lazy"
              />
            </a>
            <div className="max-w-xl leading-relaxed text-ink-muted">
              <p>
                A responsive marketing website for the practice, built with
                Bootstrap.
              </p>
              <p className="mt-5 text-sm text-ink-faint">Bootstrap · Responsive web</p>
            </div>
          </div>
        </article>
      </div>

      <section className="mt-24 border-t border-rule pt-12" aria-labelledby="personal-heading">
        <p className="kicker">Personal projects</p>
        <h2 id="personal-heading" className="mt-3 font-serif text-3xl font-medium text-ink">
          Side work
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
          Smaller apps I built to think through a problem. Useful, but not the
          main case for hiring me.
        </p>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <article>
            <a
              href="https://inflation-planner.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-sm border border-rule bg-cream"
            >
              <img
                src="/images/inflation-planner.png"
                alt="Inflation Planner app showing a savings chart"
                className="w-full"
                width="800"
                height="500"
                loading="lazy"
              />
            </a>
            <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
              <a
                href="https://inflation-planner.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink no-underline hover:text-accent"
              >
                Inflation Planner
              </a>
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              A planner for retirement savings that factors in inflation, rate
              of return, contributions, and withdrawals. It charts the balance
              over time, marks the shift from saving to drawing down, and can
              auto-correct a projected shortfall.
            </p>
            <p className="mt-4 text-sm">
              <a
                href="https://github.com/webxl/inflation-planner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Source on GitHub
              </a>
            </p>
          </article>

          <article>
            <a
              href="https://btc-charts-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-sm border border-rule bg-cream"
            >
              <img
                src="/images/btc-charts.png"
                alt="BTC Charts with a power-law overlay"
                className="w-full"
                width="800"
                height="500"
                loading="lazy"
              />
            </a>
            <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
              <a
                href="https://btc-charts-lovat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink no-underline hover:text-accent"
              >
                BTC Charts
              </a>
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Historical Bitcoin price against the Power Law trend, with
              logarithmic axes. Shares charting work with Inflation Planner and
              pushes Nivo through a large animated dataset. Python, Flask, and
              Pandas on the backend; hosted on Vercel with PostgreSQL.
            </p>
            <p className="mt-4 text-sm">
              <a
                href="https://github.com/webxl/btc-charts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Source on GitHub
              </a>
            </p>
          </article>
        </div>
      </section>

      <p className="mt-20 max-w-xl text-ink-muted">
        Looking for the full history?{" "}
        <Link to="/resume" className="text-link">
          Read the resume
        </Link>
        , or{" "}
        <a href={SITE.mailto} className="text-link">
          email {SITE.email}
        </a>
        .
      </p>
    </div>
  );
}
