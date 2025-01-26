<template>
  <div class="vp-raw">
    <fwb-toast
      alignment="start"
      closable
    >
      <template #icon>
        <img
          alt="Jese Leos image"
          class="size-8 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
        >
      </template>
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">
        Hi Neil, thanks for sharing your thoughts regarding Flowbite.
      </div>
      <fwb-button
        size="xs"
        href="#"
      >
        Reply
      </fwb-button>
    </fwb-toast>
  </div>
</template>

<script lang="ts" setup>
import { FwbButton, FwbToast } from '../../../../src/index'
</script>
