<template>
  <div
    :class="wrapperClasses"
    role="alert"
  >
    <div
      v-if="$slots.icon || icon"
      :class="[ typeClasses, 'inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg' ]"
    >
      <slot
        name="icon"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
          />
        </svg>
      </slot>
    </div>
    <div :class="[contentClasses, { 'ml-3': $slots.icon || icon }]">
      <slot />
    </div>

    <slot
      name="close-button"
    >
      <button
        v-if="dismissable"
        aria-label="Close"
        class="border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        type="button"
        @click="onClose"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { ToastAlign, ToastColor } from './types'
import { useToastClasses } from './composables/useToastClasses'

interface IFwbToastProps {
  color?: ToastColor,
  alignment?: ToastAlign,
  dismissable?: boolean,
  divide?: boolean,
  icon?: boolean
}
const props = withDefaults(defineProps<IFwbToastProps>(), {
  color: 'blue',
  alignment: 'center',
  dismissable: false,
  divide: false,
  icon: true,
})

const emit = defineEmits(['close'])

const {
  typeClasses,
  wrapperClasses,
  contentClasses,
} = useToastClasses(props)
console.log(typeClasses.value)

const onClose = () => {
  emit('close')
}
</script>
