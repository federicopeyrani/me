/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      background: "#DBD0C0",
      contrast: "#262525",
      accent: "#FAEEE0",
    },
    extend: {
      fontSize: {
        "title-2xl": "10rem",
        "title-xl": "7.5rem",
        "title-lg": "6rem",
        "title-md": "4.5rem",
        title: "3rem",
        "subtitle-2xl": "3rem",
        "subtitle-xl": "2.5rem",
        "subtitle-lg": "2rem",
        subtitle: "1.25rem",
        "body-xl": "1.5rem",
        body: "1rem",
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
        emphasis: ["var(--font-bodoni-moda)"],
      },
    },
  },
  plugins: [],
};
