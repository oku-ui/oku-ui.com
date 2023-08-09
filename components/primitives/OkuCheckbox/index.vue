<script setup lang="ts">
import { ref } from 'vue'
import type { CheckboxRef } from '@oku-ui/checkbox'
import { OkuCheckbox, OkuCheckboxIndicator } from '@oku-ui/checkbox'

const refV = ref<CheckboxRef>()
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <OkuCheckbox id="c1" ref="refV" class="w-6 h-6 flex border border-[#a3a3a3] dark:border-[#3a3a3a] overflow-hidden rounded-[4px] text-red-500 checked:text-red-600">
      <OkuCheckboxIndicator class="w-6 h-6 flex items-center justify-center text-white bg-[#1084d6] border-[#1084d6]">
        <div class="i-heroicons-check w-5 h-5" />
      </OkuCheckboxIndicator>
    </OkuCheckbox>
    <label class="Label" for="c1">
      Accept terms and conditions.
    </label>
  </div>
</template>
