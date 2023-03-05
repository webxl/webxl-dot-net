import resumeData from "./resume.json";
import Name from "../components/name.jsx";
import styled from "styled-components";

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
  @media (min-width: 40rem) {
    text-align: right;
    .date-range {
    }
  }
`;

export default () => {
  const { highlights, work, education } = resumeData;
  return (
    <Wrapper className="container mx-auto content-start px-4">
      <div>
        <Name />
        <div className="content mx-auto content-start px-4">
          <h2 className="text-2xl my-3">Résumé</h2>

          <h4 className="text-xl mb-3">
            Full-stack web application developer with over a decade of SAAS
            experience
          </h4>

          <ul className="mb-3" style={{ listStyle: "circle inside" }}>
            {highlights.map((hl, i) => (
              <li className="leading-normal mb-2" key={i}>
                {hl}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl my-6">Experience</h3>
          {work.map((pos, i) => (
            <div key={i}>
              <div className="row position-header flex items-stretch">
                <div className="flex-1  flex-nowrap">
                  {pos.company}, {pos.location}
                </div>
                <div className="flex">{pos.dateRange}</div>
              </div>
              <div className="position-title">{pos.position}</div>
              <div className="summary">{pos.summary}</div>
            </div>
          ))}

          <h3>Education</h3>

          {education.map((pos, i) => (
            <div key={i}>
              <div className="row position-header flex items-stretch">
                <div className="flex-1 w-50">{pos.institution}</div>
                <div className="flex">{pos.dateRange}</div>
              </div>
              <div className="summary">{pos.studyType}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
