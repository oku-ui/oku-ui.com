<script setup lang="ts">
const isDark = useColorMode()

const logo = computed(() => {
  return isDark.value === 'dark' ? 'https://raw.githubusercontent.com/oku-ui/static/main/logo/logo-white.svg' : 'https://raw.githubusercontent.com/oku-ui/static/main/logo/logo-dark.svg'
})
</script>

<template>
  <img width="120" :src="logo">
</template>
