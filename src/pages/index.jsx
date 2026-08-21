import { Link } from "react-router-dom";
import { SITE } from "../site";
import { DEFAULT_TITLE, usePageTitle } from "../usePageTitle";
import resume from "./resume.json";

const silo = resume.work.find((job) => job.company === "Silo Technologies");
const informa = resume.work.find((job) =>
  job.company.includes("Informa")
);

const proofs = [
  {
    href: "/work#silo",
    kicker: silo.position,
    title: "Silo",
    body: "Payments architecture contributing to 8-figure ARR, on a React, TypeScript, Go, and GraphQL ERP for the perishable-goods supply chain.",
  },
  {
    href: "/work#zephyr",
    kicker: informa.position,
    title: "Informa · Zephyr",
    body: "Led engineering for Zephyr OnDEMAND, a financial reporting and analytics product that generated $3M+ in annual revenue.",
  },
  {
    href: "/resume",
    kicker: resume.education[0].institution,
    title: "15+ years shipping",
    body: "Full-stack product work across SaaS, payments, and financial software. Economics degree, Computer Science minor.",
  },
];

export default function Home() {
  usePageTitle(DEFAULT_TITLE);

  return (
    <div>
      <section className="mx-auto max-w-page px-6 pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="mb-6 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <p className="kicker">
          Available for consulting · {SITE.location}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          Product engineering and digital transformation for teams that need to ship.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          TypeScript, React, and Node for the product. Advisory for the platforms,
          workflows, and integrations that have to last. Currently Digital
          Transformation Advisor at RedTap.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={SITE.mailto} className="btn-primary">
            Email {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.95rem] font-medium text-ink no-underline hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.95rem] font-medium text-ink no-underline hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="border-t border-rule" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-page px-6 py-16 sm:py-20">
          <h2 id="proof-heading" className="kicker">
            Selected outcomes
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {proofs.map((proof) => (
              <Link
                key={proof.title}
                to={proof.href}
                className="group block no-underline"
              >
                <p className="text-sm text-ink-muted">{proof.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium text-ink group-hover:text-accent">
                  {proof.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{proof.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule" aria-labelledby="offer-heading">
        <div className="mx-auto grid max-w-page gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 id="offer-heading" className="kicker">
              How I work
            </h2>
            <p className="mt-4 font-serif text-3xl font-medium leading-snug text-ink">
              Senior full-stack delivery, plus the advisory around it.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl font-medium text-ink">
                Product engineering
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                TypeScript, React, and Node — APIs, payments, design systems, and
                the unglamorous work that keeps a product reliable. Architecture
                through implementation, not slides.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-ink">
                Digital transformation advisory
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                Currently at RedTap: Node and React services, LLM-enabled document
                and scheduling workflows, and a Supabase-backed CRM for real estate
                development and hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rule" aria-labelledby="close-heading">
        <div className="mx-auto max-w-page px-6 py-16 sm:py-20">
          <h2 id="close-heading" className="font-serif text-3xl font-medium text-ink sm:text-4xl">
            If you need someone who can still write the code — and advise on the
            system around it — email me.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={SITE.mailto} className="btn-primary">
              Email {SITE.email}
            </a>
            <Link
              to="/work"
              className="text-[0.95rem] font-medium text-ink no-underline hover:text-accent"
            >
              See selected work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
