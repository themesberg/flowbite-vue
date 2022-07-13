<template>
  <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
  </ul>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  
})

</script>
