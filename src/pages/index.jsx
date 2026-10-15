import { Link } from "react-router-dom";
import { SITE } from "../site";
import { DEFAULT_TITLE, usePageTitle } from "../usePageTitle";
import resume from "./resume.json";

const silo = resume.work.find((job) => job.company === "Silo Technologies");
const informa = resume.work.find((job) => job.company.includes("Informa"));
const redtap = resume.work.find((job) => job.company === "RedTap");

const proofs = [
  {
    n: "01",
    href: "/work#silo",
    name: "Silo",
    meta: `${silo.position} · 2021–25`,
    line: "Payments architecture contributing to 8-figure ARR. React / TypeScript / Go / GraphQL ERP for the perishable-goods supply chain.",
  },
  {
    n: "02",
    href: "/work#zephyr",
    name: "Zephyr / Informa",
    meta: `${informa.position} · 2010–21`,
    line: "Led engineering for Zephyr OnDEMAND, a financial reporting product generating $3M+ in annual revenue.",
  },
  {
    n: "03",
    href: "/resume",
    name: "15+ years",
    meta: resume.education[0].institution,
    line: "Full-stack product work across SaaS, payments, and financial software. BA Economics, Computer Science minor.",
  },
];

export default function Home() {
  usePageTitle(DEFAULT_TITLE);

  return (
    <div>
      <section className="relative overflow-x-hidden pt-8 sm:pt-10">
        <div className="flex items-stretch gap-3 px-4 sm:px-6">
          <span className="mt-2 w-1.5 shrink-0 bg-blaze sm:mt-3 sm:w-2" aria-hidden="true" />
          <h1 className="name-lock min-w-0 font-poster text-[clamp(5.25rem,26vw,17rem)] uppercase leading-[0.72] tracking-[-0.055em] text-bone">
            Matt
            <br />
            <span className="block whitespace-nowrap">Motherway</span>
          </h1>
        </div>

        <div className="mt-8 grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,13rem)_minmax(0,34rem)_1fr] lg:items-start">
          <dl className="space-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
            <div>
              <dt className="text-blaze">Status</dt>
              <dd className="mt-1 text-bone">Open</dd>
            </div>
            <div>
              <dt>Field</dt>
              <dd className="mt-1">Product + advisory</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd className="mt-1">
                {SITE.location}
                <br />
                High Sierra
              </dd>
            </div>
          </dl>

          <p className="max-w-md text-[1.05rem] leading-relaxed text-bone">
            TypeScript, React, and Node for the product. Advisory for the
            platforms, workflows, and integrations that have to last. Currently{" "}
            {redtap.position} at {redtap.company}.
          </p>
        </div>
      </section>

      <section className="mt-20 px-4 sm:mt-28 sm:px-6" aria-labelledby="proof-heading">
        <h2 id="proof-heading" className="font-poster text-[clamp(3.5rem,14vw,8rem)] uppercase leading-[0.78] tracking-[-0.04em] text-bone">
          Proof
        </h2>
        <ol className="mt-8">
          {proofs.map((proof) => (
            <li key={proof.n} className="border-t border-line py-6 last:border-b">
              <Link to={proof.href} className="group grid gap-3 no-underline sm:grid-cols-[3.5rem_1fr]">
                <span className="font-mono text-[11px] text-blaze">{proof.n}</span>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="font-poster text-3xl uppercase leading-none tracking-tight text-bone group-hover:text-blaze sm:text-4xl">
                      {proof.name}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                      {proof.meta}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-bone-dim">
                    {proof.line}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 px-4 sm:mt-28 sm:px-6" aria-labelledby="offer-heading">
        <h2 id="offer-heading" className="font-poster text-[clamp(3.5rem,14vw,8rem)] uppercase leading-[0.78] tracking-[-0.04em] text-bone">
          Take
        </h2>
        <div className="mt-8 max-w-xl space-y-8 border-t border-line pt-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
              Eng
            </p>
            <p className="mt-2 leading-relaxed text-bone-dim">
              TypeScript, React, and Node — APIs, payments, design systems, and
              the unglamorous work that keeps a product reliable. Architecture
              through implementation, not slides.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
              Adv
            </p>
            <p className="mt-2 leading-relaxed text-bone-dim">
              Currently at RedTap: Node and React services, LLM-enabled document
              and scheduling workflows, and a Supabase-backed CRM for real estate
              development and hiring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
