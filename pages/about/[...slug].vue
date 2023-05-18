<script setup lang="ts">
const slug = computed(() => useRoute().path)
const { data } = await useAsyncData('about', () =>
  queryContent(slug.value).findOne(),
)
useCustomHead({
  title: data.value?.title ?? '',
  description: data.value?.description ?? '',
})
</script>

<template>
  <main v-if="data" class="prose prose-oku-50 dark:prose-invert max-w-none whitespace-pre-wrap break-words mb-20">
    <h1>{{ data.title }}</h1>
    <p v-if="data.description" class="text-lg font-bold">
      {{ data.description }}
    </p>
    <ContentRenderer :value="data" />
  </main>
</template>
