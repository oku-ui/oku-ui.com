/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
    require('@tailwindcss/typography'),
  ],
}
