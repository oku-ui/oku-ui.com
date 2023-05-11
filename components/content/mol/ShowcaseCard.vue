<script setup lang="ts">
defineProps<{
  to: string
  title: string
  description: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="p-6 border border-blue-200 rounded-xl shadow-xl dark:shadow-black/25 odd:rotate-2 lg:odd:-rotate-6 even:-rotate-2 lg:even:rotate-6 bg-blue-800/15 backdrop-blur-sm lg:w-1/4 hover:bg-blue-800/25 transition-colors">
    <div>
      <h3>
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
    </div>
    <slot />
  </NuxtLink>
</template>
