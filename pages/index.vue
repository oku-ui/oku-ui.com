<script setup lang="ts">
const data = [
  {
    to: 'oku',
    title: 'About',
    description: 'Oku is a brand and community focused on the Vue and Nuxt markets. So, what wins the Oku?',
    active: true,
    theme: 'blue',
    image: 'users',
    buttonText: 'Explore',
  },
  {
    to: 'primitives',
    title: 'Primitives',
    description: 'Unstyled, accessible components for building high‑quality design systems...',
    active: true,
    theme: 'purple',
    image: 'command',
    buttonText: 'See Docs',
  },
  {
    to: '#',
    title: 'Notification',
    description: 'in the future.',
    theme: 'orange',
    image: 'bell',
    active: false,
  },
  {
    to: '#',
    title: 'Motion',
    description: 'in the future.',
    theme: 'green',
    image: 'zap',
    active: false,
  },
]
</script>

<template>
  <div class="flex flex-col items-center px-5 min-h-screen w-full max-w-screen">
    <h1 class="text-[#111] text-3xl md:text-5xl mt-20 text-center font-medium dark:text-white">
      Oku focuses on the smallest detail.
    </h1>
    <div class="grid mx-auto grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-[1200px] mt-12">
      <div v-for="item in data" :key="item.title" class="aspect-square">
        <ShowcaseCard :data="{ ...item }" />
      </div>
    </div>
    <div class="mt-20 flex mx-auto flex-col gap-6 w-full max-w-[1200px]">
      <h2 id="the-team" class="text-2xl font-bold text-center">
        Our Team
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:grid-cols-4">
        <div class="w-full">
          <TeamCard name="Emir Uluçay" title="Core team member of Vitest" image="user-avatars/0fatihyildiz.png" description="An open source fullstack developer" />
        </div>
      </div>
    </div>
    <div class="mt-20">
      <h2 id="the-team" class="text-xl font-bold text-center">
        Contributors
      </h2>
      <p class="text-lg max-w-200 text-center leading-7 mt-10">
        <Contributors />
        <br>
        <a href="https://chat.productdevbook.com" rel="noopener noreferrer">Join the community</a> and get involved!
      </p>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
        Sponsored by
      </h2>
      <div class="mx-auto mt-10 flex justify-center items-center max-w-none ">
        <div class="flex flex-col items-center">
          <a class="text-lg font-semibold text-oku-600" href="https://github.com/sponsors/antfu" rel="noopener noreferrer">productdevbook's Sponsors</a>
          <a href="https://cdn.jsdelivr.net/gh/productdevbook/static/sponsors.svg" target="_blank" rel="noopener noreferrer">
            <img
              crossorigin="anonymous"
              inline-block
              width="768" height="1464"
              class="resizable-img"
              loading="lazy"
              src="/sponsors/productdevbook.svg"
              alt="Anthony Fu's sponsors"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">

</style>
