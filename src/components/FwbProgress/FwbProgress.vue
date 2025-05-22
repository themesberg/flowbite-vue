<template>
  <div>
    <template v-if="label || (labelProgress && labelPosition === 'outside')">
      <div class="mb-1 flex justify-between">
        <span
          :class="outsideLabelClasses"
          :style="customColor ? { color: customColor } : {}"
          class="text-base font-medium"
        >{{ label }}</span>
        <span
          v-if="labelProgress && labelPosition === 'outside'"
          :class="outsideLabelClasses"
          :style="customColor ? { color: customColor } : {}"
          class="text-sm font-medium"
        >{{ progress }}%</span>
      </div>
    </template>
    <div
      :class="outerClasses"
      class="w-full rounded-full bg-gray-200 dark:bg-gray-700"
    >
      <div
        :class="innerClasses"
        :style="customColor
          ? { width: progress + '%', backgroundColor: customColor }
          : { width: progress + '%' }"
        class="rounded-full p-0.5 text-center font-medium text-blue-100"
      >
        <template v-if="labelProgress && labelPosition === 'inside'">
          {{ progress }}%
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useProgressClasses } from './composables/useProgressClasses'

import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from './types'

interface IProgressProps {
  color?: ProgressVariant
  label?: string
  labelPosition?: ProgressLabelPosition
  labelProgress?: boolean
  progress?: number
  size?: ProgressSize
}

const props = withDefaults(defineProps<IProgressProps>(), {
  color: 'default',
  label: '',
  labelPosition: 'none',
  labelProgress: false,
  progress: 0,
  size: 'md',
})

const {
  innerClasses,
  outerClasses,
  outsideLabelClasses,
  customColor,
} = useProgressClasses(toRefs(props))
</script>
