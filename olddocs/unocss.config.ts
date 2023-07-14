import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  safelist: [
    'i-ph-triangle-thin',
    'ph-triangle-thin',
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'h1, h2, h3, h4, h5, h6': {
          'font-weight': 'var(--font-weight-bold)',
        },
      },
    }),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'Fira Code',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      gray: {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#313131',
        950: '#0a0a0a',
      },
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
      yellow: {
        50: '#fef9e8',
        100: '#fef0c3',
        200: '#fee28a',
        300: '#fdd147',
        400: '#fac215',
        500: '#eab308',
        600: '#ca9a04',
        700: '#a17c07',
        800: '#85680e',
        900: '#715a12',
        950: '#423306',
      },

    },
  },
})
