<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames'
import { computed, inject } from 'vue'

const isHorizontal = inject('horizontal')
const classes = computed(() => classNames(isHorizontal ? 'mt-3 sm:pr-8' : ''))
</script>
