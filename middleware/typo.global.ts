export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.slug.includes('aspet-ratio'))
    return navigateTo('/docs/primitives/components/aspect-ratio', { redirectCode: 301 })
})
