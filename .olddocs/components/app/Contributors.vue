<script setup lang="ts">
const { contributors } = useContributors()
</script>

<template>
  <div class="flex flex-wrap gap-3 justify-center">
    <a
      v-for="{ name, avatar } of contributors" :key="name" :href="`https://github.com/${name}`" m-0
      rel="noopener noreferrer" :aria-label="`${name} on GitHub`"
    >
      <img loading="lazy" :src="avatar" width="50" height="50" class="rounded-full h-12 w-12" :alt="`${name}'s avatar`">
    </a>
  </div>
</template>
