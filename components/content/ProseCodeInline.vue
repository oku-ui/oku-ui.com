<template>
  <code
    class="mx-1px px-[0.375rem] py-[0.2rem] rounded-md font-mono font-400 text-sm text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 before-content-empty after-content-empty"
  >
    <slot />
  </code>
</template>

<style scoped>
a code {
  border-width: 1px;
  border-style: dashed;
  border-color: theme('colors.sky.500');
}

a:hover code {
  color: theme('colors.sky.600');
  border-style: solid;
  border-color: theme('colors.sky.600');
}

.dark a code {
  border-color: theme('colors.sky.400');
}

.dark a:hover code {
  color: theme('colors.sky.300');
  border-color: theme('colors.sky.300');
}
</style>
