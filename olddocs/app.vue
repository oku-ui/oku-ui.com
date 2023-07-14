<template>
  <Body class="antialiased font-sans text-oku-50 dark:text-oku-200 bg-oku-950">
    <DocsNavBar
      class="sticky top-0 bg-oku-950 border-b-1 border-oku-900 bg-opacity-50 backdrop-blur-md"
    />

    <NuxtLoadingIndicator color="rgb(96,165,250)" />
    <div class="min-h-[calc(100vh-5rem)] flex flex-col">
      <NuxtPage />
    </div>
    <AppFooter />
  </Body>
</template>
