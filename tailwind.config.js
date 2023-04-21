/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      background: "#F7ECDE",
      contrast: "#262525",
      accent: "#FAEEE0",
    },
    extend: {
      fontSize: {
        // title
        "title-2xl": "11.089rem",
        "title-xl": "6.854rem",
        "title-md": "4.236rem",
        title: "2.618rem",
        // title-small
        "title-small-xl": "4.236rem",
        "title-small-md": "2.618rem",
        "title-small": "1.618rem",
        // subtitle
        "subtitle-xl": "2.618rem",
        "subtitle-md": "1.618rem",
        subtitle: "1rem",
        // subtitle-small
        "subtitle-small-xl": "1.618rem",
        "subtitle-small": "1rem",
        // body
        "body-xl": "1.618rem",
        body: "1rem",
        // overline
        overline: "1rem",
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
        emphasis: ["var(--font-bodoni-moda)"],
      },
    },
  },
  plugins: [],
};
