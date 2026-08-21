/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1eb",
        cream: "#fffdf9",
        ink: {
          DEFAULT: "#1c2430",
          muted: "#5a6270",
          faint: "#8b8490",
        },
        accent: {
          DEFAULT: "#c45c3a",
          dark: "#a84a2e",
        },
        rule: "#d6d0c6",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
