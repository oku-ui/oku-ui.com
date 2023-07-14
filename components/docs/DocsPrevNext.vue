<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <DocsPrevNextCard
      v-if="prev" :title="prev.title" :description="prev.description" :to="prev._path"
      icon="i-heroicons-arrow-left-20-solid"
    />
    <span v-else class="hidden sm:block">&nbsp;</span>
    <DocsPrevNextCard
      v-if="next" :title="next.title" :description="next.description" :to="next._path"
      icon="i-heroicons-arrow-right-20-solid" class="text-right"
    />
  </div>
</template>

<script setup lang="ts">


import { upperFirst } from 'scule'

const { prev, next, navigation } = useContent()
const { navDirFromPath } = useContentHelpers()

const directory = (link: any) => {
  const nav = navDirFromPath(link._path, navigation.value || [])

  if (nav && nav[0]) {
    return nav[0]?._path ?? ''
  } else {
    const dirs = link.split('/')
    const directory = dirs.length > 1 ? dirs[dirs.length - 2] : ''
    return directory.split('-').map(upperFirst).join(' ')
  }
}

</script>