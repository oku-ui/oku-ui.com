<script setup lang="ts">
import { OkuHoverCard, OkuHoverCardArrow, OkuHoverCardContent, OkuHoverCardPortal, OkuHoverCardTrigger } from '@oku-ui/hover-card'
</script>

<template>
  <OkuHoverCard>
    <OkuHoverCardTrigger as-child>
      <a
        className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
        href="https://twitter.com/oku_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="block h-[45px] w-[45px] rounded-full"
          src="../../../assets/oku.jpg"
          alt="Oku UI"
        >
      </a>
    </OkuHoverCardTrigger>
    <OkuHoverCardPortal>
      <OkuHoverCardContent
        class-name="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white dark:bg-codGray-950 p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        :side-offset="5"
      >
        <div className="flex flex-col gap-[7px]">
          <img
            className="block h-[60px] w-[60px] rounded-full"
            src="../../../assets/oku.jpg"
            alt="Oku UI"
          >
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-blackOA-900 dark:text-white m-0 text-[15px] font-medium leading-[1.5]">
                Oku
              </div>
              <div className="text-blackOA-600 dark:text-grayOA-300 m-0 text-[15px] leading-[1.5]">
                @oku_ui
              </div>
            </div>
            <div className="text-blackOA-600 dark:text-grayOA-300 m-0 text-[15px] leading-[1.5]">
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="text-blackOA-900 dark:text-white m-0 text-[15px] font-medium leading-[1.5]">
                  0
                </div>
                <div className="text-blackOA-600 dark:text-grayOA-300 m-0 text-[15px] leading-[1.5]">
                  Following
                </div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-blackOA-900 dark:text-white m-0 text-[15px] font-medium leading-[1.5]">
                  2,900
                </div>
                <div className="text-blackOA-600 dark:text-grayOA-300 m-0 text-[15px] leading-[1.5]">
                  Followers
                </div>
              </div>
            </div>
          </div>
        </div>
        <OkuHoverCardArrow class-name="fill-white" />
      </OkuHoverCardContent>
    </OkuHoverCardPortal>
  </OkuHoverCard>
</template>
