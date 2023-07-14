<script setup lang="ts">
import { OkuAvatar, OkuAvatarFallback, OkuAvatarImage } from '@oku-ui/avatar'

const src = 'https://picsum.photos/id/1005/400/400'
const src2 = 'https://picsum.photos/id/1010/400/400'

const srcBroken = 'https://broken.link.com/broken-pic.jpg'

const consoleLog = (event: any) => console.log(event, 'log')
</script>

<template>
  <div class="grid grid-cols-3 gap-6 flex items-center justify-center">
    <OkuAvatar class="w-14 h-14 bg-yellow-400 items-center inline-block overflow-hidden rounded-full">
      <OkuAvatarImage class="w-full h-full object-cover" :src="src" />
      <OkuAvatarFallback
        class="flex items-center text-white font-medium text-2xl h-full w-full justify-center"
        :delay-ms="100"
      >
        CT
      </OkuAvatarFallback>
    </OkuAvatar>

    <OkuAvatar class="w-14 h-14 bg-blue-400 items-center inline-block overflow-hidden rounded-full">
      <OkuAvatarImage class="w-full h-full object-cover" :src="src2" />
      <OkuAvatarFallback
        class="flex items-center text-white font-medium text-2xl h-full w-full justify-center"
        :delay-ms="100"
      >
        MT
      </OkuAvatarFallback>
    </OkuAvatar>

    <OkuAvatar class="w-14 h-14 bg-white items-center inline-block overflow-hidden rounded-full">
      <OkuAvatarFallback
        class="flex items-center text-black font-bold h-full w-full justify-center"
        :delay-ms="100"
      >
        CT
      </OkuAvatarFallback>
    </OkuAvatar>

    <OkuAvatar class="w-14 h-14 bg-gray-400 items-center inline-block overflow-hidden rounded-full">
      <OkuAvatarImage class="w-full h-full object-cover" :src="srcBroken" :on-loading-status-change="consoleLog" />
    </OkuAvatar>
  </div>
</template>
