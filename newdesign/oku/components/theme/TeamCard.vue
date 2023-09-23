<script setup lang="ts">
interface TeamCardProps {
  data: {
    image: string
    name: string
    title: string
    description: string
    github?: string
    twitter?: string
    sponsor?: string
  }
}

defineProps<TeamCardProps>()
</script>

<template>
  <div class="flex flex-col h-full items-stretch">
    <div class="flex flex-col gap-4 h-full items-center bg-[#575757]/10 border border-[#DEDEDE] dark:border-[#303030] rounded-lg p-4 w-full">
      <img class="w-20 h-20 rounded-full" :src="data.image" alt="oku">
      <div class="flex flex-col items-center text-center gap-2">
        <span class="text-[#111] dark:text-white font-medium text-xl">{{ data.name }}</span>
        <p class="text-[#777777] dark:text-[#969696] text-sm">
          {{ data.description }}
        </p>
        <p class="text-[#555555] dark:text-[#D3D3D3]">
          {{ data.title }}
        </p>
      </div>
      <div class="flex gap-4 justify-center mt-4">
        <a target="_blank" :href="`https://twitter.com/${data.twitter}`"><span class="i-fa-brands-twitter w-5 h-5 text-[#545454] hover:text-[#1c1c1c] transition duration-300 dark:text-[#B3B3B3] dark:hover:text-white" /></a>
        <a target="_blank" :href="`https://github.com/${data.github}`"><span class="i-fa-brands-github w-5 h-5 text-[#545454] hover:text-[#1c1c1c] transition duration-300 dark:text-[#B3B3B3] dark:hover:text-white" /></a>
      </div>
    </div>
    <a v-if="data.sponsor" class="flex w-full  mt-4 items-center justify-center gap-1 px-3 py-2 bg-[#CD8CFF]/20 dark:bg-[#CD8CFF]/10 dark:border-[#CD8CFF]/[12%] dark:hover:bg-[#b656ff]/20 rounded-lg border border-[#CD8CFF]/[22%] hover:bg-[#b656ff]/20 transition duration-300" :href="`https://github.com/sponsors/${data.github}`"><span class="i-heroicons-heart w-5 h-5 text-[#B14AFF]" /> Sponsor</a>
  </div>
</template>
