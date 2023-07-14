<script setup lang="ts">
import { OkuToggle } from '@oku-ui/toggle'
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuToggle
      id="toggle" aria-label="Toggle italic"
      class="w-10 h-10 border-2 rounded bg-white/20 text-black flex items-center justify-center data-[state=on]:border-green-500 data-[state=on]:bg-white data-[state=off]:border-gray-900 hover:bg-gray-400"
    >
      I
    </OkuToggle>
  </div>
</template>

