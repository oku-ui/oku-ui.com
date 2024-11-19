<script setup lang="ts">
import Demos from '../../components/Demos.vue'
import HomePageCard from './HomePageCard.vue'
</script>

<template>
  <div class="mt-12 md:mt-24 content px-6 sm:px-[48px] lg:px-[64px]">
    <div class="mx-auto w-full container max-w-[1152px] space-y-20">
      <HomePageCard />

      <h2 class="text-2xl md:text-3xl font-bold text-center">
        @oku-ui/motion
      </h2>
      <Demos class="grid w-auto lg:grid-cols-4 gap-6 md:gap-12 lg:gap-6" />
    </div>
  </div>
</template>
