import { useState } from 'react'
import './App.css'
import styled from "styled-components";
import bgImage from './assets/blurry-gradient-haikei.svg';
import flareBgImage from './assets/layered-waves-haikei.svg';

import { Suspense } from 'react'
import {
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'
import {colors} from "./style-vars.js";
import SiteMenu from "./components/SiteMenu.jsx";
import Flare from "./components/Flare.jsx";

const BackgroundWrapper = styled.div`

  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  background-image: url(${bgImage});
  background-size: cover;
  
  .flare-wrapper {
    background-image: url(${flareBgImage});
    background-size: cover;
    height: 100vh;
  }
  
  footer {
    flex: none;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: ${colors.headingColor};
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .content {
    background: rgba(255, 255, 255, .8);
    border-radius: 4px;
    overflow: scroll;
    max-height: 60vh;
  }

  .links {
    padding-top: 15px;
    text-align: center;

    a {
      margin-right: 10px;
    }
  }

  ul {
    line-height: 1.0;
  }

  li {
    margin-left: 2px;
  }
  
  a, a:visited {
    font-weight: 400;
    color: ${colors.primaryColor};
  }
`;

const App = () => {
  return (
      <Suspense fallback={<p>Loading...</p>}>
        <BackgroundWrapper className="flex flex-col h-screen justify-between">
            <div className="flare-wrapper flex flex-col h-screen justify-between">
          {useRoutes(routes)}
            <SiteMenu />
            <Flare />
            </div>
        </BackgroundWrapper>
      </Suspense>

  )
}



export default App
