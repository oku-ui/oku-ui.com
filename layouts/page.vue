<script setup lang="ts">
const { config } = useDocus()
</script>

<template>
  <div class="page-layout">
    <Container :fluid="config?.main?.fluid" :padded="config?.main?.padded">
      <article>
        <slot />
      </article>
    </Container>
  </div>
</template>
