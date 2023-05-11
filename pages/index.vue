<script setup lang="ts">
const slug = computed(() => useRoute().path)
const { data } = await useAsyncData('index', () =>
  queryContent(slug.value).findOne(),
)

useCustomHead({
  title: 'Oku Open Source',
  description: 'Oku is a great choice for developers who want to build modern web applications with Vue.js.',
})
</script>

<template>
  <main v-if="data">
    <ContentRenderer :value="data" />
  </main>
  <div v-else>
    <NuxtLink to="/login">
      Login
    </NuxtLink>
  </div>
</template>
