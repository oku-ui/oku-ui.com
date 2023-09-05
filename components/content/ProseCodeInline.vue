<template>
  <code
    class="mx-1px px-[0.375rem] py-[0.2rem] rounded-md font-mono font-400 text-sm text-oku-600 dark:text-oku-400 bg-oku-50 dark:bg-oku-950 before-content-empty after-content-empty"
  >
    <slot />
  </code>
</template>

<style scoped>
a code {
  border-width: 1px;
  border-style: dashed;
  border-color: theme('colors.oku.500');
}

a:hover code {
  color: theme('colors.oku.600');
  border-style: solid;
  border-color: theme('colors.oku.600');
}

.dark a code {
  border-color: theme('colors.oku.400');
}

.dark a:hover code {
  color: theme('colors.oku.300');
  border-color: theme('colors.oku.300');
}
</style>
