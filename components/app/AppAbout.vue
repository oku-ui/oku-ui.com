<script setup lang="ts">
const isDark = useColorMode()

const kapadokyaImage = computed(() => {
  return isDark.value === 'dark' ? 'https://images.unsplash.com/photo-1664733580150-6a6de8415b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' : 'https://images.unsplash.com/photo-1487564149407-9fb3522e2ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
})

const teams: {
  name: string
  role: string
  image: string
  github: string
}[] = [
  {
    image: 'https://avatars.githubusercontent.com/u/38668796?v=4',
    name: 'Mehmet - productdevbook',
    role: 'Founder',
    github: 'https://github.com/productdevbook',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/44074974?v=4',
    name: 'suxiong',
    role: 'primitives - developer',
    github: 'https://github.com/YeSuX',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/30652791?v=4',
    name: 'Anjorin Damilare',
    role: 'maintainer',
    github: 'https://github.com/dammy001',
  },
]
</script>

<template>
  <main class="isolate mb-96 w-full">
    <!-- Hero section -->
    <div class="relative isolate -z-10">
      <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-oku-900 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50 dark:fill-oku-900">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                A different reading
              </h1>
              <p class="relative mt-6 text-lg leading-8 text-gray-600 dark:text-white/60 sm:max-w-md lg:max-w-none">
                The name "Oku" means "read" in Turkish. This name is used to read the world, read life, read people, read code, read design, read anything. In Türkiye, where I live, the phrase read is used a lot. Therefore, they used the name Oku. To show our respect for the library, science and knowledge. Also, our organization @productdevbook reads a lot of books. Therefore, the name Oku is versatile for her as well. The library and the book are his greatest passion.
              </p>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1535905748047-14b2415c77d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1607473128892-d7c8cd439cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our mission
        </h2>
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p class="text-xl leading-8 text-gray-600 dark:text-white/60">
              Oku is a brand and community focused on Vue and Nuxt ecosystem.
            </p>
            <article class="mt-10 max-w-xl text-base leading-7 text-gray-700 prose dark:text-white">
              <p>
                Our mission is to contribute to the Vue and Nuxt ecosystem by helping developers enhance their knowledge and experience with these technologies. To achieve this goal, Oku focuses on the following objectives:
              </p>
              <p>
                Education and Knowledge Sharing: We compile resources related to Vue and Nuxt to create comprehensive and understandable content. We guide developers to better understand and effectively use these technologies.
              </p>
              <p>
                Community Building: We foster a community among Vue and Nuxt users, encouraging collaboration, sharing of experiences, and mutual support. By bringing people together, we promote working on joint projects and create an inspiring environment for everyone.
              </p>
              <p>
                Innovation and Development: We introduce new ideas to the Vue and Nuxt ecosystem, keeping up with technological advancements and supporting progress in these areas. By promoting innovation, we contribute to the development of open-source projects.
              </p>
              <p>
                Support and Guidance: We provide a supportive environment for both beginners and experienced developers. We offer an active support network to answer questions, find solutions to problems, and assist in successfully completing projects.
              </p>
              <p>
                Our mission is to share our passion for Vue and Nuxt technologies, contribute to the growth of the community, and help everyone involved in this ecosystem to succeed.
              </p>
              <p class="mt-10">
                <!-- TODO: write mission -->
              </p>
            </article>
          </div>
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-white/60">
                  Views
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  20K +
                </dd>
              </div>
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-white/60">
                  Downloads
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  1K +
                </dd>
              </div>
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-white/60">
                  Sponsorships
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  4
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section -->
    <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img :src="kapadokyaImage" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl">
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our values
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white/60">
          The open-source community should be about inclusiveness and harmony, rather than the pursuit of stars or popularity, which is contradictory to its essence.
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <dt class="font-semibold text-gray-900 dark:text-white">
            Collaboration over Competition
          </dt>
          <dd class="mt-1 text-gray-600 dark:text-white/60">
            In the open-source community, we prioritize collaboration and teamwork over individual competition. We believe that by working together and sharing knowledge, we can create better and more inclusive solutions for everyone.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900 dark:text-white">
            Diversity and Inclusivity
          </dt>
          <dd class="mt-1 text-gray-600 dark:text-white/60">
            We value diversity in all its forms and strive to create an inclusive environment where people from different backgrounds, cultures, and perspectives feel welcome. We believe that diversity fosters creativity, innovation, and better problem-solving.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900 dark:text-white">
            Transparency and Openness
          </dt>
          <dd class="mt-1 text-gray-600 dark:text-white/60">
            Open-source thrives on transparency and openness. We are committed to sharing our ideas, code, and processes openly, allowing others to learn, contribute, and build upon our work. By being transparent, we promote trust, accountability, and the collective growth of the community.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900 dark:text-white">
            Empowering Users and Contributors
          </dt>
          <dd class="mt-1 text-gray-600 dark:text-white/60">
            We believe in empowering users and contributors by giving them the freedom to explore, modify, and distribute open-source software. We encourage individuals to take ownership, contribute back to the community, and make meaningful contributions that benefit society as a whole.
          </dd>
        </div>
      </dl>
    </div>

    <!-- Logo cloud -->
    <div class="relative isolate -z-10 mt-32 sm:mt-48">
      <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
          <defs>
            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
        </svg>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
          Sponsored by
        </h2>
        <div class="mx-auto mt-10 flex justify-center items-center max-w-none ">
          <a href="https://cdn.jsdelivr.net/gh/productdevbook/static/sponsors.svg" target="_blank" rel="noopener noreferrer">
            <img
              crossorigin="anonymous"
              inline-block
              width="768" height="1464"
              class="resizable-img"
              loading="lazy"
              src="/sponsors/productdevbook.svg"
              alt="Anthony Fu's sponsors"
            >
          </a>
        </div>
      </div>
    </div>

    <!-- Team section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white/60">
          Our goal is to focus on pixel perfect design, clean code and clean typography. We are a small team of designers and developers.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
        <li v-for="item in teams" :key="item.name">
          <img class="mx-auto h-24 w-24 rounded-full" :src="item.image" alt="">
          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
            {{ item.name }}
          </h3>
          <p class="text-sm leading-6 text-gray-600 dark:text-white/60">
            {{ item.role }}
          </p>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </main>
</template>
