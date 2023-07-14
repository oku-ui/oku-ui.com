import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    resolve('./app/module'),

  ],

  pinceau: {
    preflight: false,
  },

  oku: {
    icons: ['heroicons'],
  },

  components: [
    {
      global: true,
      path: '~/components/primitives',
    },
    {
      global: true,
      path: '~/components/app'
    },
    {
      global: true,
      path: '~/components/docs',
      prefix: ''
    },
  ]

  
})
