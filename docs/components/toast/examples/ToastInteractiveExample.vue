<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <flowbite-themable :theme="'blue'">
      <Toast type="empty" closable alignment="start">
        <template #icon>
          <svg aria-hidden="true" class="w-5 h-5" fill="#ffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
        </template>
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
        <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
        <div class="grid grid-cols-2 gap-2">
          <Button size="xs">Update</Button>
          <Button size="xs" :color="'alternative'">Not now</Button>
        </div>
      </Toast>
    </flowbite-themable>
  </div>
</template>
<script setup>
import { Toast, FlowbiteThemable, Button } from '../../../../src/index'
</script>
