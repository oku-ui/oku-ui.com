<!-- import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (

  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export default ToastDemo; -->

<script setup lang="ts">
import { OkuToast, OkuToastAction, OkuToastDescription, OkuToastProvider, OkuToastTitle, OkuToastViewport } from '@oku-ui/toast'

const open = ref(false)
const eventDateRef = ref(new Date())
const timerRef = ref(0)

onMounted(() => {
  clearTimeout(timerRef.value)
})

function setOpen(res: any) {
  open.value = res
  console.log(res)
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}

function click() {
  setOpen(false)
  window.clearTimeout(timerRef.value)
  timerRef.value = window.setTimeout(() => {
    eventDateRef.value = oneWeekAway()
    setOpen(true)
  }, 100)
}
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuToastProvider swipe-direction="right">
      <button
        class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-violet11 shadow-[0_2px_10px] shadow-blackOA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        @click="click"
      >
        Add to calendar
      </button>

      <OkuToast
        v-model="open"
        class="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--oku-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
      >
        <OkuToastTitle class="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Scheduled: Catch up
        </OkuToastTitle>
        <OkuToastDescription as-child>
          <time
            class="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
            :dateTime="eventDateRef.toISOString()"
          >
            {{ prettyDate(eventDateRef) }}
          </time>
        </OkuToastDescription>
        <OkuToastAction class="[grid-area:_action]" as-child alt-text="Goto schedule to undo">
          <button class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </OkuToastAction>
      </OkuToast>
      <OkuToastViewport class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </OkuToastProvider>
  </div>
</template>
