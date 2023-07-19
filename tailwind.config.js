/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  content: [
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        oku: {
          50: '#f2f7f9',
          100: '#ddebf0',
          200: '#bed7e3',
          300: '#92bace',
          400: '#5f95b3',
          500: '#427898',
          600: '#3a6380',
          700: '#34526a',
          800: '#314659',
          900: '#2d3d4c',
          950: '#1a2632',
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
