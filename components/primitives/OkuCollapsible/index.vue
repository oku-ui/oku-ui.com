<script setup lang="ts">
import { ref } from 'vue'

import {
  OkuCollapsible,
  OkuCollapsibleContent,
  OkuCollapsibleTrigger,
} from '@oku-ui/collapsible'

const open = ref(false)
const rootDisabled = ref(false)
</script>

<template>
  <OkuCollapsible v-model="open" class="max-w-[280px] w-full mx-auto" :disabled="rootDisabled">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <span class="text-[#222222] dark:text-white text-sm font-bold leading-6">
        @oku-ui 3 repos
      </span>
      <OkuCollapsibleTrigger
        class="cursor-default rounded-full h-6 w-6 inline-flex items-center justify-center text-black dark:text-gray-300 outline-none dark:bg-[#333333] dark:data-[state=closed]:bg-[#333333] data-[state=closed]:bg-white data-[state=open]:bg-white hover:bg-gray-500 focus:shadow-black"
      >
        <i v-if="open" class="i-ph-x h-3.5 w-3.5 !text-black dark:!text-white" />
        <i v-else class="i-ph-arrows-out-line-vertical h-3.5 w-3.5 !text-black dark:!text-white" />
      </OkuCollapsibleTrigger>
    </div>

    <div class="bg-white rounded dark:bg-[#282828] my-[10px] p-[10px]">
      <span class="text-[#333333] dark:text-[#f2f2f2] text-sm leading-6">@oku-ui/primivites</span>
    </div>

    <OkuCollapsibleContent>
      <div key="lorem1" class="bg-white dark:bg-[#282828] rounded my-[10px] p-[10px]">
        <span class="text-[#333333] dark:text-[#f2f2f2] text-sm leading-6">@productdevbook</span>
      </div>
      <div key="lorem2" class="bg-white dark:bg-[#282828] rounded my-[10px] p-[10px]">
        <span class="text-[#333333] dark:text-[#f2f2f2] text-sm leading-6">@huntersofbook</span>
      </div>
    </OkuCollapsibleContent>
  </OkuCollapsible>
</template>
