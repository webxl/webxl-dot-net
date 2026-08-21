/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        char: "#131210",
        bone: {
          DEFAULT: "#e9e2d2",
          dim: "#9a9284",
        },
        blaze: "#ff4e00",
        line: "#2a2722",
      },
      fontFamily: {
        poster: ['"Big Shoulders Display"', "Impact", "Arial Narrow", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        sans: ['"IBM Plex Sans"', "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
