/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        clr: {
          colors: {
            darkOrange: "#D87D4A",
            lightOrange: "#fbaf85",
            lightBlack: "#101010",
            darkGrey: "#F1F1F1",
            lightGrey: "#FAFAFA",
            bg: "#0E0E0E",
            bgHover: "#4C4C4C",
            homeBg: "#191919",
            border: "#CFCFCF",
          },
        }
      },
      fontFamily: {
        MainFont: 'Manrope'
      }
    },
  },
  plugins: [],
}

