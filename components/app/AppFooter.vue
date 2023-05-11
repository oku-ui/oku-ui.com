<script setup lang="ts">
interface MenuItem {
  label: string
  href: string
}

const menu: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Primitives',
    href: '/docs/primitives/overview/introduction',
  },
]
</script>

<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative max-w-7xl">
    <div class="relative text-center">
      <img src="/icon.svg" alt="volta logo" class="w-20 h-20 mx-auto mb-5 text-white"><h2 class="text-3xl font-bold tracking-tight u-text-gray-900 sm:text-4xl">
        Start with Oku, today.
      </h2>
      <!-- <div class="mt-12 sm:mx-auto flex justify-center items-center gap-4">
        <button class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm px-4 py-2 shadow-sm dark:shadow-black/10 border border-white/20 hover:border-white/30 focus:border-white/30 u-text-gray-900 bg-white/10 hover:bg-white/5 backdrop-blur-sm transition-colors duration-100 inline-flex items-center rounded-full" type="button">
          <span>Sign up for free</span>
          <span class="i-octicon-arrow-right-24 flex-shrink-0 h-5 w-5 ml-2 -mr-1" aria-hidden="true" />
        </button><a href="/download" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm px-4 py-2 shadow-sm border border-transparent u-text-white u-bg-gray-800 hover:u-bg-gray-900 disabled:u-bg-gray-800 focus-visible:border-primary-500 inline-flex items-center rounded-full"><span class="i-mdi-apple flex-shrink-0 h-5 w-5 -ml-1 mr-2" aria-hidden="true" />
          <span>Get the app</span>
        </a>
      </div> -->
    </div>
  </div>
  <footer class="relative z-10">
    <div class="mx-auto max-w-6xl py-8 md:py-12 grid gap-6 md:grid-cols-3">
      <div class="flex items-center justify-center gap-4 md:order-3">
        <a href="https://twitter.com/oku_ui" rel="noopener noreferrer" target="_blank" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm p-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-md !p-0" aria-label="Twitter">
          <span class="i-mdi-twitter flex-shrink-0 h-5 w-5" aria-hidden="true" />

        </a>
        <a href="https://github.com/oku-ui" rel="noopener noreferrer" target="_blank" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm p-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-md !p-0" aria-label="GitHub">
          <span class="i-mdi-github flex-shrink-0 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <ul class="mt-4 md:mt-0 justify-center gap-x-4 lg:gap-x-6 flex items-center md:order-2 overflow-x-auto">
        <li v-for="item in menu" :key="item">
          <NuxtLink :href="item.href" class="text-sm focus:outline-none u-text-gray-600 hover:u-text-gray-900 focus:u-text-gray-900" label="Guide">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="mt-4 md:mt-0 md:order-1">
        <p class="text-center text-sm u-text-gray-700">
          2023 Oku. A project by productdevbook.
        </p>
      </div>
    </div>
  </footer>
</template>
