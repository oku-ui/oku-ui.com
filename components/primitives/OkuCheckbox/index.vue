<script setup lang="ts">
import type { CheckboxRef } from '@oku-ui/checkbox'
import { OkuCheckbox, OkuCheckboxIndicator } from '@oku-ui/checkbox'

const refV = ref<CheckboxRef>()
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuCheckbox id="c1" ref="refV" class="w-6 h-6 flex bg-white rounded-md text-red-500 checked:text-red-600">
      <OkuCheckboxIndicator class="w-6 h-6 flex items-center justify-center text-blue-500">
        <div class="i-ph-check-bold w-5 h-5" />
      </OkuCheckboxIndicator>
    </OkuCheckbox>
    <label class="Label" for="c1">
      Accept terms and conditions.
    </label>
  </div>
</template>
