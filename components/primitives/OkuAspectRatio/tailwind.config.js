const { grayA, oku, blck } = require('./colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...oku,
        ...grayA,
        ...blck,
      },
    },
  },
  plugins: [],
}
