<script setup lang="ts">
interface CardProps {
  version: string
  link: string
  title: string
  description: string
  component: string
}

const data: CardProps[] = [
  {
    version: '0.2.2',
    link: '',
    title: 'Aspect Ratio',
    description: 'Displays content within a desired ratio.',
    component: 'OkuAspectRatio',
  },
  {
    version: '0.2.2',
    link: '',
    title: 'Avatar',
    description: 'Displays an image that represents a user or organization.',
    component: 'OkuAvatar',
  },
  {
    version: '0.2.2',
    link: '',
    title: 'Checkbox',
    description: 'A checkbox is a form element that allows the user to select multiple options from a range of options.',
    component: 'OkuCheckbox',
  },
  {
    version: '0.2.2',
    link: '',
    title: 'Label',
    description: 'A label is a text that describes the purpose of the form control.',
    component: 'OkuLabel',
  },
  {
    version: '0.2.2',
    link: '',
    title: 'Progress',
    description: 'A progress bar is a graphical control element used to visualize the progression of an extended computer operation, such as a download, file transfer, or installation.',
    component: 'OkuProgress',
  },
  {
    version: '0.2.2',
    link: '',
    title: 'Separator',
    description: 'A separator is a horizontal line used to group content.',
    component: 'OkuSeparator',
  },
  {
    version: '0.2.2',
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

    <div class="grid grid-cols-3 gap-6">
      <template v-for="item in data" :key="item.title">
        <div class="relative overflow-hidden group w-full">
          <div
            class="w-full p-4 rounded-2xl flex-col gap-2 backdrop-blur-sm bg-[#575757]/10 border border-[#DEDEDE] dark:border-[#303030] inline-flex min-h-[138px] sm:min-h-[146px]"
          >
            <div class="relative">
              <component :is="item.component" class="py-10" />
            </div>
            <div class="">
              <span class="text-xs px-2 py-1 border border-[#DEDEDE] dark:border-[#222] rounded-full text-[#676767] inline">{{ item.version }}</span>
            </div>
            <span class="text-[#111] dark:text-white font-medium">{{ item.title }}</span>
            <p class="text-[#6D6D6D] text-sm md:text-base line-clamp-2">
              {{ item.description }}
            </p>
            <div class="card-light" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.card-light {
  @apply absolute w-[220px] h-[220px] transition-all duration-300;
  right: -1px;
  top: -93px;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);
  opacity: 0.3;
  z-index: -1;

}

.group:hover {
  .card-light {
    opacity: 0.5;
    transform: scale(1.5);

  }
}
</style>
