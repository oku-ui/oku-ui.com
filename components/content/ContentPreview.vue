<script setup lang="ts">
interface Props {
  src: string
  off?: string
  design?: 'oku' | 'radix'
  project?: 'primitives'
  lang?: string
}
const props = withDefaults(defineProps<Props>(), {
  off: '',
})

const dynamicComponent = shallowRef<Component | undefined>(() =>
  h(
    'div',
    {
      class: 'content-preview-loader',
    },
    h('div', {}, 'Loading...'),
  ),
)

onMounted(async () => {
  try {
    const path = `${props.project}/${props.src}`

    if (path) {
      dynamicComponent.value = defineAsyncComponent({
        loader: async () => await import(`./../${path}`),
        loadingComponent: () =>
          h(
            'div',
            {
              class: 'content-preview-loader',
            },
            h('div', {}, 'Loading...'),
          ),
        onError: (error) => {
          console.error(error)
          dynamicComponent.value = () => h('div', {}, 'Not found')
        },
        delay: 0,
      })
    }

  }
  catch (error) {
    dynamicComponent.value = () => h('div', {}, 'Not found')
  }
})
</script>

<template>
  <div class="overflow-hidden">
    <div class="rounded-lg w-full relative items-center justify-center flex"
      :class="props.design === 'radix' ? 'HeroCodeBlock' : 'componentBackground'">
      <div class="w-full max-w-xl flex flex-col items-center justify-center px-4 py-20">
        <component :is="dynamicComponent" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.highlight-md.prose-code.language-md {
  @apply mt-0;
}

.dark .componentBackground {
  @apply bg-gradient-to-br from-[#161616] to-[#262626];
}

.componentBackground {
  @apply bg-gradient-to-br from-[#E2E2E2] to-[#EFEFEF] shadow-inner;
}

.HeroCodeBlock {
  background-image: linear-gradient(330deg, #8e4ec6 0, #3e63dd 100%);
  padding-block: 100px;
  border-top-left-radius: var(--radius-4);
  border-top-right-radius: var(--radius-4);
}
</style>
