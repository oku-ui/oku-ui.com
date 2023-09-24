export default defineAppConfig({
  ui: {
    gray: 'slate',
    primary: 'green',
  },
  elements: {
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-gray-950)',
        foreground: 'var(--color-gray-400)'
      }
    }
  }
})
