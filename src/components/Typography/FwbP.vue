<template>
  <p :class="componentClasses">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

interface ParagraphProps {
  align?: string
  class?: string
  height?: 'normal' | 'relaxed' | 'loose'
  size?: string
  weight?: string
  whitespace?: string
}

const props = withDefaults(defineProps<ParagraphProps>(), {
  align: '',
  class: '',
  height: 'normal',
  size: '',
  weight: '',
  whitespace: '',
})

const defaultClasses = 'mb-3 last:mb-0 text-gray-900 dark:text-white'

const sizes: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const weights: Record<string, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
}

const aligns: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const heights: Record<string, string> = {
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
}

const whitespaces: Record<string, string> = {
  normal: 'whitespace-normal',
  nowrap: 'whitespace-nowrap',
  pre: 'whitespace-pre',
  preline: 'whitespace-pre-line',
  prewrap: 'whitespace-pre-wrap',
}

const componentClasses = computed(() => useMergeClasses([
  defaultClasses,
  aligns[props.align],
  heights[props.height],
  sizes[props.size],
  weights[props.weight],
  whitespaces[props.whitespace],
  props.class,
]))
</script>
