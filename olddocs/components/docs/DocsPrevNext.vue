<script setup lang="ts">
import { upperFirst } from 'scule'

const { prev, next, navigation } = useContent()
const { navDirFromPath } = useContentHelpers()

function directory(link: any) {
  const nav = navDirFromPath(link._path, navigation.value || [])
  if (nav) {
    if (nav && nav[0]) {
      return nav[0]?._path ?? ''
    }
    else {
      const dirs = link.split('/')
      const directory = dirs.length > 1 ? dirs[dirs.length - 2] : ''
      return directory.split('-').map(upperFirst).join(' ')
    }
  }
}

const card = ref<HTMLDivElement>()
const card2 = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)
const { elementX: elementX2, elementY: elementY2 } = useMouseInElement(card2)
</script>

<template>
  <div v-if="prev || next" class="grid gap-8 sm:grid-cols-2 mb-40">
    <NuxtLink
      v-if="prev && prev._path" ref="card"
      :to="prev._path" :style="{
        '--x': `${elementX}px`,
        '--y': `${elementY}px`,
      }"
      class="border-gradient group relative flex items-center justify-center h-[300px] rounded p-8 before:(content-[''] absolute rounded-xl -inset-x-px -inset-y-px overflow-hidden h-[calc(100%+2px)] w-[calc(100%+2px)]) z-10 lg:h-[200px] lg:p-16"
    >
      <div class="absolute inset-0 rounded-xl bg-oku-900 transition-colors duration-300" />
      <div class="absolute bg-down inset-0 rounded-xl bg-oku-900 transition-colors duration-300" />
      <div class="relative">
        <span v-if="directory(prev._path)" class="directory">
          {{ directory(prev._path) }}
        </span>
        <div class="inline-flex items-center rounded-full p-1.5 bg-oku-950 dark:bg-oku-800 group-hover:bg-oku-900 dark:group-hover:bg-oku-400/10 ring-1 ring-oku-300 mb-4 group-hover:ring-oku-400/50 transition-colors">
          <span class="w-5 h-5 transition-colors text-oku-100 group-hover:text-oku-50" :class="prev.icon" />
        </div>

        <p class="text-oku-50 font-medium text-[15px] mb-1">
          {{ prev.title }}
        </p>
        <p class="text-sm font-normal text-oku-300">
          Get an overview of Volta's features and how to use them.
        </p>
      </div>
    </NuxtLink>

    <span v-else />

    <NuxtLink
      v-if="next && next._path" ref="card2"
      :to="next._path"
      :style="{
        '--x': `${elementX2}px`,
        '--y': `${elementY2}px`,
      }"
      class="border-gradient group flex items-center justify-center relative h-[300px] rounded p-8 before:(content-[''] absolute rounded-xl -inset-x-px -inset-y-px overflow-hidden h-[calc(100%+2px)] w-[calc(100%+2px)]) z-10 lg:h-[200px] lg:p-16"
    >
      <div class="absolute inset-0 rounded-xl bg-oku-900 transition-colors duration-300" />
      <div class="absolute bg-down inset-0 rounded-xl bg-oku-900 transition-colors duration-300" />
      <div class="relative">
        <span v-if="directory(next._path)" class="directory">
          {{ directory(next._path) }}
        </span>
        <div class="inline-flex items-center rounded-full p-1.5 bg-oku-950 dark:bg-oku-800 group-hover:bg-oku-900 dark:group-hover:bg-oku-400/10 ring-1 ring-oku-300 mb-4 group-hover:ring-oku-400/50 transition-colors">
          <span class="w-5 h-5 transition-colors text-oku-100 group-hover:text-oku-50" :class="next.icon" />
        </div>

        <p class="text-oku-50 font-medium text-[15px] mb-1">
          {{ next.title }}
        </p>
        <p class="text-sm font-normal text-oku-300">
          Get an overview of Volta's features and how to use them.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<style>
.border-gradient::before {
  /* background: red; */
  background: radial-gradient(150px circle at var(--x) var(--y),
      #ffffff00 0,
      #ffffff 50%,
      transparent 100%);
}

.bg-down {
  /* background: red; */
  background: radial-gradient(100px circle at var(--x) var(--y),
      #ff000000 0,
      #ffffff 0%,
      transparent 250%);
  opacity: 20%;
}
</style>
