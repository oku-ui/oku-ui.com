<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface Content extends ParsedContent {
  root: boolean
  title: string
  description: string
}
const slug = computed(() => useRoute().path)

// const { data: arrayTest } = await useAsyncData('array', () =>
//   queryContent<Content>(slug.value).sort({ version: -1 }).find(),
// )

const { data } = await useAsyncData(slug.value, () =>
  queryContent<Content>(slug.value).findOne(),
)

// const combined = computed(() => {
//   if (one.value?.root && Array.isArray(arrayTest.value))
//     return arrayTest.value?.[0]
//   else
//     return one.value
// })

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

  <DocsPrevNext />
</template>
