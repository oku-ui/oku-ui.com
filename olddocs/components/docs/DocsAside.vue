<script setup lang="ts">
const { tree } = useDocus()
</script>

<template>
  <nav>
    <DocsAsideTree v-if="tree?.length > 0" :links="tree" />
    <NuxtLink v-else to="/" class="go-back-link">
      <Icon name="heroicons-outline:arrow-left" class="icon" />
      <span class="text">Go back</span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="ts">

</style>
