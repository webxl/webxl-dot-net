import styled from "styled-components";
import bgImage from "./assets/blurry-gradient-haikei.svg";
import flareBgImage from "./assets/layered-waves-haikei.svg";

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "~react-pages";
import { colors } from "./style-vars.js";
import Flare from "./components/flare.jsx";

const App = () => {
  return (
    <Suspense>
      <BackgroundWrapper>
        <div className="content-container">{useRoutes(routes)}</div>
        <Flare />
      </BackgroundWrapper>
    </Suspense>
  );
};

const BackgroundWrapper = styled.div`
  height: 100vh;

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  .content-container {
    background-image: url(${flareBgImage}), url(${bgImage});
    background-size: cover;
    background-attachment: fixed;

    min-height: 100vh;
    overflow: auto;
    position: relative;

    padding: 20px 20px 150px;
  }

  .footer--pin {
    position: relative;
    z-index: 0;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-attachment: fixed;
    margin-top: -80px;

    @media (max-width: 640px) {
      margin-top: -160px;
    }
  }

  .content {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
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
