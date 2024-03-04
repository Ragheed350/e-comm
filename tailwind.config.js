const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      white: "#FFFFFF",
      primary: "#223263",
      secondary: "#33A0FF",
      blue: "#BCDDFE",
      red: "#FB7181",
      black: "#22262A",
    },
    extend: {},
  },
  plugins: [],
}
