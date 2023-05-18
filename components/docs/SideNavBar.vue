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
</script>

<template>
  <div>
    <div class="space-y-8">
      <div v-for="(child, key) of tree" :key="key" class="space-y-3">
        <div class="text-sm font-semibold text-gray-200">
          <span class="truncate capitalize">{{ key }}</span>
        </div>
        <nav class="border-l border-gray-800 space-y-2 mt-1">
          <NuxtLink v-for="item in child" :key="item" :to="item._path" :label="item.title" :class="{ 'router-link-active': item.active }" class="group text-gray-300 text-sm block border-l border-current -ml-px lg:leading-6 pl-4 font-semibold">
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
