<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const { metaSymbol } = useShortcuts()

const navigation = ref<NavItem[]>([
  {
  title: 'Primitives',
  _path: '/primitives',
},
{
  title: 'About',
  _path: '/oku',
}
])
const links = inject<Ref<any[]>>('links')
</script>

<template>
  <UHeader
    :links="links"
    :class="{
      'border-codGray-200/75 dark:border-codGray-900/50': $route.path === '/',
      'border-codGray-200 dark:border-codGray-800': $route.path !== '/',
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-1.5 font-bold text-xl text-gray-900 dark:text-white" aria-label="Vue Email">
        <Logo class="w-auto h-6" />
      </NuxtLink>
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UDocsSearchButton :label="null" />
      </UTooltip>

      <UColorModeButton />

      <UButton
        to="https://github.com/oku-ui"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        class="hidden lg:inline-flex"
        v-bind="$ui.button.secondary"
      />
    </template>

    <template #panel>
      <UNavigationTree
                :links="mapContentNavigation(navigation)
                  "
              />
    </template>
  </UHeader>
</template>
