<script setup lang="ts">
import { OkuSeparator } from '@oku-ui/separator'
</script>

<template>
  <div class="flex items-center justify-center">
    <div>
      <h1 class="text-[#111] dark:text-white">
        Horizontal
      </h1>
      <p class="text-[#333333] dark:text-[#A2A2A2] mt-1">
        The following separator is horizontal and has semantic meaning.
      </p>

      <OkuSeparator class="border-0 bg-[#AEAEAE] my-4 h-[1px] dark:bg-[#434343]" orientation="horizontal" />
      <div class="flex items-center h-full">
        <p class="text-[#222222] dark:text-[#E2E2E2]">
          Home
        </p>
        <OkuSeparator class="w-[1px] mx-4 bg-[#AEAEAE] dark:bg-[#434343] h-6" orientation="vertical" decorative />
        <p class="text-[#222222] dark:text-[#E2E2E2]">
          Docs
        </p>
        <OkuSeparator class="w-[1px] mx-4 bg-[#AEAEAE] dark:bg-[#434343] h-6" orientation="vertical" decorative />
        <p class="text-[#222222] dark:text-[#E2E2E2]">
          Source
        </p>
      </div>
    </div>
  </div>
</template>
