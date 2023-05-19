<script setup lang="ts">
defineProps<{
  to: string
  title: string
  description: string
  active: boolean
}>()
</script>

<template>
  <NuxtLink :to="to">
    <AppBaseCard class="w-full h-full flex flex-col md:justify-center group">
      <div class="py-24 px-12">
        <h2 class="text-2xl font-medium text-white">
          {{ title }}
        </h2>

        <div class="mt-4 text-oku-50 md:w-3/4 md:text-lg">
          {{ description }}
        </div>
      </div>

      <div
        class="absolute bottom-0 opacity-50 right-0 flex items-center lg:inset-y-0 lg:h-full"
      >
        <img
          src="/cover.svg"
          class="hidden h-full cursor-pointer object-cover lg:block"
        >
      </div>
      <div v-if="active" class="absolute top-1/2 right-0 flex items-center lg:inset-y-0 lg:h-full pr-10">
        <div class="i-ph-arrow-fat-right-duotone group-hover:i-ph-arrow-fat-line-right-duotone group-hover:w-10 group-hover:text-yellow-500 group-hover:h-10   w-10 h-10 text-white" />
      </div>
    </AppBaseCard>
  </NuxtLink>
</template>
