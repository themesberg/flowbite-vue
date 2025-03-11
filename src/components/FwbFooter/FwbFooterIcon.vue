<template>
  <component
    :is="iconComponent"
    :aria-label="ariaLabel"
    :class="aClasses"
    :href="href"
    v-bind="$attrs"
  >
    <slot />
    <span class="sr-only">{{ srText }}</span>
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'

interface IFooterIconProps {
  href?: string
  ariaLabel?: string
  srText?: string
}

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const props = withDefaults(defineProps<IFooterIconProps>(), {
  href: '',
  ariaLabel: '',
  srText: '',
})

const iconComponent = props.href ? 'a' : 'span'
const aClasses = twMerge('text-gray-500 hover:text-gray-900 dark:hover:text-white', attrs.class as string)
</script>
