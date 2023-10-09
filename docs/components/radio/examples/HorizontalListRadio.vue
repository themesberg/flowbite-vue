<template>
  <div>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      Technology <span class="capitalize">{{ picked1 }}</span>
    </p>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <radio
          v-model="picked1"
          name="hor-radio"
          value="svelte"
          label="Svelte"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <radio
          v-model="picked1"
          name="hor-radio"
          value="vue"
          label="Vue JS"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <radio
          v-model="picked1"
          name="hor-radio"
          value="react"
          label="React"
        />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <radio
          v-model="picked1"
          name="hor-radio"
          value="angular"
          label="Angular"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked1 = ref('svelte')
</script>
