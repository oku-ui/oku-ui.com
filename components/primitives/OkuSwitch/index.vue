<script setup lang="ts">
import { OkuSwitch, OkuSwitchThumb } from '@oku-ui/switch'
</script>

<template>
  <div class="flex items-center justify-center">
    <form>
      <div class="flex items-center">
        <label class="text-codGray-950 dark:text-white text-[15px] leading-none pr-[15px]" for="airplane-mode">
          Airplane mode
        </label>
        <OkuSwitch
          id="airplane-mode"
          class="w-[42px] h-[25px] bg-grayA-300 dark:bg-grayA-500 rounded-full relative shadow-[0_2px_10px] shadow-grayA-200 dark:shadow-grayA-900 focus:shadow-[0_0_0_2px] focus:shadow-grayA-900 dark:focus:shadow-grayA-300 data-[state=checked]:bg-oku-500 dark:data-[state=checked]:bg-oku-500 outline-none cursor-default"
        >
          <OkuSwitchThumb class="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA-600 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </OkuSwitch>
      </div>
    </form>
  </div>
</template>
