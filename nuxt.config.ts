// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
