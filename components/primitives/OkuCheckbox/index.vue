<script setup lang="ts">
import { ref } from 'vue'
import type { CheckboxRef } from '@oku-ui/checkbox'
import { OkuCheckbox, OkuCheckboxIndicator } from '@oku-ui/checkbox'

const refV = ref<CheckboxRef>()
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <OkuCheckbox id="c1" ref="refV" class="w-6 h-6 flex border focus:outline focus:outline-[1px] dark:focus:outline-[1px] focus:border-blackA-900 dark:focus:border-gray-300 focus:outline-blackA-900 dark:focus:outline-gray-300 border-grayA-300 dark:border-codGray-700 overflow-hidden rounded-[4px]">
      <OkuCheckboxIndicator class="w-6 h-6 flex items-center justify-center text-white bg-oku-500 ">
        <div class="i-heroicons-check w-5 h-5" />
      </OkuCheckboxIndicator>
    </OkuCheckbox>
    <label class="Label" for="c1">
      Accept terms and conditions.
    </label>
  </div>
</template>
