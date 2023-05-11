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
</script>

<template>
  <div v-if="prev || next" class="grid gap-8 sm:grid-cols-2 mb-40">
    <NuxtLink v-if="prev && prev._path" :to="prev._path" class="block px-5 py-8 text-oku-700 transition-shadow bg-oku-900 border-2 shadow shadow-oku-800 not-prose rounded-xl border-oku-800 dark:bg-oku-800/25 hover:shadow-lg dark:text-oku-300 dark:shadow-black/50 group">
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
    </NuxtLink>

    <span v-else />

    <NuxtLink v-if="next && next._path" :to="next._path" class="block px-5 py-8 text-oku-700 transition-shadow bg-oku-900 border-2 shadow shadow-oku-800 not-prose rounded-xl border-oku-800 dark:bg-oku-800/25 hover:shadow-lg dark:text-oku-300 dark:shadow-black/50 group">
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
    </NuxtLink>
  </div>
</template>
