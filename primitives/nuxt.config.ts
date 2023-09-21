// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  extends: ['@nuxt-themes/docus', '../share-layer'],
  devtools: { enabled: true },
})
