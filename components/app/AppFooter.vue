<script setup lang="ts">
interface MenuItem {
  icon: string
  href: string
}

const menu: MenuItem[] = [
  {
    icon: 'i-mdi-github',
    href: 'https://github.com/oku-ui',
  },
  {
    icon: 'i-mdi-discord',
    href: 'https://chat.productdevbook.com',
  },
  {
    icon: 'i-mdi-twitter',
    href: 'https://twitter.com/oku_ui',
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
    <div class="gap-8 flex flex-col-reverse sm:flex-row items-center w-full mx-auto max-w-6xl px-12 py-8 md:py-12">
      <a target="_blank" href="https://github.com/productdevbook" class="text-center text-sm text-slate-400">
        2023 Oku. A project by productdevbook.
      </a>

      <div class="flex min-w-0 justify-end flex-1 gap-x-6">
        <NuxtLink
          v-for="item in menu" :key="item.href"
          :to="item.href"
          :class="item.icon"
          class="text-gray-50 text-2xl focus:outline-none font-bold hover:text-cyan-600 focus:text-gray-50"
        />
      </div>
    </div>
  </footer>
</template>
