import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  a span {
    color: lightgray;
  }

  @font-face {
    font-family: "icons";
    src: 
            //url("data:application/octet-stream;base64,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")
        //format("woff"),
      url("data:application/octet-stream;base64,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")
      format("truetype");
  }
  /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
  /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
  /*
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
      font-family: 'icons';
      src: url('../font/icons.svg?18866083#icons') format('svg');
    }
  }
  */

  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    font-size: 40px;

    font-family: "icons";
    font-style: normal;
    font-weight: normal;
    speak: never;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: 0.2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: 0.2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }

  .icon-github-circled:before {
    content: "\\f09b";
  }

  /* '' */

  .icon-linkedin-squared:before {
    content: "\\f09c";
  }

  /* '' */

  .icon-twitter-squared:before {
    content: "\\f09d";
  }

  /* '' */

  .icon-mail-alt:before {
    content: "\\f0e0";
  }

  /* '' */
`;

const Flare = () => (
  <Wrapper className="footer footer--pin">
    <a href="https://github.com/webxl" target="_blank">
      <span className="icon-github-circled"></span>
    </a>
    <a href="https://linkedin.com/in/webxl" target="_blank">
      <span className="icon-linkedin-squared"></span>
    </a>
    <a href="https://twitter.com/mattmotherway" target="_blank">
      <span className="icon-twitter-squared"></span>
    </a>
    <a href="mailto:site@webxl.net" target="_blank">
      <span className="icon-mail-alt"></span>
    </a>
  </Wrapper>
);

export default Flare;
