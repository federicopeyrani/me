/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-karla)"],
        emphasis: ["var(--font-emphasis)"],
      },
    },
  },
  plugins: [],
};
