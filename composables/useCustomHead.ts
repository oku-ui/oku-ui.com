export function useCustomHead({
  title = '',
  description = '',
  image = 'https://oku-ui.com/og-image.png',
}) {
  const { path } = useRoute()
  const formattedTitle = `${title} | Oku`
  return useSeoMeta({
    title() {
      return formattedTitle
    },
    description() {
      return description
    },
    ogTitle() {
      return formattedTitle
    },
    ogDescription() {
      return description
    },
    ogImage() {
      return image
    },
    ogUrl() {
      return `https://oku-ui.com${path}`
    },
    twitterTitle() {
      return formattedTitle
    },
    twitterDescription() {
      return description
    },
    twitterImage() {
      return image
    },
    twitterCard: 'summary_large_image',
  })
}
