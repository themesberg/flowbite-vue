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
  default: any
}>()

const attrs = useAttrs()

const wrapperClasses = computed(() => twMerge(
  'bg-white dark:bg-gray-900 mx-auto px-4 py-8 lg:py-16 max-w-screen-xl text-center',
  attrs.class as string))

const headerClassesComputed = computed(() => twMerge('mb-4 font-extrabold text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight', props.headerClasses))
const subTextClassesComputed = computed(() => twMerge('mb-8 sm:px-0 lg:px-16 font-normal text-gray-500 dark:text-gray-400 text-lg lg:text-xl', props.subTextClasses))

</script>
