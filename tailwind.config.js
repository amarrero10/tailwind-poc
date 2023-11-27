/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#010851",
        secondary: "#9A7AF1",
        tartiary: "#707070",
        pink: "#EE9AE5",
      },
    },
  },
  plugins: [],
};
