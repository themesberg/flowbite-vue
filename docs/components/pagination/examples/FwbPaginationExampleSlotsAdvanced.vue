<template>
  <div class="vp-raw flex flex-col items-center mb-2">
    <fwb-pagination
      v-model="currentPage"
      :total-items="100"
      enable-first-last
    >
      <template #first-button="{ disabled, setPage }">
        <button
          class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :disabled="disabled"
          @click="setPage()"
        >
          First page
        </button>
      </template>

      <template #last-button="{disabled, setPage, page }">
        <button
          class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :disabled="disabled"
          @click="setPage()"
        >
          Last page ({{ page }})
        </button>
      </template>

      <template #prev-button="{disabled, decreasePage }">
        <button
          class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :disabled="disabled"
          @click="decreasePage()"
        >
          Prev page
        </button>
      </template>

      <template #next-button="{disabled, increasePage }">
        <button
          class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :disabled="disabled"
          @click="increasePage()"
        >
          Next page
        </button>
      </template>

      <template #page-button="{ disabled, page, setPage }">
        <button
          class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg  hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="{
            'bg-purple-200 hover:bg-purple-300': !disabled,
            'bg-purple-300': disabled
          }"
          :disabled="disabled"
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
import { ref } from 'vue'

import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
