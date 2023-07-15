import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/icon.svg' }],
    },
  },

  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/productdevbookcom/v-plausible
    'v-plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
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

  routeRules: {
    '/docs/primitives/overview/introduction': {
      redirect: {
        to: '/primitives/introduction/introduction',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/aspet-ratio': {
      redirect: {
        to: '/primitives/components/aspect-ratio',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/avatar': {
      redirect: {
        to: '/primitives/components/avatar',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/checbox': {
      redirect: {
        to: '/primitives/components/checkbox',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/label': {
      redirect: {
        to: '/primitives/components/label',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/progress': {
      redirect: {
        to: '/primitives/components/progress',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/separator': {
      redirect: {
        to: '/primitives/components/separator',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/toggle': {
      redirect: {
        to: '/primitives/components/toggle',
        statusCode: 301,
      },
    },
    '/about/we': {
      redirect: {
        to: '/oku',
        statusCode: 301,
      },
    },
  },
})
