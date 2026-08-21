import resume from "./resume.json";
import { SITE } from "../site";
import { usePageTitle } from "../usePageTitle";

const skillLabels = {
  databases: "Databases",
  frontend: "Frontend",
  backendCloud: "Backend & Cloud",
  tools: "Collaboration & Tools",
};

export default function Resume() {
  usePageTitle(`Resume – ${SITE.name}`);
  const { summary, work, education, skills } = resume;

  return (
    <div className="px-4 pb-8 pt-10 sm:px-6">
      <h1 className="overflow-hidden font-poster text-[clamp(4.5rem,16vw,10rem)] uppercase leading-[0.76] tracking-[-0.045em] text-bone">
        Resume
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-bone-dim">{summary}</p>

      <section className="mt-16" aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="font-poster text-[clamp(3rem,10vw,6rem)] uppercase leading-[0.8] tracking-[-0.04em] text-bone"
        >
          Log
        </h2>
        <div className="mt-8">
          {work.map((job, i) => (
            <article
              key={`${job.company}-${job.dateRange}`}
              className="border-t border-line py-8 last:border-b"
            >
              <div className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-[11px] text-blaze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-poster text-3xl uppercase leading-none tracking-tight text-bone sm:text-4xl">
                      {job.website ? (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bone no-underline hover:text-blaze"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                      {job.dateRange}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                    {job.position}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  {job.highlights && (
                    <ul className="mt-4 max-w-2xl list-none space-y-3 pl-0 leading-relaxed text-bone-dim">
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="education-heading">
        <h2
          id="education-heading"
          className="font-poster text-[clamp(3rem,10vw,6rem)] uppercase leading-[0.8] tracking-[-0.04em] text-bone"
        >
          School
        </h2>
        <div className="mt-8">
          {education.map((school) => (
            <article key={school.institution} className="border-t border-line py-8 last:border-b">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-poster text-3xl uppercase leading-none tracking-tight text-bone">
                  {school.institution}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                  {school.dateRange}
                </p>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
                {school.studyType}
              </p>
              {school.courses && school.courses.length > 0 && (
                <ul className="mt-3 list-none space-y-1 text-bone-dim">
                  {school.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {skills && (
        <section className="mt-16" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="font-poster text-[clamp(3rem,10vw,6rem)] uppercase leading-[0.8] tracking-[-0.04em] text-bone"
          >
            Kit
          </h2>
          <div className="mt-8 border-t border-line">
            {Object.entries(skills).map(([key, values]) => (
              <div
                key={key}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[12rem_1fr]"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-blaze">
                  {skillLabels[key] || key}
                </h3>
                <p className="leading-relaxed text-bone-dim">{values.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
