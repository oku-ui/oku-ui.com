<script setup lang="ts">
import { OkuAlertDialog,OkuAlertDialogAction,OkuAlertDialogCancel,OkuAlertDialogContent,OkuAlertDialogDescription,OkuAlertDialogDescriptionWarning,OkuAlertDialogOverlay,OkuAlertDialogPortal,OkuAlertDialogTitle,OkuAlertDialogTrigger} from '@oku-ui/alert-dialog'
</script>

<template>
   <OkuAlertDialog>
    <OkuAlertDialogTrigger asChild>
      <button class="text-grayA-950 dark:text-white hover:bg-grayA-50 dark:hover:bg-grayA-900 dark:bg-grayA-950 shadow-grayA-200 dark:shadow-grayA-900 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black dark:focus:shadow-grayA-100">
        Delete account
      </button>
    </OkuAlertDialogTrigger>
    <OkuAlertDialogPortal>
      <OkuAlertDialogOverlay class="bg-blackA-700/60 data-[state=open]:animate-overlayShow fixed inset-0" />
      <OkuAlertDialogContent class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-grayA-950 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <OkuAlertDialogTitle class="text-grayA-950 dark:text-white m-0 text-[17px] font-medium">
          Are you absolutely sure?
        </OkuAlertDialogTitle>
        <OkuAlertDialogDescription class="text-grayA-700 dark:text-grayA-300 mt-4 mb-5 text-[15px] leading-normal">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </OkuAlertDialogDescription>
        <div class="flex justify-end gap-[25px]">
          <OkuAlertDialogCancel asChild>
            <button class="text-grayA-900 dark:text-grayA-100 dark:bg-grayA-900 bg-grayA-100 hover:bg-grayA-50 focus:shadow-grayA-800 dark:focus:shadow-grayA-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Cancel
            </button>
          </OkuAlertDialogCancel>
          <OkuAlertDialogAction asChild>
            <button class="text-red-600 dark:text-red-300 dark:bg-red-400/20 bg-red-100 hover:bg-red-100/80 dark:hover:bg-red-400/30 focus:shadow-red-400 dark:focus:shadow-red-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Yes, delete account
            </button>
          </OkuAlertDialogAction>
        </div>
      </OkuAlertDialogContent>
    </OkuAlertDialogPortal>
  </OkuAlertDialog></template>