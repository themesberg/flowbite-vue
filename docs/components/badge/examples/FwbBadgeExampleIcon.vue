<template>
  <div class="vp-raw flex items-end">
    <fwb-badge>
      <template #icon>
        <svg
          aria-hidden="true"
          class="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          fill-rule="evenodd"
        /></svg>
      </template>
      Default
    </fwb-badge>
    <fwb-badge
      size="sm"
      type="dark"
    >
      <template #icon>
        <svg
          aria-hidden="true"
          class="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          fill-rule="evenodd"
        /></svg>
      </template>
      Dark
    </fwb-badge>
  </div>
</template>

<script setup>
import { FwbBadge } from '../../../../src/index'
</script>
