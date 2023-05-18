<script setup lang="ts">
interface MenuItem {
  icon: string
  href: string
}

const menu: MenuItem[] = [
  {
    icon: 'i-ph-github-logo-fill',
    href: 'https://github.com/oku-ui',
  },
  {
    icon: 'i-ph-discord-logo-fill',
    href: 'https://chat.productdevbook.com',
  },
  {
    icon: 'i-ph-twitter-logo-fill',
    href: 'https://twitter.com/oku_ui',
  },
]
</script>

<template>
  <div class="relative z-10">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-6xl">
      <nav class="h-16 flex items-center justify-between" aria-label="Global">
        <div class="flex lg:min-w-0" aria-label="Global">
          <a href="/" class="u-text-black flex items-center relative" aria-label="Oku">
            <img src="/logo.svg" alt="Oku" class="h-6 w-auto">
          </a>
        </div>
        <div class="flex lg:min-w-0 lg:justify-end lg:flex-1 gap-x-6">
          <NuxtLink
            v-for="item in menu" :key="item.href"
            :to="item.href"
            :class="item.icon"
            class="text-gray-50 text-2xl focus:outline-none font-bold hover:text-cyan-600 focus:text-gray-50"
          />
        </div>
      </nav>
    </div>
  </div>
</template>
