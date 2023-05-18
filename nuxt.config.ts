// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/icon.svg' }],
    },
  },

  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    '@vueuse/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css',
  ],
  unocss: {
    configFile: '~/unocss.config.ts',
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
  nitro: {
    rootDir: '.',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  components: [{ path: '~/components', global: true }],

  plausible: {
    apiHost: 'https://rapor.vucod.com',
    domain: 'oku-ui.com',
  },
})
