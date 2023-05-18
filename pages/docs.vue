<script setup lang="ts"></script>

<template>
  <div class="mt-10">
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-6xl">
      <div class="relative grid lg:grid-cols-4 gap-8">
        <DocsSideNavBar />

        <div class="relative col-span-4 lg:col-span-3">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
