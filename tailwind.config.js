/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Dosis, sans-serif"], // place dif font in array to able to use more than one
    },
  },
  plugins: [],
};
