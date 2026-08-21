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
    <div className="mx-auto max-w-page px-6 pb-24 pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <div className="mb-6 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <p className="kicker">Resume</p>
        <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Senior full-stack engineer, 15+ years shipping SaaS.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">{summary}</p>
        <p className="mt-6">
          <a href={SITE.mailto} className="btn-primary">
            Email {SITE.email}
          </a>
        </p>
      </div>

      <section className="mt-16 border-t border-rule pt-12" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="font-serif text-3xl font-medium text-ink">
          Experience
        </h2>
        <div className="mt-10 space-y-12">
          {work.map((job) => (
            <article key={`${job.company}-${job.dateRange}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {job.website ? (
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink no-underline hover:text-accent"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="text-sm text-ink-muted sm:text-right">{job.dateRange}</p>
              </div>
              <p className="mt-1 text-ink-muted">
                {job.position}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              {job.highlights && (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink-muted">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-rule pt-12" aria-labelledby="education-heading">
        <h2 id="education-heading" className="font-serif text-3xl font-medium text-ink">
          Education
        </h2>
        <div className="mt-8 space-y-6">
          {education.map((school) => (
            <article key={school.institution}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {school.institution}
                </h3>
                <p className="text-sm text-ink-muted">{school.dateRange}</p>
              </div>
              <p className="mt-1 text-ink-muted">{school.studyType}</p>
              {school.courses && school.courses.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted">
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
        <section className="mt-16 border-t border-rule pt-12" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-serif text-3xl font-medium text-ink">
            Skills
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {Object.entries(skills).map(([key, values]) => (
              <div key={key}>
                <h3 className="kicker">{skillLabels[key] || key}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{values.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
