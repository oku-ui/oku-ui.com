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
    '@oku-ui/primitives-nuxt',
    'v-plausible',
    'nuxt-og-image',
  ],

  imports: {
    dirs: ['stores'],
  },

  extends: [
    '@nuxt/ui-pro',
    ['github:oku-ui/pergel/.docs#main'],
  ],

  primitives: {
    // All components install
    installComponents: true,
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
      routes: ['/', '/primitives', '/primitives/getting-started', '/api/search.json'],
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
    repo: 'docs',
    branch: 'main',
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
    '/docs/primitives/components/checkbox': {
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
    '/primitives/introduction/nuxt': {
      redirect: {
        to: '/primitives/getting-started/nuxt',
        statusCode: 301,
      },
    },
    '/primitives/introduction/introduction': {
      redirect: {
        to: '/primitives/getting-started',
        statusCode: 301,
      },
    },
  },
})
