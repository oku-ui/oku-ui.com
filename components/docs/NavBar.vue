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
  <div class="relative z-10">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-6xl">
      <nav class="h-16 flex items-center justify-between" aria-label="Global">
        <div class="flex lg:min-w-0" aria-label="Global">
          <a href="/" class="u-text-black flex items-center relative" aria-label="Oku">
            <img src="/logo.svg" alt="Oku" class="h-6 w-auto">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 u-text-gray-700">
            <span class="sr-only">Open main menu</span>
            <div class="i-ph-list-bold text-white  h-5 w-5" />
          </button>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:justify-center lg:flex-1 lg:gap-x-12">
          <NuxtLink
            v-for="item in menu" :key="item.href"
            :to="item.href"
            class="text-gray-50 text-sm focus:outline-none font-bold hover:text-cyan-600 focus:text-gray-50"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
