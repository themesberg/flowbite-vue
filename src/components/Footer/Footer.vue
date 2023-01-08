<template>
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <slot></slot>
  
  </footer>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  bgDark: {
    type: Boolean,
    default: false,
  },
  container: {
    type: Boolean,
    default: false,
  },
})

</script>
