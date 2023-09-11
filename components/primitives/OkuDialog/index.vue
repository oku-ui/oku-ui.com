<script setup lang="ts">
import { OkuDialog, OkuDialogClose, OkuDialogContent, OkuDialogDescription, OkuDialogOverlay, OkuDialogPortal, OkuDialogTitle, OkuDialogTrigger } from '@oku-ui/dialog'
</script>

<template>
  <OkuDialog>
    <OkuDialogTrigger as-child>
      <button className="bg-white dark:bg-blackA-900 dark:text-white text-blackA-900 shadow-grayA-200 dark:shadow-blackA-900 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black dark:focus:shadow-grayA-300 focus:outline-none">
        Edit profile
      </button>
    </OkuDialogTrigger>
    <OkuDialogPortal>
      <OkuDialogOverlay class-name="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
      <OkuDialogContent class-name="bg-white dark:bg-blackA-900 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <OkuDialogTitle class-name="text-blackA-900 dark:text-white m-0 text-[17px] font-medium">
          Edit profile
        </OkuDialogTitle>
        <OkuDialogDescription class-name="text-blackA-600 dark:text-grayA-300 dark:text mt-[10px] mb-5 text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </OkuDialogDescription>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-blackA-900 dark:text-grayA-200 w-[90px] text-right text-[15px]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="text-blackA-900 dark:text-grayA-200 dark:bg-blackA-900 dark:shadow-blackA-600 shadow-grayA-300 focus:shadow-blackA-900 dark:focus:shadow-grayA-100 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue="Emir Uluçay"
          >
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-blackA-900 dark:text-grayA-200 w-[90px] text-right text-[15px]" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="text-blackA-900 dark:text-grayA-200 dark:bg-blackA-900 dark:shadow-blackA-600 shadow-grayA-300 focus:shadow-blackA-900 dark:focus:shadow-grayA-100 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue="@astrodokki"
          >
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <OkuDialogClose as-child>
            <button className="bg-green-100 dark:bg-green-700/20 dark:text-green-500 text-green-800 hover:bg-green-200 dark:hover:bg-green-600/20 focus:shadow-green-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </OkuDialogClose>
        </div>
        <OkuDialogClose as-child>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </OkuDialogClose>
      </OkuDialogContent>
    </OkuDialogPortal>
  </OkuDialog>
</template>
