<template>
  <div
    v-if="visible"
    v-bind="$attrs"
    :class="wrapperClasses"
    role="alert"
  >
    <div class="flex items-center">
      <slot
        v-if="icon || $slots.icon"
        name="icon"
      >
        <svg
          class="size-5 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </slot>
      <slot name="title" />
    </div>
    <slot
      name="default"
      :on-close-click="onCloseClick"
    />
    <slot
      name="close-icon"
      :on-close-click="onCloseClick"
    >
      <button
        v-if="closable"
        type="button"
        :class="closeBtnClasses"
        aria-label="Close"
        @click="onCloseClick"
      >
        <span class="sr-only">Dismiss</span>
        <svg
          class="size-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed, ref, useAttrs } from 'vue'

import type { AlertType } from './types'

interface IAlertProps {
  type?: AlertType
  closable?: boolean
  icon?: boolean
  border?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IAlertProps>(), {
  type: 'info',
  closable: false,
  icon: false,
  border: false,
})
defineSlots<{
  'default': any
  'close-icon': any
  'icon': any
  'title': any
}>()
const emits = defineEmits<{ (e: 'close'): void }>()

const attrs = useAttrs()
const alertTextClasses: Record<AlertType, string> = {
  danger: 'text-red-800 dark:text-red-400',
  dark: 'text-gray-800 dark:text-gray-300',
  info: 'text-blue-800 dark:text-blue-400',
  success: 'text-green-800 dark:text-green-400',
  warning: 'text-yellow-800 dark:text-yellow-300',
}
const alertTypeClasses: Record<AlertType, string> = {
  danger: 'bg-red-50',
  dark: 'bg-gray-50',
  info: 'bg-blue-50',
  success: 'bg-green-50',
  warning: 'bg-yellow-50',
}
const defaultCloseButtonClasses = 'ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700'
const closeButtonClasses: Record<AlertType, string> = {
  danger: 'text-red-500 dark:text-red-400 bg-red-50 hover:bg-red-200 focus:ring-red-400',
  dark: 'text-gray-500 dark:text-gray-300 bg-gray-50 hover:bg-gray-200 focus:ring-gray-400 dark:hover:text-white',
  info: 'text-blue-500 dark:text-blue-400 bg-blue-50 hover:bg-blue-200 focus:ring-blue-400',
  success: 'text-green-500 dark:text-green-400 bg-green-50 hover:bg-green-200 focus:ring-green-400',
  warning: 'text-yellow-500 dark:text-yellow-300 bg-yellow-50 hover:bg-yellow-200 focus:ring-yellow-400',
}
const closeBtnClasses = computed(() => twMerge(defaultCloseButtonClasses, closeButtonClasses[props.type]))
const borderColor: Record<AlertType, string> = {
  danger: 'border-red-500 dark:text-red-400',
  dark: 'border-gray-500 dark:text-gray-400',
  info: 'border-blue-500 dark:text-blue-400',
  success: 'border-green-500 dark:text-green-400',
  warning: 'border-yellow-500 dark:text-yellow-400',
}
const colors = {
  danger: [alertTextClasses.danger, alertTypeClasses.danger].join(' '),
  dark: [alertTextClasses.dark, alertTypeClasses.dark].join(' '),
  info: [alertTextClasses.info, alertTypeClasses.info].join(' '),
  success: [alertTextClasses.success, alertTypeClasses.success].join(' '),
  warning: [alertTextClasses.warning, alertTypeClasses.warning].join(' '),
}
const wrapperClasses = computed(() => twMerge(
  'p-4 gap-3 text-sm dark:bg-gray-800 rounded-lg',
  colors[props.type],
  (props.icon || props.closable) && 'flex items-center',
  borderColor[props.type],
  props.border && 'border',
  attrs.class as string,
))
const visible = ref(true)

function onCloseClick () {
  emits('close')
  visible.value = false
}
</script>
