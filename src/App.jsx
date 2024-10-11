import styled from "styled-components";
import bgImage from "./assets/blurry-gradient-haikei.svg";
import flareBgImage from "./assets/layered-waves-haikei.svg";

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { animated,  useSpring } from "@react-spring/web";
import { easings } from '@react-spring/web'

import routes from "~react-pages";
import { colors } from "./style-vars.js";
import Flare from "./components/flare.jsx";

const App = () => {
  const rockingX = useSpring({
    from: { x: 0, scale: 1.2, opacity: 0.3 },
    to: { x: 100, scale: 1.2, opacity: 0.7 },
    loop: { reverse: true },
    config: {
      mass: 200,
      easing: easings.easeInElastic,
    },

  });

  return (
    <Suspense>
      <BackgroundWrapper>
      <div className="content-container">
        <animated.div
          className="wave-wrapper"
          style={rockingX}
        />
        {useRoutes(routes)}</div>
        <Flare />
      </BackgroundWrapper>
    </Suspense>
  );
};

const BackgroundWrapper = styled.div`
  min-height: 100vh;

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  .content-container {
    background-image: url(${bgImage});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: repeat-x;

    min-height: 100vh;
    overflow: auto;
    overflow-x: hidden;
    position: relative;

    padding: 20px 20px 150px;
  }

  .footer--pin {
    position: relative;
    z-index: 20;
    left: 0;
    bottom: 20px;
    background-size: cover;
    background-attachment: fixed;
    margin-top: -80px;

    @media (max-width: 640px) {
      margin-top: -160px;
    }
  }

  .page-wrapper {
    position: relative;
    height: 100%;
    z-index: 20;
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

  .wave-wrapper {
    background-image: url(${flareBgImage});
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    position: absolute;
    top: -200px;
    left: -100px;
    right: -100px;
    bottom: 0;
    z-index: 10;
    background-repeat: repeat-x;
    transform: scaleX(1.2);
    opacity: 0.5;
  }
`;

export default App;
