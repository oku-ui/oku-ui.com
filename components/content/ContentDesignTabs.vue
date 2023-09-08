<script lang="ts" setup>
import { OkuTabs, OkuTabsContent, OkuTabsList, OkuTabsTrigger } from '@oku-ui/tabs'

import { computed, ref } from 'vue'

const slots = useSlots()

const active = ref(Object.keys(slots)[0])

const tabs = ref([
  { name: 'oku', title: 'Oku' },
  { name: 'radix', title: 'Radix' },

])

const availableTabs = computed(() => tabs.value.filter(tab => !!slots[tab.name]))
</script>

<template>
  <div class="w-full">
    <OkuTabs
      v-bind="$attrs"
      v-model="active"
      class="flex flex-col"
    >
      <OkuTabsList class="shrink-0 flex border-b border-grayOA-500" aria-label="Manage your account">
        <OkuTabsTrigger
          v-for="tab in availableTabs"
          :key="tab.name"
          class="bg-white dark:bg-grayOA-950 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-grayOA-700 dark:text-grayOA-200 select-none first:rounded-tl-md last:rounded-tr-md hover:text-oku-500 dark:hover:text-oku-400 data-[state=active]:text-oku-500 dark:data-[state=active]:text-oku-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          :value="tab.name"
        >
          {{ tab.title }}
        </OkuTabsTrigger>
      </OkuTabsList>
      <OkuTabsContent
        v-for="tab in availableTabs"
        :key="tab.name"
        class="grow focus:shadow-black mt-4"
        :value="tab.name"
      >
        <slot :name="tab.name" />
      </OkuTabsContent>
    </OkuTabs>
  </div>
</template>
