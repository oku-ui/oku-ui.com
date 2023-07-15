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
      <p class="text-[#696969] dark:text-white/60">
        {{ description }}
      </p>
      <p class="text-[#4b4b4b] dark:text-white/80">
        {{ title }}
      </p>
    </div>
    <div class="flex gap-4 justify-center">
      <a target="_blank" :href="`https://twitter.com/${twitter}`"><span class="i-fa-brands-twitter w-5 h-5 text-[#747474] hover:text-[#111] transition duration-300 dark:text-[#555] dark:hover:text-[#aaa]" /></a>
      <a target="_blank" :href="`https://github.com/${github}`"><span class="i-fa-brands-github w-5 h-5 text-[#747474] hover:text-[#111] transition duration-300 dark:text-[#555] dark:hover:text-[#aaa]" /></a>
    </div>
    <a class="flex items-center justify-center gap-2 px-3 py-1 bg-[#b656ff]/10 rounded-lg border border-[#b656ff]/20 hover:bg-[#b656ff]/20 transition duration-300" :href="`https://github.com/sponsors/${github}`"><span class="i-heroicons-heart text-[#B14AFF]" /> Sponsor</a>
  </div>
</template>
