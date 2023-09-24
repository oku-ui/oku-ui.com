<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  {{ highlights }}
  <ProseCode :code="code" language="language" :filename="filename" :highlights="highlights" :meta="meta">
    <pre class="flex overflow-x-auto pb-6" :class="$props.class" :data-meta="meta" :data-filename="filename" :data-language="language" :data-highlights="highlights">
      <slot />
    </pre>
  </ProseCode>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
