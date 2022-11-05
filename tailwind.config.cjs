/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: {
        900: "#2d3248",
        700: "#19a2ae",
        400: "#6a6f81",
      },

      neutral: {
        400: "#969696",
        100: "#e8e8e8",
      },

      white: "#fff",
      blue: "#3e52a3",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [],
};
