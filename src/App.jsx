import styled from "styled-components";
import bgImage from "./assets/blurry-gradient-haikei.svg";
import flareBgImage from "./assets/layered-waves-haikei.svg";

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "~react-pages";
import { colors } from "./style-vars.js";
import SiteMenu from "./components/siteMenu.jsx";
import Flare from "./components/flare.jsx";

const App = () => {
  return (
    <Suspense>
      <BackgroundWrapper className="flex flex-col h-screen justify-between">
        <div className="fg-wrapper flex flex-col h-screen justify-between">
          {useRoutes(routes)}
          <SiteMenu />
          <Flare />
        </div>
      </BackgroundWrapper>
    </Suspense>
  );
};

const BackgroundWrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  background-image: url(${bgImage});
  background-size: cover;

  .fg-wrapper {
    background-image: url(${flareBgImage});
    background-size: cover;
    height: 100vh;
  }

  .content {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    overflow: auto;
    max-height: 60vh;
  }

  ul {
    line-height: 1;
  }

  li {
    margin-left: 2px;
  }

  a,
  a:visited {
    font-weight: 400;
    color: ${colors.primaryColor};
  }
`;

export default App;
