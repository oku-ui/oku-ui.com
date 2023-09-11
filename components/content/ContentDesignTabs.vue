<script lang="ts" setup>
import { computed, ref } from 'vue'

const slots = useSlots()

const active = ref()

const tabs = ref([
  { name: 'oku', title: 'Oku' },
  { name: 'radix', title: 'Radix' },
])

const availableTabs = computed(() => tabs.value.filter(tab => !!slots[tab.name]))

onMounted(() => {
  active.value = localStorage.getItem('oku-select-theme') || 'oku'
})
</script>

<template>
  <div class="w-full">
    <slot v-if="active === 'oku'" name="oku" />
    <slot v-else name="radix" />
  </div>
</template>
