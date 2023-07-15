<script setup lang="ts">
import { OkuSeparator } from '@oku-ui/separator'
</script>

<template>
  <div class="flex items-center justify-center">
    <div>
      <h1>Horizontal</h1>
      <p>The following separator is horizontal and has semantic meaning.</p>

      <OkuSeparator class="border-0 bg-gray-300 my-4 h-[1px]" orientation="horizontal" />
      <div class="flex items-center h-full">
        <p>Home</p>
        <OkuSeparator class="w-[1px] mx-4 bg-slate-500 h-12" orientation="vertical" decorative />
        <p>
          Docs
        </p>
        <OkuSeparator class="w-[1px] mx-4 bg-slate-500 h-12" orientation="vertical" decorative />
        <p>
          Source
        </p>
      </div>
    </div>
  </div>
</template>
