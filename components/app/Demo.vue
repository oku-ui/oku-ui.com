<script setup lang="ts">
const demoDiv = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(demoDiv)
</script>

<template>
  <div
    ref="demoDiv" :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient mt-4 group relative h-[370px] rounded p-8 before:(content-[''] absolute rounded-xl -inset-x-px -inset-y-px overflow-hidden h-[calc(100%+2px)] w-[calc(100%+2px)]) z-10 lg:h-[250px] lg:p-16"
  >
    <div class="absolute inset-0 rounded-xl bg-[#1a2632] transition-colors duration-300" />
    <div class="absolute bg-down inset-0 rounded-xl bg-[#1a2632] transition-colors duration-300" />

    <div class="relative w-full h-full">
      <slot />
    </div>
  </div>
</template>
