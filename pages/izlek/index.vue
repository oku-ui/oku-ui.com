<script setup lang="ts">
const title = '1:1 Radix UI components for Vue'
const desc = 'Unstyled, accessible components for building high‑quality design systems and web apps in React.Unstyled, accessible components for building high‑quality design systems and web apps in Vue.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description: desc,
  ogDescription: desc,
  ogImage: 'https://oku-ui.com/primitives-og-image.png',
  twitterImage: 'https://oku-ui.com/primitives-og-image.png',
})
</script>

<template>
  <div>
    <span class="gradient" />

    <ULandingHero orientation="horizontal" class="!py-18 md:py-0 md:!pt-32 relative" :ui="{ container: 'flex lg:gap-4' }">
      <div class="hidden lg:block relative w-[500px]">
        <Illustration class="h-[480px]" />
      </div>
      <template #title>
        <span class="text-primary-400">1:1 (izlek) </span> Shadcn UI / Primitives components for Vue
      </template>
      <template #description>
        Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. Get Started
      </template>
      <template #links>
        <UButton to="https://github.com/oku-ui/izlek" icon="i-ph-rocket-launch-duotone" size="xl">
          soon
        </UButton>
      </template>
    </ULandingHero>
  </div>
</template>

<style scoped>
.gradient {
  position: fixed;
  top: 25vh;
  width: 100%;
  height: 30vh;
  background: radial-gradient(50% 50% at 50% 50%, #03445e 0%, rgba(0, 220, 130, 0) 100%);
  filter: blur(180px);
  opacity: 0.6;
  z-index: -1;
}
</style>
