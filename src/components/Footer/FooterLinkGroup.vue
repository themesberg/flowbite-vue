<template>
  <ul :class="footerLinkGroupClasses" v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<script lang="ts" setup>
import classNames from "classnames"
import { computed } from "vue"


const props = defineProps({
  col: {
    type: Boolean,
    defalut: false
  }
})

const defaultClasses = "items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"

const horizontalClasses = "flex flex-wrap"
const verticalClasses   = "grid gap-4"

const footerLinkGroupClasses = computed(() => classNames(defaultClasses, props.col ? verticalClasses : horizontalClasses))
</script>