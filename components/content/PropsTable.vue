<script setup lang="ts">
interface TableItem {
  name: string
  type: string
  required: boolean
  default: string
  description: string
}

interface Table {
  data: TableItem[]
}

const { data } = defineProps<Table>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">
            Name
          </th>
          <th class="px-4 py-2">
            Type
          </th>
          <th class="px-4 py-2">
            Required
          </th>
          <th class="px-4 py-2">
            Default
          </th>
          <th class="px-4 py-2">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.name">
          <td class="border px-4 py-2">
            {{ item.name }}
          </td>
          <td class="border px-4 py-2">
            {{ item.type }}
          </td>
          <td class="border px-4 py-2">
            {{ item.required }}
          </td>
          <td class="border px-4 py-2">
            {{ item.default }}
          </td>
          <td class="border px-4 py-2">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
