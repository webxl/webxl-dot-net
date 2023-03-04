import styled from "styled-components";


const Wrapper = styled.div`
  text-align: center;

  a span {
    color: lightgray;
  }

  @font-face {
    font-family: 'icons';
    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),
    url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABJMAA8AAAAAHPgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIwleU9TLzIAAAGUAAAAQwAAAFY+IFQZY21hcAAAAdgAAACHAAAB8n+ktSVjdnQgAAACYAAAABMAAAAgBtX/BGZwZ20AAAJ0AAAFkAAAC3CKkZBZZ2FzcAAACAQAAAAIAAAACAAAABBnbHlmAAAIDAAABy8AAAlE/lv4xWhlYWQAAA88AAAAMgAAADYNLZZjaGhlYQAAD3AAAAAfAAAAJAc7A1hobXR4AAAPkAAAACQAAAAkH3P//GxvY2EAAA+0AAAAFAAAABQJqAuQbWF4cAAAD8gAAAAgAAAAIAF5DD9uYW1lAAAP6AAAAXwAAAKpmAxM43Bvc3QAABFkAAAAawAAAJb0Nx0ycHJlcAAAEdAAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYMpJLMlj4HNx8wlhkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAKVkFSAB4nGNgZK5jnMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4vGD7zMAf9z2KIYg5imAYUZgTJAQDpwAvCAHic7ZHBCQMhFESf689GgqfUkWJSSgrYU9rY5vboUbCAzXyVkCLy5QkzyBdmgAsQxUMYhDcBn01u6H7k1n3jKZ1JLFiJda9Hs5bPEwq/6jtBr+/zuFq0y/TjylVbCCv/yf1+TZU8y4GnXyZKjjLxtsrEG6v7wJusx0AJ02ygrGl5QPoAHHIl7gB4nGNgQAMSEMgc9D8LhAESbAPdAHicrVZpd9NGFB15SZyELCULLWphxMRpsEYmbMGACUGyYyBdnK2VoIsUO+m+8Ynf4F/zZNpz6Dd+Wu8bLySQtOdwmpOjd+fN1czbZRJaktgL65GUmy/F1NYmjew8CemGTctRfCg7eyFlisnfBVEQrZbatx2HREQiULWusEQQ+x5ZmmR86FFGy7akV03KLT3pLlvjQb1V334aOsqxO6GkZjN0aD2yJVUYVaJIpj1S0qZlqPorSSu8v8LMV81QwohOImm8GcbQSN4bZ7TKaDW24yiKbLLcKFIkmuFBFHmU1RLn5IoJDMoHzZDyyqcR5cP8iKzYo5xWsEu20/y+L3mndzk/sV9vUbbkQB/Ijuzg7HQlX4RbW2HctJPtKFQRdtd3QmzZ7FT/Zo/ymkYDtysyvdCMYKl8hRArP6HM/iFZLZxP+ZJHo1qykRNB62VO7Es+gdbjiClxzRhZ0N3RCRHU/ZIzDPaYPh788d4plgsTAngcy3pHJZwIEylhczRJ2jByYCVliyqp9a6YOOV1WsRbwn7t2tGXzmjjUHdiPFsPHVs5UcnxaFKnmUyd2knNoykNopR0JnjMrwMoP6JJXm1jNYmVR9M4ZsaERCICLdxLU0EsO7GkKQTNoxm9uRumuXYtWqTJA/Xco/f05la4udNT2g70s0Z/VqdiOtgL0+lp5C/xadrlIkXp+ukZfkziQdYCMpEtNsOUgwdv/Q7Sy9eWHIXXBtju7fMrqH3WRPCkAfsb0B5P1SkJTIWYVYhWQGKta1mWydWsFqnI1HdDmla+rNMEinIcF8e+jHH9XzMzlpgSvt+J07MjLj1z7UsI0xx8m3U9mtepxXIBcWZ5TqdZlu/rNMfyA53mWZ7X6QhLW6ejLD/UaYHlRzodY3lBC5p038GQizDkAg6QMISlA0NYXoIhLBUMYbkIQ1gWYQjLJRjC8mMYwnIZhrC8rGXV1FNJ49qZWAZsQmBijh65zEXlaiq5VEK7aFRqQ54SbpVUFM+qf2WgXjzyhjmwFkiXyJpfMc6Vj0bl+NYVLW8aO1fAsepvH472OfFS1ouFPwX/1dZUJb1izcOTq/Abhp5sJ6o2qXh0TZfPVT26/l9UVFgL9BtIhVgoyrJscGcihI86nYZqoJVDzGzMPLTrdcuan8P9NzFCFlD9+DcUGgvcg05ZSVnt4KzV19uy3DuDcjgTLEkxN/P6VvgiI7PSfpFZyp6PfB5wBYxKZdhqA60VvNknMQ+Z3iTPBHFbUTZI2tjOBIkNHPOAefOdBCZh6qoN5E7hhg34BWFuwXknXKJ6oyyH7kXs8yik/Fun4kT2qGiMwLPZG2Gv70LKb3EMJDT5pX4MVBWhqRg1FdA0Um6oBl/G2bptQsYO9CMqdsOyrOLDxxb3lZJtGYR8pIjVo6Of1l6iTqrcfmYUl++dvgXBIDUxf3vfdHGQyrtayTJHbQNTtxqVU9eaQ+NVh+rmUfW94+wTOWuabronHnpf06rbwcVcLLD2bQ7SUiYX1PVhhQ2iy8WlUOplNEnvuAcYFhjQ71CKjf+r+th8nitVhdFxJN9O1LfR52AM/A/Yf0f1A9D3Y+hyDS7P95oTn2704WyZrqIX66foNzBrrblZugbc0HQD4iFHrY64yg18pwZxeqS5HOkh4GPdFeIBwCaAxeAT3bWM5lMAo/mMOT7A58xh0GQOgy3mMNhmzhrADnMY7DKHwR5zGHzBnHWAL5nDIGQOg4g5DJ4wJwB4yhwGXzGHwdfMYfANc+4DfMscBjFzGCTMYbCv6dYwzC1e0F2gtkFVoANTT1jcw+JQU2XI/o4Xhv29Qcz+wSCm/qjp9pD6Ey8M9WeDmPqLQUz9VdOdIfU3Xhjq7wYx9Q+DmPpMvxjLZQa/jHyXCgeUXWw+5++J9w/bxUC5AAEAAf//AA94nGVVXWwbxxGe2b3bOx6P/3dHiiIp6kgeaYmmZfJ4VPwj0ZIcybVqOZIq0C1KC6nzUwv+qWMXQWAYEBoETZGHIk0BA3kJC6MoggRI5Ic+FHCD1smD6ydDcFs/FEGfkj4URdCnwqI6R7uF45C7M4ud2SV35ptvIAKwe5b3+DJwUCAIEUhAEoZhBArQgBYchGlYglfgevuXR0osGz+2t8gTWTY/OsKyiUB2dRgTQ8kQD6iJwOmUpXPVjClcllS5a0QFlyJBzhEk7KYxHs918pjL6QthjXGATAcymVDm2KWL586+9OIP1r//vbWVby8enZueOnzo4IFnJlte092/b0+5YI/mR3LZzHB6KJW0TCMRjz3+RG05O55sNAv+LD+h8SnNm65D9wjFNKxWo+7hE/6tx7bkY1srZojCqO00Y653EJu+qFtZOvFopZiNujXf6326tfXp/yS+e/Pm/a0t/KDXu3/z5m1dFBUNH8l3B1v3e724phYUHUmq2p+rmYf/zI6NZRfcUrHk3veKhZKH89mxpV6vV9za2ir2dm73/uOL4hZO9Aa39fzTfYdsvd7GE1vVnaZ/FftTdswruW7JeyTHAAApt39nD9gDEDDSzghEwHnaPSojzvnmC4D4YizGZGsczdHYqIn4Gq733+u/wR7c6r/xCV4lVMDu2/w6HwMVYpCCA+2WhTI3UZINZBL37+My8nWQQWKy1AUGwFaBMejQAhaNeIJSJuT0OBqQhyhN2bDyXtTJC7lglltmg1/vf9V/vf8VhvEqhh/e3cbK9nb/L9uscvfWrbvYvTUwXUO9/+9P3tnexrF79/518c7dS/RE4Ls7u9f4m7wNJ2AZ1uDDdnAfSqgqDDibP/5R6mSnXSIAyvSHzwnkDAh75xSUScusSwHQF+iaEBwbPv5RmpyL33Am8/mvHcBjw+09QL9yASRZuvC0I2PyMimZrQGT2bdOnWonV1aWllbWVta+s7q0vLT83MlnJuMxVTbGS5aI0NNG0BL70BmsSUdQONPoOfuwhqRd2vKmcYpMrkeutPasEcz5Not8B2vSRlJuFsxWrBDjVww1dSKVZxLLW2tWXavpdrRue69ZhuqpqdTZlGasGTR8L5uJnHUyVddrelEnaf3UiqqHtFT6Ulo11uLx/v0zZ878I2oLS1TTyylDq+pRq2Mx48RE5tlwNHUjVWG6lIkuRus0H7ulDc3RotZJi9Hvh8Or5Pe+5TCdPfL7zcsvv4dS/yEQqmD3Nj/Fg7AC34XTcAZ+COeJb16Fs+2XirlhU5LwhRDj7CwqYh5lRZqnBDGU2DmKOTK+AZwSIDZAKCiUDVBkVOQNkOXzKsEdYZUUYIdgiosIr1z60cVn5yZb+yeq49kMrOBKgNKA9RyahlCEcxjd8pRUdste2U+HYys1poikMI0cTwoljLZTrlEibJFDP+w0mddomUbSEGRoulPI6agirKTnfEO0XGF4LVp4+OHlzy7d2IyEs/n6pJ1mVXMoesg03fNNNdeODBnVlD05MWoKPe3Y4WBeD+oqU7mkp4RQ7IqjhzAa3rxx+Q/vMFkw1AwpqGiG0DQtI4UCoRLGpJiTSOQxzuI8ePn2lbc+H+dh7cfeEA/nqgsTsxONadkKhyIREU+L6cbE7L6FWibKDEcWqWTc4ihpgnORC4fMtMp4PcO0MB///K0rty/vXJco7pKI8KDQTSmshA0ppOkBIetCUjCEQYWHhV+bbHd392P+JfsjDMEk7G2PBYgWOFEQZ/wCMGQXfIrCVT9NHZ+PFluuUzzQkHw+IhpWiIZbMStpJXOMqHkKWx59/TxRoTAi7UGFUHVQ5Muu1xitW/wLt/TwTtHDoZE7i3lnbphlZiojp3+bT3l77rlN3c6FmJ6L5UK2+MV6vHAIa+PcI/fP+kdLLnpF/N2w9WYrlc5gOpOcu2r9vnoy+3ahHIgT02pxNcNfmAknl4vjB1z/fYTdjwfYrcEUPN8+vTciiAMRTAJodohAW0RZknyKZIADwMIAsBKNDeIOGoRUQWPDLwRUYZ1grIhVoDR3QBHKYvOgPWpYlpEMUK8jgHstoTjUyYwkvZlgmXTK1LiSomCXc9jwlUWR4uXmoJEpjxtZi0LD7owUnXDJsc/MIV+4Vo02hrOTlaiuRPRDpfZzkdDy81PnT0xmsPDr7uzOl7Pd7ixLznaxH6Z0mEpxbn80KM00MyNtm2hqbEaRebFWZ83KzNp6LTL0850vZrq4foSlfAXS/2PDIQxFcOFE+7iFKlL6ZY7UMs6BX6Aq0aZGUdHYul/IqHLsKhKDQACWfQ2BDgQgsNiYGK+U4olCvJGIRYMUi1YjVmjVBoXY2D9o6a5TsBXq6BandWsKG3UTn4rB65ubP8PKVBUr+dEKzm8uzyzuwU3GNiXVTh1B+cmHH8afvJp1nAOO07f/ttY5Mlnq/+qvppbIdLD7tbf+F89ejgAAeJxjYGRgYADi+rDJc+P5bb4ycDO/AIowXBXRTITR///+z2J+yRwE5HIwMIFEAU2/DDMAAHicY2BkYGAO+p8FJF/8//v/D/NLBqAICuAEALZJB5gAA+gAAAOgAAAC2gAAA5gAAAOF//0DWQAAA+j//wNZAAADWQAAAAAAAADuARABYAJAAy4DngQsBKIAAQAAAAkAeQAPAAAAAAACAEQAVABzAAAAqQtwAAAAAHicdZLLSsNAFIb/6U1s0YWCGzezUSpC0hZE6KpSrAsXgotuXKVxcilppkymlr6A7+AD+Fo+i3+ng9WFCXPynf9cBwLgBF8Q2D03PDsWaNLbcQ0HGHquU7/z3CBPPDfRwaPnFr2p5zau8eK5g1O8s4NoHNKb48OzQFvUPddwLI4816mfe26QLzw3cSZCzy3q957bmIonzx1cis+xXm5MnmZWdsdXctDr38rZRmpKeRkVMlrZTJtKjmSiS6uKQgexXsRxqdbPKl0VkXHszFSZKtel7Ac95z+oUpnIqtdtx+otHVibyMTohZz4XnJp9FzFNsisXQ7D8PcMjKGxxAYGOVJksJDoUr3id4Ae+rglzZghmbnLylEiQkElwooVmYtU9Ec8Cb2SqmJGQQ4Q0y5oY+oKazzTpqwsWG9+6Xua0m475q6X5BYBd9nHH2hLlxO5Sa8/O1Z4Y+8BVctNttsYN13yB/m7l+S9t7E5lZh64G5vqQ4R8v3nHt/5sHiHeJxtiUEOwjAMwJKNQTsh4CN9VNYEiAhFhEx8HzS0Gz5ZNnTwY4T/ZOywxw0OuMUdJsw4Qqpk0pg8m5yjTA/j/WJVvZrw8N0eh4vGdZ7WmO6kVsjiGG+NEC+v50wufDJtN2FtawD4ANUmI2EAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA==) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"]:before, [class*=" icon-"]:before {

    font-size: 40px;

    font-family: "icons";
    font-style: normal;
    font-weight: normal;
    speak: none;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: .2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }

  .icon-calendar:before {
    content: '\\e800';
  }

  /* '' */

  .icon-left-bold:before {
    content: '\\e801';
  }

  /* '' */

  .icon-left-circled:before {
    content: '\\e802';
  }

  /* '' */

  .icon-alert:before {
    content: '\\e803';
  }

  /* '' */

  .icon-github-circled:before {
    content: '\\f09b';
  }

  /* '' */

  .icon-mail-alt:before {
    content: '\\f0e0';
  }

  /* '' */

  .icon-twitter-squared:before {
    content: '\\f304';
  }

  /* '' */

  .icon-linkedin-squared:before {
    content: '\\f30c';
  }

  /* '' */
`;

const Flare = () => (<Wrapper  className="h-20">
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
</Wrapper>);

export default Flare;
