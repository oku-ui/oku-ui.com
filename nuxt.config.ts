import { createResolver } from '@nuxt/kit'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true},
  modules: [
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxt/ui',
    '@nuxtlabs/github-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@oku-ui/primitives-nuxt',
  ],

  primitives: {
    // All components install
    installComponents: true,
  },

  imports: {
    dirs: ['stores'],
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons', 'ph', 'twemoji', 'solar'],
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
      routes: ['/', '/getting-started', '/api/search.json'],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  typescript: {
    strict: false,
    includeWorkspace: true,
  },
  github: {
    owner: 'oku-ui',
    repo: 'primitives',
    branch: 'main',
  },
  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // Adding all global components to the main entry
    // To avoid lagging during page navigation on client-side
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global) { comp.global = 'sync' }
      }
    }
  }
})
