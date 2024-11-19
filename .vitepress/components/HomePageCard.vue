<script setup lang="ts">
import ProductCard from './ProductCard.vue'

const data = [
  {
    to: 'https://primitives.oku-ui.com',
    title: 'Primitives',
    description: 'Unstyled, accessible components for building high‑quality design systems...',
    active: true,
    theme: 'purple',
    image: 'command',
    buttonText: 'See Docs',
  },
  {
    to: 'https://motion.oku-ui.com',
    title: 'Motion',
    description: 'Motion One for Vue is a 5kb animation library for Vue 3. Built on Motion One, it\'s capable of springs, independent transforms, and hardware accelerated animations.',
    theme: 'green',
    image: 'zap',
    active: true,
    buttonText: 'See Docs',
  },
  {
    to: 'https://pergel.oku-ui.com',
    title: 'Pergel',
    description: 'Full Stack Nuxt Application. It contains the necessary toolkits for a software developer and a fast, clean, tested toolkit.',
    active: true,
    theme: 'orange',
    image: 'pergel',
    buttonText: 'See Docs',
  },
]

</script>

<template>
  <div class="grid mx-auto w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-12">
    <ProductCard v-for="item in data" :key="item.title" :data="item" />
  </div>
</template>

<style lang="postcss"></style>
