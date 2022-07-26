<template>
  <div class="vp-raw flex align-center gap-2 flex-wrap flex-col">
    <Toast type="empty" closable alignment="start">
      <template #icon>
        <img class="w-8 h-8 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
      </template>
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
    </Toast>
  </div>
</template>
<script setup>
import { Toast } from '../../../../src/index'
</script>
