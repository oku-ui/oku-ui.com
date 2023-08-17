<script setup lang="ts">
import { OkuProgress, OkuProgressIndicator } from '@oku-ui/progress'

const progress = ref<number | null>(10)

onMounted(() => {
  const timer = setTimeout(() => progress.value = 66, 1000)
  return () => clearTimeout(timer)
})
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuProgress
      class="relative overflow-hidden rounded-full w-[300px] h-[25px] bg-[#4FA4E1] transform translate-z-0"
      :value="progress"
    >
      <OkuProgressIndicator
        class="w-full h-full transition duration-600 ease-out bg-white dark:bg-[#4d4d4d]" :style="{
          transform: `translateX(${progress}%)`,
        }"
      />
    </OkuProgress>
  </div>
</template>
