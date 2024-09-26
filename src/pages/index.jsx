import styled from "styled-components";
import { colors } from "../style-vars";
import SiteMenu from "../components/siteMenu";
import Name from "../components/name.jsx";

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 3rem;
  color: ${colors.headingColor};
  word-spacing: 0.4rem;
  margin-bottom: 4rem;

  @media (max-width: 640px) {
    font-size: ${(p) => (p.isLanding ? "3rem" : "2rem")};
    margin-bottom: 2rem;
  }
`;
const Index = () => (
  <div className="mt-28 text-center ">
    <Name isLanding />
    <Subtitle>software engineer & consultant</Subtitle>
    <SiteMenu isLanding />
  </div>
);

export default Index;
