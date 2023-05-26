export default defineNuxtRouteMiddleware((to) => {
  if (to.name === 'docs-slug') {
    if ('slug' in to.params) {
      if (to.params.slug.includes('aspet-ratio'))
        return navigateTo('/docs/primitives/components/aspect-ratio', { redirectCode: 301 })
    }
  }
})
