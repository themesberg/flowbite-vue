<template>
  <a
    class="relative flex size-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
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
