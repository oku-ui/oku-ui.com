<script setup lang="ts">
import { OkuToggle } from '@oku-ui/toggle'
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuToggle
      id="toggle"
      aria-label="Toggle italic"
      class="w-10 h-10 font-medium transition duration-300 border-2 rounded  text-[#434343] dark:text-[#A0A0A0] dark:border-[#686868] flex items-center justify-center data-[state=on]:border-[#1084D6] data-[state=on]:bg-[#1084D6] data-[state=on]:text-white data-[state=off]:border-[#AEAEAE] dark:data-[state=on]:text-white dark:data-[state=on]:bg-[#1084D6] dark:data-[state=on]:border-[#1084D6]"
    >
      I
    </OkuToggle>
  </div>
</template>
