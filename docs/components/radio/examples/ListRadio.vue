<template>
  <div>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{{ picked }}</span>
    </p>
    <ul
      class="w-48 !p-0 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <Radio name="list-radio" v-model="picked" value="svelte" label="Svelte" />
      </li>
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <Radio name="list-radio" v-model="picked" value="vue" label="Vue JS" />
      </li>
      <li class="w-full !m-0 pl-3 flex border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <Radio name="list-radio" v-model="picked" value="react" label="React" />
      </li>
      <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
        <Radio name="list-radio" v-model="picked" value="angular" label="Angular" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('svelte')
</script>
