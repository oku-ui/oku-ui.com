<script setup lang="ts">
import { OkuToggleGroup, OkuToggleGroupItem } from '@oku-ui/toggle-group'

const active = ref('oku')

onMounted(() => {
  active.value = localStorage.getItem('oku-select-theme') || 'oku'
})

function onChange(value: string) {
  localStorage.setItem('oku-select-theme', value)
}
</script>

<template>
  <div class="w-full">
    <div class="w-full px-2 mb-10">
      <OkuToggleGroup
        v-model="active"
        class="inline-flex rounded w-full"
        type="single"
        default-value="center"
        aria-label="Text alignment"
        @value-change="onChange"
      >
        <OkuToggleGroupItem class="toggle-group-item" value="oku" aria-label="Left aligned">
          Oku
        </OkuToggleGroupItem>
        <OkuToggleGroupItem class="toggle-group-item" value="radix" aria-label="Center aligned">
          Radix
        </OkuToggleGroupItem>
      </OkuToggleGroup>
    </div>
    <DocsAsideLinks />
  </div>
  <!-- <aside
    class="hidden py-8 overflow-y-auto lg:block lg:self-start lg:top-16 lg:max-h-[calc(100vh-65px)] lg:sticky lg:pr-8 lg:pl-[2px]"
  >
    <div class="relative">
      <div class="sticky top-0 pointer-events-none z-[1]">
        <div class="h-8 bg-white dark:bg-gray-900" />
        <div class="bg-white dark:bg-gray-900 relative pointer-events-auto">
          <DocsSearchButton class="w-full" />
        </div>
        <div class="h-8 bg-gradient-to-b from-white dark:from-gray-900" />
      </div>

    </div>
    <DocsAsideLinks />
  </aside> -->
</template>

<style lang="postcss">
.toggle-group-item {
  @apply hover:bg-oku-400/10 dark:hover:bg-oku-200/60 text-oku-900 data-[state=on]:bg-oku-500 data-[state=on]:text-white dark:data-[state=on]:bg-oku-400/70 dark:data-[state=on]:text-white flex h-[35px] w-full items-center justify-center bg-oku-200 dark:bg-codGray-800 text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black dark:focus:shadow-white focus:outline-none
}
</style>
