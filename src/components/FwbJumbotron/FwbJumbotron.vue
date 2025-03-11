<template>
  <div
    v-bind="$attrs"
    :class="wrapperClasses"
  >
    <component
      :is="`h${headerLevel}`"
      :class="headerClassesComputed"
    >
      {{ headerText }}
    </component>
    <div
      :class="subTextClassesComputed"
    >
      {{ subText }}
    </div>
    <slot
      name="default"
    />
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed, useAttrs } from 'vue'

import type { HeaderLevel } from './types'

interface IAlertProps {
  headerLevel?: HeaderLevel
  subText?: string
  subTextClasses?: string
  headerText?: string
  headerClasses?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IAlertProps>(), {
  headerLevel: 1,
  subText: '',
  subTextClasses: '',
  headerText: '',
  headerClasses: '',
})
defineSlots<{
  /* eslint-disable @typescript-eslint/no-explicit-any */
  default: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
}>()

const attrs = useAttrs()

const wrapperClasses = computed(() => twMerge(
  'bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center ',
  attrs.class as string))

const headerClassesComputed = computed(() => twMerge('mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white', props.headerClasses))
const subTextClassesComputed = computed(() => twMerge('mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400', props.subTextClasses))

</script>
