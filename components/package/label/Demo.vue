<script setup lang="ts">
import type { LabelRef } from '@oku-ui/label'
import { OkuLabel } from '@oku-ui/label'

const labelRef = ref<LabelRef>()
onMounted(() => {
  console.log(labelRef.value?.innerRef)
})
</script>

<template>
  <div class="flex items-center justify-center my-10">
    <div class="flex items-center">
      <OkuLabel ref="labelRef" class="text-base font-bold text-white" for="firstName">
        First name
      </OkuLabel>
      <input id="firstName" class="ml-4 bg-white/50 text-white rounded ring-blue p-2 focus:border-blue" type="text" value="Fatih Dereli">
    </div>
  </div>
</template>
