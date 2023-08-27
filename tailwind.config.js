/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')
const { blackA, grayA, oku, codGray } = require('./colors')

module.exports = {
  content: [
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        blackA: {
          ...blackA,
        },
        grayA: {
          ...grayA,
        },
        oku: {
          ...oku,
        },
        codGray: {
          ...codGray,
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['fa-brands', 'heroicons', 'ph']),
    }),
    require('@tailwindcss/typography'),
  ],
}
