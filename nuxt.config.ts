import pkg from './package.json'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  site: {
    url: 'https://oku-ui.com',
  },
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
    process.env.NUXT_PERGEL_PATH ? resolve(process.env.NUXT_PERGEL_PATH, '.docs') : ['github:oku-ui/pergel/.docs#main'],
    process.env.NUXT_PRIMITIVES_PATH ? resolve(process.env.NUXT_PRIMITIVES_PATH, '.docs') : ['github:oku-ui/primitives/.docs#main'],
    process.env.NUXT_MOTION_PATH ? resolve(process.env.NUXT_MOTION_PATH, '.docs') : ['github:oku-ui/motion/.docs#main'],
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
  content: {
    sources: {
      pergel: process.env.NUXT_PERGEL_PATH
        ? {
            prefix: '/pergel',
            driver: 'fs',
            base: resolve(process.env.NUXT_PERGEL_PATH, '.docs/content/pergel'),
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
      motion: process.env.NUXT_MOTION_PATH
        ? {
            prefix: '/motion',
            driver: 'fs',
            base: resolve(process.env.NUXT_MOTION_PATH, '.docs/content/motion'),
          }
        : {
            prefix: '/motion',
            driver: 'github',
            repo: 'oku-ui/motion',
            branch: 'main',
            dir: '.docs/content/motion',
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
      failOnError: false,
      // Ignore weird url from crawler on some modules readme
      ignore: ['/modules/%3C/span', '/modules/%253C/span'],
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
