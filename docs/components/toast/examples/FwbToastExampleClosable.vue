<template>
  <div class="vp-raw grid gap-2 justify-center">
    <fwb-toast dismissable>
      <template #icon>
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
          />
        </svg>
        <span class="sr-only">Fire icon</span>
      </template>
      You've unlocked achievement.
    </fwb-toast>
  </div>
</template>

<script setup>
import { FwbToast } from '../../../../src/index'
</script>
