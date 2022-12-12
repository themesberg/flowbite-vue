<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <slot></slot>
    </table>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  striped: {
    type: Boolean,
    default: false,
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})

</script>
