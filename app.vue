<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

provide('navigation', navigation)

useHead({
  title: 'Oku',
  link: [
    { rel: 'prefetch', href: '/sponsors/productdevbook.svg' },
  ],
})

const useGlobal = useGlobalStore()

onMounted(() => {
  useGlobal.loadDesign()
})
</script>

<template>
  <AppLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </AppLayout>
</template>
