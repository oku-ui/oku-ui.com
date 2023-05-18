<script setup lang="ts"></script>

<template>
  <div class="mt-10">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-6xl">
      <div class="relative grid lg:grid-cols-4 gap-8">
        <DocsSideNavBar class="hidden md:block sticky top-21 py-4 h-max w-44 shrink-0" />

        <div class="relative col-span-4 lg:col-span-3">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
