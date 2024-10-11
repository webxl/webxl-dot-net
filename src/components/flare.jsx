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
      url("data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzJGvlLdAAABjAAAAGBjbWFwZ5nmGgAAAgAAAAGiZ2x5Zoe9K7IAAAOwAAADgGhlYWQjXzkzAAAA4AAAADZoaGVhBz0DVwAAALwAAAAkaG10eBHb//8AAAHsAAAAFGxvY2ECHgLIAAADpAAAAAxtYXhwARcAhQAAARgAAAAgbmFtZbUOdfUAAAcwAAACqXBvc3RVu8vOAAAJ3AAAAGgAAQAAA1L/agAAA+j/////A+kAAQAAAAAAAAAAAAAAAAAAAAUAAQAAAAEAABwT/SBfDzz1AAsD6AAAAADgK/rJAAAAAOAr+sn///+xA+kDCwAAAAgAAgAAAAAAAAABAAAABQB5AAgAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAQDkgGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAwPCb8OADUv9qAFoDrACWAAAAAQAAAAAAAAAAAAAAAAACA+gAAANZAAADWQAAA1kAAAPo//8AAAAFAAAAAwAAACwAAAAEAAABYgABAAAAAABcAAMAAQAAACwAAwAKAAABYgAEADAAAAAGAAQAAQAC8J3w4P//AADwm/Dg//8AAAAAAAEABgAKAAAAAQACAAMABAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAQAAAAAAAAAAEAADwmwAA8JsAAAABAADwnAAA8JwAAAACAADwnQAA8J0AAAADAADw4AAA8OAAAAAEAAAAAAAAALgBCAFmAcAACAAA/8QDWQMLAFMAWgBfAGQAaQBuAHMAeAAAATIeARUUBgcGJj0BNCc+BCc0JzYnJgYPASYiBy4CBwYXBhUUHgMXBgcOASImJy4BLwEiBh4BHwEeAR8BHgI2MzcVFBcUBicuATU0PgEDNicmBwYWFzYmBhYXNiYGFhc2JgYWFzYmBhY3NAYUNjcmBhY2Aa10xnKkgQ8OHSAyOCIaAiwVGRA8FRU0bjUIHkAPGRQsGCI4MCEVBgwaJiIOCyAMCwwIAggDBAwYBgYHIigmDA0BEA6BpHTClAIFBgIBChQECwcKFAYKCgocBA0JDSUBEQQRJhMTIAESAhIDC3TEdYzgKwMOCnY2GQMOHixIMEMwMz8FFg4NDw8GEhoGPzMwQy9ILhwQAhQmBQYYFxIWAwEECgYDAwYeDg0VGggCAzIcAgoOAyvgjHXEdP2YBAMBAgQGDwMLBgwVBA4HDhQEDQoMCQYFDAYEBwENAQsHAw4GAAAEAAD/sQNZAwsAAwAOACQANAAANzMRIzcuASIGHgEzMTI2ATM1NCYjIgczNSMWAzM1NDc+ATMyFQERFAYHISImNRE0NjchMhaEgYGKASg+LAEoICEoAUeBUkJMKQGBAgKBBAgiGEEBBV5D/elDXl5DAhdDXj0Bg3gdJiY6Jib+It5WWEE4Jf6i2RUKExxYAV796EJeAWBBAhhCXgFgAAAAAgAA/7EDWQMLAC4APgAAAQYHNjcGByYiBgcUFy4BJwYVFBcmJxUUFhcGIyInHgEzBiMiJxYzMj4DJzU2NxEUBgchIiY1ETQ2NyEyFgLKHyQmDiUmImREAQNIfiwQMxsdOCgQDAcPDDwlQFEPDVJiPm5OOBwBI6ZeQ/3pQ15eQwIXQ14B/g4FFisVByREMRALBEI1HB9AIgEOASpCBwUDJC4yAjUoQlZgLg8ZkP3oQl4BYEECGEJeAWAAAAAC////sQPpAsMAGQA4AAABERQGByEiJjcRFhcWFx4CNzMyPgE3Njc2NxQGBwYPAQ4CJyMiJi8BLgEvASYnLgEnNDYzITIWA+g0JfzKJDYBGR/KTCAmRBsCHEIoH1+3IBg2KdI0NQwiHg0CDB4RHg0iBpNgEiM8AS4rAzYkNgHG/kUlNAE2JAG7GxaJNxgaHAEaHBdEfBa/LFAdkiMnCRIMAQoKEggcA2VCDhdSJCs6NAAAAAAAABIA3gABAAAAAAAAADUAAAABAAAAAAABAAUANQABAAAAAAACAAcAOgABAAAAAAADAAUAQQABAAAAAAAEAAUARgABAAAAAAAFAAsASwABAAAAAAAGAAUAVgABAAAAAAAKACsAWwABAAAAAAALABMAhgADAAEECQAAAGoAmQADAAEECQABAAoBAwADAAEECQACAA4BDQADAAEECQADAAoBGwADAAEECQAEAAoBJQADAAEECQAFABYBLwADAAEECQAGAAoBRQADAAEECQAKAFYBTwADAAEECQALACYBpUNvcHlyaWdodCAoQykgMjAyMyBieSBvcmlnaW5hbCBhdXRob3JzIEAgZm9udGVsbG8uY29taWNvbnNSZWd1bGFyaWNvbnNpY29uc1ZlcnNpb24gMS4waWNvbnNHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADIAMwAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AaQBjAG8AbgBzAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBzAGkAYwBvAG4AcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBzAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUBAgEDAQQBBQEGAA5naXRodWItY2lyY2xlZBBsaW5rZWRpbi1zcXVhcmVkD3R3aXR0ZXItc3F1YXJlZAhtYWlsLWFsdAAA")
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
    <a href="mailto:site@motherway.dev" target="_blank">
      <span className="icon-mail-alt"></span>
    </a>
  </Wrapper>
);

export default Flare;
