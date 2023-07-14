<script setup lang="ts">
const isPreview = ref(true)
</script>

<template>
  <div>
    <button
      class="px-5 py-2.5 text-sm hover:bg-oku-700 opacity-50 hover:opacity-100 transition rounded mr-2"
      :class="{ 'bg-oku-900 border border-oku-700 !opacity-100': isPreview }" :active="isPreview" @click="isPreview = true"
    >
      Preview
    </button>
    <button
      class="px-5 py-2.5 text-sm hover:bg-oku-900 opacity-50 hover:opacity-100 transition rounded"
      :class="{ 'bg-oku-900 border border-oku-700 !opacity-100': !isPreview }" @click="isPreview = false"
    >
      Code
    </button>

    <div>
      <AppDemo v-show="isPreview">
        <slot name="preview" />
      </AppDemo>

      <div v-show="!isPreview" class="mt-4">
        <slot name="code" />
      </div>
    </div>
    <DocsVersionBar />
  </div>
</template>
