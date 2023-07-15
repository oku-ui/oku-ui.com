<script setup lang="ts">
const data = [
  {
    to: 'oku',
    title: 'About',
    description: 'Oku is a brand and community focused on the Vue and Nuxt markets. So, what wins the Oku?',
    active: true,
    theme: 'blue',
    image: 'users',
  },
  {
    to: 'primitives',
    title: 'Primitives',
    description: 'Renders an accessible label associated with controls.',
    active: true,
    theme: 'purple',
    image: 'command',
  },
  {
    to: '#',
    title: 'Notification',
    description: 'in the future.',
    theme: 'orange',
    image: 'bell',
  },
  {
    to: '#',
    title: 'Motion',
    description: 'in the future.',
    theme: 'green',
    image: 'zap',
  },
]
</script>

<template>
  <div class="flex flex-col items-center px-5 min-h-screen w-full max-w-screen">
    <h1 class="text-[#111] text-3xl md:text-5xl mt-20 text-center font-medium dark:text-white">
      Oku focuses on the smallest detail.
    </h1>
    <div class="grid mx-auto grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1200px] mt-12">
      <div v-for="item in data" :key="item.title" class="aspect-square">
        <ShowcaseCard :data="{ ...item }" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">

</style>
