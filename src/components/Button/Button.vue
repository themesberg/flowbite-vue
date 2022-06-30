<template>
  <button type="button" :class="bindClasses">
    <slot name="prefix" />
    <span :class="spanClasses">
      <slot/>
    </span>
    <slot name="suffix" />
  </button>
</template>
<script lang="ts" setup>
import {computed, useSlots} from 'vue'
import type { PropType } from 'vue'

import classNames from 'classnames'

export type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
export type ButtonDuotoneGradient = 'purple-blue' | 'cyan-blue' | 'green-blue' | 'purple-pink' | 'pink-orange' | 'teal-lime' | 'red-yellow'
export type ButtonGradient = ButtonDuotoneGradient | ButtonMonochromeGradient

export type ButtonVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  color: {
    type: String as PropType<ButtonVariant>,
    default: 'default',
  },
  gradient: {
    type: [String, null] as PropType<ButtonGradient | null>,
    default: null,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  pill: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [String, null] as PropType<ButtonMonochromeGradient | '' | null>,
    default: null,
  },
})

const slots = useSlots()

const bindClasses = computed(() => {
  const isGradient = !!props.gradient
  const isColor = !!props.color
  const isOutline = props.outline

  let backgroundClass = ''

  if(isGradient && isOutline) {
    if(['blue', 'green', 'cyan', 'teal', 'lime', 'red', 'pink', 'purple'].includes(props.gradient)) { // invalid gradients for outline
      backgroundClass = buttonGradientClasses[props.gradient]
    } else {
      backgroundClass = buttonOutlineGradientClasses[props.gradient as unknown as keyof typeof buttonOutlineGradientClasses]
    }
  } else if(isGradient) {
    backgroundClass = buttonGradientClasses[props.gradient]
  } else if(isColor && isOutline) {
    if(['alternative', 'light'].includes(props.color)) { // invalid colors for outline
      backgroundClass = buttonColorClasses[props.color]
    } else {
      backgroundClass = buttonOutlineColorClasses[props.color as unknown as keyof typeof buttonOutlineColorClasses]
    }
  } else {
    backgroundClass = buttonColorClasses[props.color]
  }

  let shadowClass = ''
  if(props.shadow === '') {
    if(props.gradient && ['blue', 'green', 'cyan', 'teal', 'lime', 'red', 'pink', 'purple'].includes(props.gradient)) {
      shadowClass = buttonShadowClasses[props.gradient as unknown as keyof typeof buttonShadowClasses]
    }
  } else if(typeof props.shadow === 'string') {
    if(['blue', 'green', 'cyan', 'teal', 'lime', 'red', 'pink', 'purple'].includes(props.shadow)) {
      shadowClass = buttonShadowClasses[props.shadow as unknown as keyof typeof buttonShadowClasses]
    }
  }

  return classNames(
      backgroundClass,
      shadowClass,
      (isGradient && isOutline) ? 'p-0.5' : buttonSizeClasses[props.size],
      props.pill ? '!rounded-full' : '',
      (slots.prefix || slots.suffix) ? 'inline-flex items-center' : '',
  )
})

const spanClasses = computed(() => {
  if(!!props.gradient && props.outline)
    return classNames(
        'relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0',
        buttonSizeClasses[props.size],
    )
  return ''
})

const buttonColorClasses: Record<ButtonVariant, string> = {
  default: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  alternative: 'font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  light: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  green: 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow: 'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900',
  purple: 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
}

const buttonOutlineColorClasses: Record<Exclude<ButtonVariant, 'light' | 'alternative'>, string> = {
  dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
  default: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
  green: 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
  purple: 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
  red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
  yellow: 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
}

const buttonGradientClasses: Record<ButtonGradient, string> = {
  'cyan-blue': 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg',
  'green-blue': 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg',
  'pink-orange': 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg',
  'purple-blue': 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg',
  'purple-pink': 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg',
  'red-yellow': 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg',
  'teal-lime': 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg',
  'blue': 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg',
  'cyan': 'text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg',
  'green': 'text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg',
  'lime': 'text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg',
  'pink': 'text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg',
  'purple': 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg',
  'red': 'text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg',
  'teal': 'text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg',
}

const buttonOutlineGradientClasses: Record<ButtonDuotoneGradient, string> = {
  'cyan-blue': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
  'green-blue': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  'pink-orange': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
  'purple-blue': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
  'purple-pink': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
  'red-yellow': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  'teal-lime': 'relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
  xl: 'text-base px-6 py-3',
}

const buttonShadowClasses: Record<ButtonMonochromeGradient, string> = {
  'blue': 'shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80',
  'cyan': 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
  'green': 'shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80',
  'lime': 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
  'pink': 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
  'purple': 'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80',
  'red': 'shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80',
  'teal': 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80',
}
</script>
