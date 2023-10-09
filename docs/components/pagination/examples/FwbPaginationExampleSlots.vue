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
          class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-purple-200 border border-purple-300 hover:bg-purple-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
