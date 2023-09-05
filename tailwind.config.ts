import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

import Typography from '@tailwindcss/typography'

import { blackA, codGray, grayA, oku } from './colors'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Inter fallback', ...defaultTheme.fontFamily.sans],
        // sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            pre: {
              backgroundColor: 'transparent',
              margin: 0,
              padding: 0,
            },
          },
        },
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['fa-brands', 'heroicons', 'ph', 'ic']),
    }),
    Typography,
  ],
}
