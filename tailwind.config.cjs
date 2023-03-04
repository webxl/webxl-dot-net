/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
      container: {
        padding: '2rem',
    },
    backgroundImage: {
      'site': "url('/stacked-waves-haikei.svg')",
    }
  },
  plugins: [],
}
