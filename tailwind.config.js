/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      background: "#DBD0C0",
      text: "#262525",
      accent: "#FAEEE0"
    },
    extend: {
      fontSize: {
        "12xl": "10rem"
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
        emphasis: ["var(--font-bodoni-moda)"]
      }
    }
  },
  plugins: []
};
