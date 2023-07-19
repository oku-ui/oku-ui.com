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
    <div class="bg-gradient-to-br rounded-lg from-[#FF0F7B] to-[#F89B29] w-full relative items-center justify-center flex">
      <div class="w-full max-w-xl flex flex-col items-center justify-center py-24">
        <slot name="preview" />
      </div>
    </div>
    <slot name="code">
      <div :selected-index="selectedIndex" class="mt-5" @change="changeTab(selectedIndex)">
        <div class="flex border border-[#D3D3D3] dark:border-[#22201E] bg-[#F2F2F2] dark:bg-[#121110] rounded mb-4 overflow-hidden">
          <div v-for="(tab, index) in tabs" :key="index" as="template" @click="selectedIndex = index">
            <button
              class="px-4 py-2 focus:outline-none border-r-oku-200 dark:border-r-oku-700"
              :class="[selectedIndex === index ? 'font-medium text-[#111] dark:text-white bg-[#C9C9C9] dark:bg-[#22201E]' : 'hover:bg-[#C9C9C9] dark:hover:bg-[#22201E]']"
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
