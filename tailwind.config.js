/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'clrDarkOrange':'#D87D4A',
        'clrLightOrange':'#fbaf85',
        'clrLightBlack':'#101010',
        'clrDarkGrey':'#F1F1F1',
        'clrLightGrey':'#FAFAFA',
        'clrBg':'#0E0E0E'
      }
    },
  },
  plugins: [],
}

