<script setup lang="ts">
import type { LabelRef } from '@oku-ui/label'
import { OkuLabel } from '@oku-ui/label'

const labelRef = ref<LabelRef>()
</script>

<template>
  <div class="flex items-center justify-center my-10">
    <div class="flex items-center gap-4">
      <OkuLabel ref="labelRef" class="text-base font-medium text-[#222] dark:text-white" for="firstName">
        First name
      </OkuLabel>
      <input
        id="firstName" class=" text-[#222] border bg-none border-[#ACACAC] rounded dark:bg-none dark:border-[#555] focus:outline focus:outline-[#1882CE] dark:focus:outline-[#5697c5] p-2 transition duration-300 dark:text-white" type="text"
        value="Emir Uluçay"
      >
    </div>
  </div>
</template>
