<template>
  <div
    v-bind="$attrs"
    :class="wrapperClasses"
  >
    <component
      :is="`h${headerLevel}`"
      :class="headerClasses"
    >
      <slot name="headerContent">
        {{ headerText }}
      </slot>
    </component>
    <div
      :class="textClasses"
    >
      {{ subText }}
    </div>
    <slot
      v-if="divider"
      name="divider"
    >
      <div
        :class="dividerClassesMerged"
      />
    </slot>
    <slot
      name="default"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'
import type { HeaderLevel } from './types'

interface IAlertProps {
  headerLevel?: HeaderLevel
  divider?: boolean
  subText?: string
  headerText?: string
}

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<IAlertProps>(), {
  headerLevel: 1,
  divider: true,
  subText: '',
  headerText: '',
})
defineSlots<{
  /* eslint-disable @typescript-eslint/no-explicit-any */
  default: any
  'headerContent': any
  'divider': any
  /* eslint-enable @typescript-eslint/no-explicit-any */
}>()

const attrs = useAttrs()

const dividerClassesMerged = 'w-full h-[1px] dark:bg-gray-300 bg-gray-900 my-4'
const headerClasses = 'mb-2 text-2xl'
const textClasses = 'text-xs'

const wrapperClasses = twMerge(
  'flex flex-col px-4 py-8 text-sm dark:bg-gray-800 rounded',
  attrs.class as string,
)
</script>
