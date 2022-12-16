<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <slot></slot>
  </ol>
</template>
<script lang="ts" setup>
defineProps({
  horizontal: {
    type: Boolean,
    default: false,
  },
})

</script>
