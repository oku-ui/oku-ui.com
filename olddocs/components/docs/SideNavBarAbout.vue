<script setup lang="ts">
const { data } = await useAsyncData('nav', () =>
  queryContent('/about').only(['title', '_path', '_dir']).find(),
)

const tree = computed(() => {
  return data.value?.reduce((result, currentObject) => {
    const key = currentObject._dir
    if (!result[key])
      result[key] = []

    result[key].push(currentObject)
    return result
  }, {})
})
</script>

<template>
  <div>
    <div v-for="(child, key) of tree" :key="key" class="mb-6">
      <h4 class="font-semibold text-lg capitalize">
        {{ key }}
      </h4>

      <NuxtLink v-for="item in child" :key="item" :to="item._path" class="mt-2 text-sm flex flex-col space-y-1  p-2 font-semibold hover:text-oku-300  hover:border-l-5 hover:border-oku-500">
        {{
          item.title
        }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
    @apply text-oku-300 font-bold hover:text-oku-500 hover:underline border-l-5 border-oku-300;
}
</style>
