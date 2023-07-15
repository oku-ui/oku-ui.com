import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'v-plausible',
    '@nuxthq/studio',
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
      path: '~/components/app',
    },
    {
      global: true,
      path: '~/components/docs',
      prefix: '',
    },
  ],

  plausible: {
    init: {
      domain: 'oku-ui.com',
      apiHost: 'https://rapor.vucod.com',
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  },

})
