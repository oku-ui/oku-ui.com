<script setup lang="ts">
interface TeamCardProps {
  image: string
  name: string
  title: string
  description: string
  github?: string
  twitter?: string
  sponsor?: boolean
}

defineProps<TeamCardProps>()
</script>

<template>
  <div class="flex flex-col gap-4 items-center bg-[#575757]/10 border border-[#DEDEDE] dark:border-[#303030] rounded-lg p-4 w-full">
    <img class="w-20 h-20 rounded-full" :src="image" alt="oku">
    <div class="flex flex-col items-center gap-2">
      <span class="text-[#111] dark:text-white font-medium text-xl">{{ name }}</span>
      <p class="text-[#777777] dark:text-[#969696]">
        {{ description }}
      </p>
      <p class="text-[#555555] dark:text-[#D3D3D3]">
        {{ title }}
      </p>
    </div>
    <div class="flex gap-4 justify-center">
      <a target="_blank" :href="`https://twitter.com/${twitter}`"><span class="i-fa-brands-twitter w-5 h-5 text-[#545454] hover:text-[#1c1c1c] transition duration-300 dark:text-[#B3B3B3] dark:hover:text-white" /></a>
      <a target="_blank" :href="`https://github.com/${github}`"><span class="i-fa-brands-github w-5 h-5 text-[#545454] hover:text-[#1c1c1c] transition duration-300 dark:text-[#B3B3B3] dark:hover:text-white" /></a>
    </div>
    <a class="flex w-full items-center justify-center gap-1 px-3 py-2 bg-[#CD8CFF]/20 dark:bg-[#CD8CFF]/10 dark:border-[#CD8CFF]/[12%] dark:hover:bg-[#b656ff]/20 rounded-lg border border-[#CD8CFF]/[22%] hover:bg-[#b656ff]/20 transition duration-300" :href="`https://github.com/sponsors/${github}`"><span class="i-heroicons-heart w-5 h-5 text-[#B14AFF]" /> Sponsor</a>
  </div>
</template>
