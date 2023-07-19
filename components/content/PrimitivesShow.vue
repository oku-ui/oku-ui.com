<script setup lang="ts">
import type { CardProps } from '../app/ComponentCard.vue'

const data: CardProps['data'][] = [
  {
    version: '0.2.3',
    link: '',
    title: 'Aspect Ratio',
    description: 'Displays content within a desired ratio.',
    component: 'OkuAspectRatio',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Avatar',
    description: 'Displays an image that represents a user or organization.',
    component: 'OkuAvatar',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Checkbox',
    description: 'A checkbox is a form element that allows the user to select multiple options from a range of options.',
    component: 'OkuCheckbox',
  },
  {
    version: '0.2.4',
    link: '',
    title: 'Collapsible',
    description: 'An interactive component which expands/collapses a panel..',
    component: 'OkuCollapsible',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Label',
    description: 'A label is a text that describes the purpose of the form control.',
    component: 'OkuLabel',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Progress',
    description: 'A progress bar is a graphical control element used to visualize the progression of an extended computer operation, such as a download, file transfer, or installation.',
    component: 'OkuProgress',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Separator',
    description: 'A separator is a horizontal line used to group content.',
    component: 'OkuSeparator',
  },
  {
    version: '0.2.3',
    link: '',
    title: 'Toggle',
    description: 'A toggle is a control that is used to quickly switch between two possible states.',
    component: 'OkuToggle',
  },
]

// const { trackEvent } = usePlausible()

// function linksClick(name: string) {
//   trackEvent('project', {
//     props: {
//       name,
//     },
//   })
// }
</script>

<template>
  <div class="relative">
    <ContentSlot :use="$slots.root" />

    <!-- <template v-for="item in data" :key="item.title">

      </template> -->
    <div class="hidden lg:grid grid-cols-3 gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="(item, index) in data">
            <ComponentCard v-if="index % 3 === 0" :key="item.title" :data="{...item}" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in data">
            <ComponentCard v-if="index % 3 === 1" :key="item.title" :data="{...item}" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in data">
            <ComponentCard v-if="index % 3 === 2" :key="item.title" :data="{...item}" />
          </template>
        </div>
      </div>
      <div class="hidden sm:grid grid-cols-2 lg:hidden gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="(item, index) in data">
            <ComponentCard v-if="index % 2 === 0" :key="item.title" :data="{...item}" />
          </template>
        </div>
        <div class="w-full space-y-6">
          <template v-for="(item, index) in data">
            <ComponentCard v-if="index % 2 === 1" :key="item.title" :data="{...item}" />
          </template>
        </div>
      </div>
      <div class="grid sm:hidden grid-cols-1 gap-6 mb-6">
      <!-- eslint-disable -->
        <div class="w-full space-y-6">
          <template v-for="item in data" :key="item.title">
            <ComponentCard  :data="{...item}" />
          </template>
        </div>
      </div>
  </div>
</template>
