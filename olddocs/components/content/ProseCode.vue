<script setup lang="ts">
const props = defineProps<{
  code: string
  language?: string
  filename?: string
  higlights?: number[]
  meta?: string
}>()
const { code } = toRefs(props)
const { copy, copied } = useClipboard({ source: code })
</script>

<template>
  <div class="rounded-xl group relative bg-gradient-to-r mt-10 border border-oku-700 from-oku-400/30 to-yellow-100/30 p-4" :class="`language-${language}`">
    <div v-if="filename" class="mr-4 mt-4 md:mr-0 md:mt-0 flex justify-end">
      <samp
        class="not-prose w-max md:absolute top-4 right-4 opacity-70 md:group-hover:opacity-0 transition text-xs px-2 py-1 bg-oku-700 rounded"
      >
        {{ filename }}
      </samp>
    </div>

    <button
      class="absolute bottom-4 right-4 text-lg w-10 h-10 flex items-center justify-center rounded-lg border border-oku-700  opacity-0 group-hover:opacity-100 text-white transition bg-yellow-500"
      @click="copy()"
    >
      <div v-if="!copied" class="i-ph:clipboard w-6 h-6" />
      <div v-else class="i-ph:check" />
    </button>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
