<script setup lang="ts">

const data = [
  {
    to: "oku",
    title: "About",
    description: "Oku is a brand and community focused on the Vue and Nuxt markets. So, what wins the Oku?",
    active: true
  },
  {
    to: "primitives",
    title: "Primitives",
    description: "Renders an accessible label associated with controls.",
    active: true
  },
  {
    to: "#",
    title: "Notification",
    description: "in the future."
  },
  {
    to: "#",
    title: "Motion",
    description: "in the future."
  } 
]
</script>

<template>
  <div class="flex flex-col items-center px-5 min-h-screen w-full max-w-screen">
    <div class="grid mx-auto max-w-4xl gap-12">
      <div v-for="item in data" :key="item.title">
        <ShowcaseCard :to="item.to" :title="item.title" :description="item.description" :active="item.active" />
      </div>
    </div>
  </div>
</template>


<style lang="postcss">

</style>