<template>
  <div class="vp-raw flex flex-wrap gap-1">
    <fwb-kbd>
      <template #icon>
        <svg
          aria-hidden="true"
          class="mx-1 h-2.5 w-2.5 -rotate-90"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M1 9L5 5L1 1"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /></svg>
      </template>
      <span class="sr-only">Up</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg
          aria-hidden="true"
          class="mx-1 h-2.5 w-2.5 rotate-90"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M1 9L5 5L1 1"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /></svg>
      </template>
      <span class="sr-only">Down</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg
          aria-hidden="true"
          class="mx-1 h-2.5 w-2.5 rotate-180"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M1 9L5 5L1 1"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /></svg>
      </template>
      <span class="sr-only">Left</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg
          aria-hidden="true"
          class="mx-1 h-2.5 w-2.5"
          fill="none"
          viewBox="0 0 6 10"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M1 9L5 5L1 1"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        /></svg>
      </template>
      <span class="sr-only">Right</span>
    </fwb-kbd>
  </div>
</template>

<script lang="ts" setup>
import { FwbKbd } from '../../../../src/index'
</script>
