<template>
  <th class="h-10 px-2 [&:not(:first-child)]:pl-3 text-left !bg-gray-900 text-white">
    <slot />
  </th>
</template>

<style>
th>* {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
