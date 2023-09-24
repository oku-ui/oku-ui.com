import { createResolver } from '@nuxt/kit'
import pkg from '../package.json'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  devtools: { enabled: true, componentInspector: false, viteInspect: false },
  modules: [
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxt/ui',
    '@nuxtlabs/github-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@oku-ui/primitives-nuxt',
    '@pinia/nuxt',
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
  components: [
    {
      path: '~/components',
    },
    {
      global: true,
      path: '~/components/primitives',
      priority: 1,
    },
    {
      global: true,
      path: '~/components/content',
      priority: 1,
    },
  ],
})
