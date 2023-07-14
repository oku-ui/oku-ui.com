<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'nuxt-link'
  disabled?: boolean
  onClick?: () => void
  href?: string
  icon?: string
  text?: string
}
withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  disabled: false,
  icon: 'i-octicon-mark-github-16',
  text: 'Install Primitives',
})
</script>

<template>
  <button v-if="type === 'button'" v-bind="$attrs" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 shadow-sm dark:shadow-black/10 border border-white/20 hover:border-white/30 focus:border-white/30 u-text-gray-900 bg-white/10 hover:bg-white/5 backdrop-blur-sm transition-colors duration-100 inline-flex items-center rounded-full" type="button">
    <span v-if="icon" :class="icon" class="flex-shrink-0 h-5 w-5 -ml-1 mr-3" aria-hidden="true" />
    <span>
      {{ text }}
    </span>
  </button>

  <NuxtLink v-if="type === 'nuxt-link'" v-bind="$attrs" :href="href" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 shadow-sm dark:shadow-black/10 border border-white/20 hover:border-white/30 focus:border-white/30 u-text-gray-900 bg-white/10 hover:bg-white/5 backdrop-blur-sm transition-colors duration-100 inline-flex items-center rounded-full">
    <span v-if="icon" :class="icon" class="flex-shrink-0 h-5 w-5 -ml-1 mr-3" aria-hidden="true" />
    <span>
      {{ text }}
    </span>
  </NuxtLink>
</template>
