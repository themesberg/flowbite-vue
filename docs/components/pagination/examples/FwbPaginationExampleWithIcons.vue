<template>
  <div class="vp-raw flex flex-col items-center">
    <fwb-pagination
      v-model="currentPage"
      :total-pages="100"
      :show-labels="false"
      class="mb-2"
    >
      <template #prev-icon>
        <span class="sr-only">Previous</span>
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </template>
      <template #next-icon>
        <span class="sr-only">Next</span>
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </template>
    </fwb-pagination>
    <fwb-pagination
      v-model="currentPage"
      :total-pages="100"
      :show-labels="false"
      large
    >
      <template #prev-icon>
        <span class="sr-only">Previous</span>
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </template>
      <template #next-icon>
        <span class="sr-only">Next</span>
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </template>
    </fwb-pagination>
  </div>
</template>
<script lang="ts" setup>
import { FwbPagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
