import pkg from './package.json'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/content',
    // 'nuxt-og-image',
    '@nuxt/ui',
    '@nuxtlabs/github-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'v-plausible',
    '@oku-ui/motion-nuxt',
  ],
  imports: {
    dirs: ['stores'],
  },
  extends: [
    '@nuxt/ui-pro',
  ],
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons', 'ph', 'twemoji', 'solar', 'game-icons'],
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
      failOnError: false,
      // Ignore weird url from crawler on some modules readme
      ignore: ['/modules/%3C/span', '/modules/%253C/span'],
      routes: [
        '/',
        '/api/search.json',
      ],
    },
    routeRules: {
      '/pergel/**': {
        redirect: 'https://pergel.oku-ui.com',
      },
      '/motion/**': {
        redirect: 'https://motion.oku-ui.com',
      },
      '/primitives/**': {
        redirect: 'https://primitives.oku-ui.com',
      },
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
      for (const component of components) {
        if (component.shortPath.includes(process.env.NUXT_PERGEL_PATH || process.env.NUXT_PRIMITIVES_PATH || ''))
          component.global = true
        else if (component.global)
          component.global = 'sync'
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
