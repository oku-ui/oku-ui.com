<script setup lang="ts">
interface CardProps {
  data: {
    to: string
    theme: 'orange' | 'blue' | 'purple' | 'green'
    title: string
    description: string
    active?: boolean
    image: string
  }
}

defineProps<CardProps>()
</script>

<template>
  <NuxtLink :to="data.to" class="mx-4 lg:mx-0">
    <div :class="data.theme" class="w-full h-full flex flex-col items-center border overflow-hidden rounded-lg border-[#D0D0D0] dark:border-[#303030] text-center backdrop-blur-sm bg-[#6C6C6C] bg-opacity-10 relative group p-4 pt-20">
      <div class="shadow-1 shadow group-hover:opacity-60" />
      <div class="shadow-2 shadow group-hover:opacity-60" />
      <div class="shadow-3 shadow group-hover:opacity-60" />
      <img class="absolute -left-6 top-1/2 -translate-y-1/2 z-10" :src="`${data.image}.svg`" alt="oku" width="160" height="160">
      <div class="flex items-center flex-col gap-4 relative w-full">
        <div class="absolute bottom-20 flex px-2 py-1 text-xs rounded-full coming-soon" :class="{'!hidden': data.active}">
          COMING SOON
        </div>
        <h2 class="text-2xl font-medium title">
          {{ data.title }}
        </h2>

        <div class="text-sm md:text-base card-text">
          {{ data.description }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="postcss">
.shadow {
  width: 300px;
  height: 300px;
  position: absolute;
  opacity: 0.5;
  border-radius: 50%;
  transition: 0.3s all;
}

.dark .orange {
  .title {
    color: #FFC077;
  }

  .card-text {
    color: #968774;
  }

  .coming-soon {
    border: 1px solid #3F3831;
    color: #9D8569;
  }
}

.orange {
  .title {
    color: #E08A25;
  }
  .card-text {
    color: #C68C48;
  }

  .coming-soon {
    border: 1px solid #F2DABE;
    color: #DA9C54;
  }

  .shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 232, 139, 0.1) 0%, rgba(255, 235, 153, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 213, 139, 0.1) 0%, rgba(187, 153, 255, 0.00) 100%, rgba(255, 218, 153, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 193, 139, 0.1) 0%, rgba(255, 201, 153, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}

.dark .blue {
  .title {
    color: #71A1FF;
  }

  .card-text {
    color: #747F96;
  }
}

.blue {
  .title {
    color: #2665E0;
  }

  .card-text {
    color: #4771C4;
  }
  .shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 255, 248, 0.10) 0%, rgba(153, 255, 249, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 213, 255, 0.10) 0%, rgba(153, 218, 255, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 172, 255, 0.10) 0%, rgba(153, 182, 255, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}

.dark .purple {
  .title {
    color: #C377FF;
  }

  .card-text {
    color: #877396;
  }
}

.purple {
  .title {
    color: #8E26E0;
  }

  .card-text {
    color: #8D47C4;
  }
  .shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(207, 139, 255, 0.10) 0%, rgba(212, 153, 255, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(178, 139, 255, 0.10) 0%, rgba(187, 153, 255, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(142, 139, 255, 0.10) 0%, rgba(155, 153, 255, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}

.dark .green {
  .title {
    color: #82FF77;
  }

  .card-text {
    color: #779674;
  }

  .coming-soon {
    border: 1px solid #323F31;
    color: #6E9E6A;
  }

}

.green {
  .title {
    color: #35E026;
  }

  .card-text {
    color: #51C447;
  }

  .coming-soon {
    border: 1px solid #a4db9f;
    color: #55ca4b;
  }
  .shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 255, 149, 0.10) 0%, rgba(153, 255, 161, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(149, 255, 139, 0.10) 0%, rgba(187, 153, 255, 0.00) 100%, rgba(255, 218, 153, 0.00) 100%, rgba(162, 255, 153, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(168, 255, 139, 0.10) 0%, rgba(179, 255, 153, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}

</style>