<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'
defineOptions({
  inheritAttrs: false,
})
interface IFooterCopyrigthProps {
  year?: string | number
  by?: string
  href?: string
  aClass?: string
  copyrightMessage?: string
}

const props = withDefaults(defineProps<IFooterCopyrigthProps>(), {
  year: new Date().getFullYear(),
  by: '',
  href: '',
  aClass: '',
  copyrightMessage: 'All Rights Reserved.',
})
const attrs = useAttrs()
const spanClasses = twMerge('block text-sm text-gray-500 sm:text-center dark:text-gray-400', attrs.class as string)
const aClasses = twMerge(props.href ? 'hover:underline' : 'ml-1', props.aClass)
const byComponent = props.href ? 'a' : 'span'
</script>

<template>
  <span v-bind="$attrs" :class="spanClasses">
    &copy; {{ year }}
    <component :is="byComponent" :href="href" :class="aClasses">{{ by }}</component>
    {{ copyrightMessage }}
  </span>
</template>
