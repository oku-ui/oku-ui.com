<script setup lang="ts">
const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)
</script>

<template>
  <div
    ref="card" :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient group relative before:(content-[''] absolute rounded-xl -inset-x-px -inset-y-px overflow-hidden h-[calc(100%+2px)] w-[calc(100%+2px)]) z-10"
  >
    <div class="absolute inset-0 rounded-xl bg-[#1a2632] transition-colors duration-300" />
    <div class="absolute bg-down inset-0 rounded-xl bg-[#1a2632] transition-colors duration-300" />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style>
.border-gradient::before {
    /* background: red; */
    background: radial-gradient(150px circle at var(--x) var(--y),
            #ffffff00 0,
            #ffffff 50%,
            transparent 100%);
}

.bg-down {
    /* background: red; */
    background: radial-gradient(100px circle at var(--x) var(--y),
            #ff000000 0,
            #ffffff 0%,
            transparent 250%);
    opacity: 20%;
}
</style>
