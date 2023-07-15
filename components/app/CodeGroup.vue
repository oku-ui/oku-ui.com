<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const slots = useSlots()

const selectedIndex = ref(0)

const tabs = computed(() => slots.default?.().map((slot, index) => {
  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    component: slot,
  }
}) || [])

const selectedTab = computed(() => tabs.value.find((_, index) => index === selectedIndex.value))

function changeTab(index: number) {
  selectedIndex.value = index
}
</script>

<template>
  <div class="overflow-hidden">
    <div class="bg-gradient-to-br rounded-lg from-oku-100 to-oku-600 w-full relative items-center justify-center flex">
      <div class="w-full max-w-xl flex flex-col items-center justify-center py-24">
        <slot name="preview" />
      </div>
    </div>
    <slot name="code">
      <div :selected-index="selectedIndex" class="mt-5" @change="changeTab(selectedIndex)">
        <div class="flex border border-oku-200 dark:border-oku-700 bg-oku-50 dark:bg-oku-950 rounded mb-4 overflow-hidden">
          <div v-for="(tab, index) in tabs" :key="index" as="template" @click="selectedIndex = index">
            <button
              class="px-4 py-2 focus:outline-none border-r-oku-200 dark:border-r-oku-700"
              :class="[selectedIndex === index ? 'font-medium text-oku-950 dark:text-white bg-oku-200 dark:bg-oku-800' : 'hover:bg-oku-200 dark:hover:bg-oku-800']"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div>
          <component :is="selectedTab!.component" />
        </div>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.highlight-md.prose-code.language-md {
  @apply mt-0;
}
</style>
