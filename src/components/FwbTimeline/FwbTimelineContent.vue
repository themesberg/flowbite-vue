<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const isHorizontal = inject('horizontal', false)
const classes = computed(() => useMergeClasses(isHorizontal ? 'mt-3 sm:pr-8' : ''))
</script>
