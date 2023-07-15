<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

provide('navigation', navigation)

useHead({
  link: [
    { rel: 'prefetch', href: '/sponsors/productdevbook.svg' },
  ],
})
</script>

<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>
