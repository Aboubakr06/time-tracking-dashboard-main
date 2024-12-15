/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./*.js",
    "./**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
}
