<template>
  <div class="vp-raw">
    <fwb-rating :rating="4.75">
      <template #besideText>
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.75 out of 5
        </p>
      </template>
    </fwb-rating>
  </div>
</template>

<script setup>
import { FwbRating } from '../../../../src/index'
</script>
