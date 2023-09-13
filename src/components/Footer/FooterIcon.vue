<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'
defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
interface IFooterIconProps {
  href?: string
  ariaLabel?: string
  srText?: string
}
const props = withDefaults(defineProps<IFooterIconProps>(), {
  href: '',
  ariaLabel: '',
  srText: '',
})
const iconComponent = props.href ? 'a' : 'span'

const aClasses = twMerge('text-gray-500 hover:text-gray-900 dark:hover:text-white', attrs.class as string)
</script>

<template>
  <component v-bind="$attrs" :is="iconComponent" :href="href" :aria-label="ariaLabel" :class="aClasses">
    <slot />
    <span class="sr-only">{{ srText }}</span>
  </component>
</template>
