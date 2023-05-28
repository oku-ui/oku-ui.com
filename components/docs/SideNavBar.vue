<script setup lang="ts">
const { data } = await useAsyncData('nav', () =>
  queryContent('/docs/primitives').only(['title', '_path', '_dir', 'root']).find(),
)
const { path } = toRefs(useRoute())

const tree = computed(() => {
  return data.value?.reduce((result, currentObject) => {
    const key = currentObject._dir
    currentObject.active = path.value.includes(currentObject._path)

    if (!result[key])
      result[key] = []

    result[key].push(currentObject)
    return result
  }, {})
})

const mobileShow = ref(false)
</script>

<template>
  <div class="sticky top-15 z-100 lg:z-0 rounded-lg w-56 shrink-0 bg-slate-800/50 lg:bg-transparent backdrop-filter backdrop-blur-lg lg:blur-none overflow-hidden border-1.5 border-slate-700/50 flex-0">
    <button :class="{ 'border-b border-slate-700': mobileShow }" class="text-left px-4 inline-block w-full lg:hidden py-2 text-sm bg-slate-800" @click="mobileShow = !mobileShow">
      Navigation
    </button>
    <div :class="{ '!block': mobileShow }" class="mt-4 space-y-8 hidden lg:block px-4 lg:pl-0 pb-4">
      <div v-for="(child, key) of tree" :key="key" class="space-y-3">
        <div class="lg:px-4 text-sm font-semibold text-gray-200">
          <span class="truncate capitalize">{{ key }}</span>
        </div>
        <nav class="border-l border-gray-800 space-y-2 mt-1">
          <NuxtLink v-for="item in child" :key="item" :to="item._path" :label="item.title" :class="{ 'router-link-active': item.active }" class="group text-gray-300 text-sm block border-l border-current -ml-px lg:leading-6 pl-4 font-semibold" @click="mobileShow = false">
            <span class="truncate relative">{{ item.title }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-white border-l-2 border-current font-semibold;
}
</style>
