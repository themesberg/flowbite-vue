<template>
  <div class="vp-raw flex flex-col items-center">
    <fwb-pagination
      v-model="currentPage"
      :total-items="100"
      :show-labels="false"
    >
      <template #prev-icon>
        ⬅️
      </template>
      <template #next-icon>
        ➡️
      </template>
      <template #page-button="{ page, setPage }">
        <button
          class="ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="setPage(page)"
        >
          {{ page }}
        </button>
      </template>
    </fwb-pagination>
    Current page: {{ currentPage }}
  </div>
</template>

<script lang="ts" setup>
import { FwbPagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
