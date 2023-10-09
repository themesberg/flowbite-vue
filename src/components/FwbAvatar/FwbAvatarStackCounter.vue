<template>
  <a
    class="relative flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
    :href="href"
  >+{{ total }}</a>
</template>

<script setup lang="ts">
defineProps({
  total: {
    type: Number,
    default: 1,
  },
  href: {
    type: String,
    default: '#',
  },
})
</script>
