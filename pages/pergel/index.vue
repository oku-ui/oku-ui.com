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
        <span class="text-primary-400">Pergel</span> is a full stack Nuxt application.
      </template>
      <template #description>
        It contains the necessary toolkits for a software developer and a fast, clean, tested toolkit. Authentication, authorization, user management, role management, and more.
      </template>
      <template #links>
        <UButton to="https://github.com/oku-ui/izlek" icon="i-ph-rocket-launch-duotone" size="xl">
          Read the Docs
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection>
      <template #title>
        Powerful, flexible, and extensible <br><span class="text-primary-400"> Nuxt Application.</span>
      </template>
      <UPageGrid>
        <ULandingCard
          to="/getting-started/ssr"
          title="SSR Support"
          icon="i-solar-server-2-bold-duotone"
          description="Streamline the process of rendering and dispatching emails directly from your server."
        />
        <ULandingCard
          to="/getting-started/i18n"
          title="i18n Support"
          icon="i-solar-globus-bold-duotone"
          description="Sprinkle some global flavor onto your vue email templates with our new i18n feature!"
        />
        <ULandingCard
          to="/components/html"
          title="15+ Components"
          icon="i-ph-plug-duotone"
          description="Simplify email creation by providing ready-made components, eliminating the need for table-based layouts and outdated markup."
        />
        <ULandingCard
          to="/integrations/mailersend"
          title="Integrations"
          icon="i-solar-bolt-line-duotone"
          description="Use your favorite email provider with VueEmail. Any Node.js email provider can be used with VueEmail."
        />
        <ULandingCard
          to="/getting-started/devtools"
          title="Nuxt Devtools"
          icon="i-ph-magic-wand-duotone"
          description="Inspect your email templates and send test emails from your app directly."
        />
        <ULandingCard
          to="/components/tailwind"
          title="Tailwind CSS"
          icon="i-solar-palette-round-line-duotone"
          description="
      Deliver visually stunning email templates with the incredible power of Tailwind CSS."
        />
      </UPageGrid>
    </ULandingSection>
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
