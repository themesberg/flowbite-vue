<template>
  <p :class="[color, sizes[size], heights[height], weights[weight], whitespaces[whitespace], aligns[align]]">
    <slot />
  </p>
</template>

<script setup lang="ts">
interface ParagraphProps {
  height?: 'normal' | 'relaxed' | 'loose'
  color?: string
  size?: string
  weight?: string
  whitespace?: string
  align?: string
}

withDefaults(defineProps<ParagraphProps>(), {
  height: 'normal',
  color: 'text-gray-900 dark:text-white',
  size: '',
  weight: '',
  whitespace: '',
  align: '',
})

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
</script>
