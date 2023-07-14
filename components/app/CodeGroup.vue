<template>
  <div class="xl:-mx-10 relative rounded-lg overflow-hidden text-sm">
    <div class="bg-gradient-to-br from-teal-500 to-green-600 w-full relative items-center justify-center flex">
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center py-[100px]">
        <slot name="previewSlot" />
      </div>
    </div>
    <slot name="codeSlot">
      <div :selected-index="selectedIndex" @change="changeTab(selectedIndex)">
        <div class="flex border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden -mb-px">
          <div v-for="(tab, index) in tabs" :key="index" as="template" @click="selectedIndex = index">
            <button
              class="px-4 py-2 focus:outline-none text-sm border-r border-r-gray-200 dark:border-r-gray-700 transition-colors"
              tabindex="-1"
              :class="[selectedIndex === index ? 'font-medium text-primary-500 dark:text-primary-400 bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800']"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="[&>div>pre]:!rounded-t-none">
          <component :is="selectedTab!.component" />
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots()

const selectedIndex = ref(0)

// Computed

const tabs = computed(() => slots.default?.().map((slot, index) => {
  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    component: slot
  }
}) || [])

const selectedTab = computed(() => tabs.value.find((_, index) => index === selectedIndex.value)) 

// Methods

function changeTab(index: number) {
  alert('1')
  selectedIndex.value = index
}

defineOptions({
  inheritAttrs: false,
})
</script>
<style scoped>
.highlight-md.prose-code.language-md {
  @apply mt-0;
}
</style>

