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
    highlight: {
      theme: 'github-dark',
      preload: ['vue', 'ts'],
    },
    documentDriven: true,
  },

  plausible: {
    apiHost: 'https://rapor.vucod.com',
    domain: 'oku-ui.com',
    trackLocalhost: true,
  },
})
