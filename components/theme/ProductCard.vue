<script setup lang="ts">
export interface CardProps {
  data: {
    to: string
    theme: 'orange' | 'blue' | 'purple' | 'green' | 'red'
    title: string
    description: string
    active?: boolean
    image: string
    buttonText?: string
  }
}

defineProps<CardProps>()
</script>

<template>
  <NuxtLink :class="{ 'opacity-50 !pointer-events-none cursor-default': !data.active }" :to="data.to" class="w-full h-[220px] lg:h-[300px]">
    <div :class="[{ [data.theme]: true }]" class="w-full h-full group flex flex-col items-center justify-center border overflow-hidden rounded-lg border-[#cccccc] dark:border-[#303030] text-center backdrop-blur-sm dark:bg-[#6C6C6C] bg-[#bdbdbd] bg-opacity-20 dark:bg-opacity-10 relative p-2 md:p-4">
      <div class="oku-shadow-1 oku-shadow group-hover:opacity-100" />
      <div class="oku-shadow-2 oku-shadow group-hover:opacity-100" />
      <div class="oku-shadow-3 oku-shadow group-hover:opacity-100" />
      <img class="absolute -left-6 top-1/2 -translate-y-1/2 z-10" :src="`${data.image}.svg`" alt="oku" width="160" height="160">
      <div class="flex items-center justify-between flex-col relative w-full h-full">
       <div class="mt-10">
         <div class="absolute bottom-16 lg:bottom-20 flex px-2 py-1 text-xs rounded-full coming-soon" :class="{ '!hidden': data.active }">
            COMING SOON
          </div>
          <h2 class="text-lg md:text-2xl font-medium title">
            {{ data.title }}
          </h2>

          <div class="text-base md:text-base card-text">
            {{ data.description }}
          </div>
       </div>
        <div :class="{ '!hidden': !data.buttonText }" class="card-button px-3 py-1 flex items-center justify-center gap-1 rounded-md border">
          {{ data.buttonText }}
          <span class="i-heroicons-arrow-small-right w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="postcss">
.oku-shadow {
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

  .card-button {
    color: #FFA500;
    background: rgba(255, 149, 96, .1);
    border-color: rgba(255, 149, 96, .12);
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

  .card-button {
    color: #FFA500;
    background: rgba(255, 149, 96, .18);
    border-color: rgba(255, 149, 96, .2);
  }

  .coming-soon {
    border: 1px solid #F2DABE;
    color: #DA9C54;
  }

  .oku-shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 232, 139, 0.1) 0%, rgba(255, 235, 153, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .oku-shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 213, 139, 0.1) 0%, rgba(187, 153, 255, 0.00) 100%, rgba(255, 218, 153, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .oku-shadow-3 {
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

  .card-button {
    color: #4A87FF;
    background: rgba(96, 149, 255, .1);
    border-color: rgba(96, 149, 255, .12);
  }
}

.blue {
  .title {
    color: #2665E0;
  }

  .card-text {
    color: #4771C4;
  }
  .card-button {
    color: #4A87FF;
    background: rgba(96, 149, 255, .18);
    border-color: rgba(96, 149, 255, .2);
  }

  .oku-shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 255, 248, 0.10) 0%, rgba(153, 255, 249, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .oku-shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 213, 255, 0.10) 0%, rgba(153, 218, 255, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .oku-shadow-3 {
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

  .card-button {
    color: #B14AFF;
    background: rgba(186, 96, 255, .1);
    border-color: rgba(186, 96, 255, .12);
  }
}

.purple {
  .title {
    color: #8E26E0;
  }

  .card-text {
    color: #8D47C4;
  }

  .card-button {
    color: #B14AFF;
    background: rgba(186, 96, 255, .18);
    border-color: rgba(186, 96, 255, .2);
  }
  .oku-shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(207, 139, 255, 0.10) 0%, rgba(212, 153, 255, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .oku-shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(178, 139, 255, 0.10) 0%, rgba(187, 153, 255, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .oku-shadow-3 {
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
    color: #26b819;
  }

  .card-text {
    color: #51C447;
  }

  .card-button {
    color: #4AFF4A;
    background: rgba(96, 255, 96, .18);
    border-color: rgba(96, 255, 96, .2);
  }

  .coming-soon {
    border: 1px solid #a4db9f;
    color: #55ca4b;
  }
  .oku-shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(139, 255, 149, 0.10) 0%, rgba(153, 255, 161, 0.00) 100%);
    right: -61px;
    top: -60px;
  }
  .oku-shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(149, 255, 139, 0.10) 0%, rgba(187, 153, 255, 0.00) 100%, rgba(255, 218, 153, 0.00) 100%, rgba(162, 255, 153, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }
  .oku-shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(168, 255, 139, 0.10) 0%, rgba(179, 255, 153, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}

.dark .red {
  .title {
    color: #FF7777;
  }

  .card-text {
    color: #967474;
  }

  .card-button {
    color: #FF4A4A;
    background: rgba(255, 96, 96, .1);
    border-color: rgba(255, 96, 96, .12);
  }

  .coming-soon {
    border: 1px solid #3F3831;
    color: #9D8569;
  }

  .oku-shadow-1 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 139, 139, 0.10) 0%, rgba(255, 153, 153, 0.00) 100%);
    right: -61px;
    top: -60px;
  }

  .oku-shadow-2 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 139, 139, 0.10) 0%, rgba(255, 153, 153, 0.00) 100%);
    right: 20px;
    bottom: -100px;
  }

  .oku-shadow-3 {
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 139, 139, 0.10) 0%, rgba(255, 153, 153, 0.00) 100%);
    left: -108px;
    top: -80px;
  }
}
</style>
