<script setup lang="ts">
const slug = computed(() => useRoute().path)
const dirname = computed(() => slug.value.split('/')[1])
const { data } = await useAsyncData('version', () =>
  queryContent(dirname.value).where({ root: false }).only(['title', '_path', '_dir', 'root', 'version']).find(),
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

const selectValue = ref('')
const router = useRouter()
watch(selectValue, (value) => {
  if (value)
    router.push(`/${dirname.value}/${value}`)
})
</script>

<template>
  <div>
    <!-- Drapdown Menu -->
    <select v-for="(child, key) of tree" :key="key" v-model="selectValue" class="mt-2 text-sm flex bg-oku-500 flex-col space-y-1  p-2 font-semibold hover:text-oku-300  hover:border-l-5 hover:border-oku-500">
      <option disabled value="" class="text-white">
        Select version
      </option>

      <option v-for="item in child" :key="item" :value="item.value" class="mt-2 text-sm flex flex-col space-y-1 p-2 font-semibold bg-oku-800 hover:text-oku-300  hover:border-l-5 hover:border-oku-500">
        {{
          item.version
        }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.router-link-active {
    @apply text-oku-300 font-bold hover:text-oku-500 hover:underline border-l-5 border-oku-300;
}
</style>
