import Name from "../components/name.jsx";
import styled from "styled-components";
import { colors } from "../style-vars";

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 3rem;
  color: ${colors.headingColor};
  word-spacing: 5px;
  padding-bottom: 15px;

  @media (max-width: 640px) {
    font-size: ${(p) => (p.isLanding ? "3rem" : "2rem")};
  }
`;

export default () => (
  <div className="mt-40 text-center ">
    <Name isLanding />
    <Subtitle>software engineer</Subtitle>
  </div>
);
