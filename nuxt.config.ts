import pkg from './package.json'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxt/ui',
    '@nuxtlabs/github-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'v-plausible',
  ],
  imports: {
    dirs: ['stores'],
  },
  extends: [
    '@nuxt/ui-pro',
    process.env.NUXT_PERGEL_PATH ? resolve(process.env.NUXT_PERGEL_PATH, '.docs') : ['github:oku-ui/pergel/.docs#main'],
    process.env.NUXT_PRIMITIVES_PATH ? resolve(process.env.NUXT_PRIMITIVES_PATH, '.docs') : ['github:oku-ui/primitives/.docs#main'],
  ],
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons', 'ph', 'twemoji', 'solar'],
  },
  content: {
    sources: {
      pergel: process.env.NUXT_PERGEL_PATH
        ? {
            prefix: '/pergel',
            driver: 'fs',
            base: resolve(process.env.NUXT_PERGEL_PATH, '.docs/content/pro'),
          }
        : {
            prefix: '/pergel',
            driver: 'github',
            repo: 'oku-ui/pergel',
            branch: 'main',
            dir: '.docs/content/pergel',
          },
      primitives: process.env.NUXT_PRIMITIVES_PATH
        ? {
            prefix: '/primitives',
            driver: 'fs',
            base: resolve(process.env.NUXT_PRIMITIVES_PATH, '.docs/content/primitives'),
          }
        : {
            prefix: '/primitives',
            driver: 'github',
            repo: 'oku-ui/primitives',
            branch: 'main',
            dir: '.docs/content/primitives',
          },
    },
  },
  fontMetrics: {
    fonts: ['DM Sans'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/api/search.json'],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // Adding all global components to the main entry
    // To avoid lagging during page navigation on client-side
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global)
          comp.global = 'sync'
      }
    },
  },
  plausible: {
    init: {
      domain: 'oku-ui.com',
      apiHost: 'https://rapor.vucod.com',
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  },
})
