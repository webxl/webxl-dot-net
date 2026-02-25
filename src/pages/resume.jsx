import resumeData from "./resume.json";
import Name from "../components/name.jsx";
import styled from "styled-components";
import SiteMenu from "../components/siteMenu";

const Wrapper = styled.div`
  li {
    padding-left: 16px;
    margin-top: 0.6rem;
  }
  .position-header {
    margin-top: 20px;
    font-weight: bold;
  }
  .position-title,
  .summary {
    margin-bottom: 10px;
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem 2rem;
  }
  .skill-label {
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const skillLabels = {
  databases: "Databases",
  frontend: "Frontend",
  backendCloud: "Backend & Cloud",
  tools: "Collaboration & Tools",
};

export default () => {
  const { highlights, summary, work, education, skills } = resumeData;
  return (
    <Wrapper className="container mx-auto content-start px-4 page-wrapper">
      <div>
        <Name />
        <SiteMenu />
        <div className="content mx-auto content-start px-6 py-4">
          <h2 className="text-2xl my-3">Resume</h2>

          <h4 className="text-xl mb-3">
            Senior Full-Stack Engineer with 15+ years SaaS experience
          </h4>

          <p className="mb-3 leading-relaxed">{summary}</p>

          <h3 className="text-2xl my-6">Experience</h3>
          {work.map((pos, i) => (
            <div key={i} className="mb-5">
              <div className="row position-header flex items-stretch">
                <div className="flex-1 flex-nowrap">
                  {pos.company}, {pos.location}
                </div>
                <div className="flex">{pos.dateRange}</div>
              </div>
              <div className="position-title">{pos.position}</div>
              {pos.highlights && (
                <ul style={{ listStyle: "disc inside" }}>
                  {pos.highlights.map((hl, j) => (
                    <li className="leading-normal mb-1" key={j}>
                      {hl}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h3 className="text-2xl my-6">Education</h3>
          {education.map((pos, i) => (
            <div key={i} className="mb-4">
              <div className="row position-header flex items-stretch">
                <div className="flex-1 w-50">{pos.institution}</div>
                <div className="flex">{pos.dateRange}</div>
              </div>
              <div className="summary">{pos.studyType}</div>
              {pos.courses && pos.courses.length > 0 && (
                <ul style={{ listStyle: "disc inside" }}>
                  {pos.courses.map((c, j) => (
                    <li className="leading-normal" key={j}>
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {skills && (
            <>
              <h3 className="text-2xl my-6">Skills</h3>
              <div className="skills-grid mb-4">
                {Object.entries(skills).map(([key, values]) => (
                  <div key={key}>
                    <div className="skill-label">{skillLabels[key] || key}</div>
                    <div className="leading-relaxed">{values.join(", ")}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
