<template>
  <div>
    <template v-if="label || (labelProgress && labelPosition === 'outside')">
      <div class="flex justify-between mb-1">
        <span
          :class="outsideLabelClasses"
          class="text-base font-medium"
        >{{ label }}</span>
        <span
          v-if="labelProgress && labelPosition === 'outside'"
          :class="outsideLabelClasses"
          class="text-sm font-medium"
        >{{ progress }}%</span>
      </div>
    </template>
    <div
      :class="outerClasses"
      class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
    >
      <div
        v-if="displayBar"
        :class="innerClasses"
        :style="{ width: safeProgress + '%' }"
        class="rounded-full font-medium text-blue-100 text-center p-0.5 min-w-max box-border"
      >
        <template v-if="labelProgress && labelPosition === 'inside'">
          {{ progress }}%
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
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

const progressSafeSizes: Record<ProgressSize, number> = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
}

const props = withDefaults(defineProps<IProgressProps>(), {
  color: 'default',
  label: '',
  labelPosition: 'none',
  labelProgress: false,
  progress: 0,
  size: 'md',
})

const safeProgress = computed(() => {
  const size = progressSafeSizes[props.size]
  return props.progress <= size ? size : props.progress
})

const displayBar = computed(() => {
  return props.labelPosition === 'inside' || props.progress > 0
})

const {
  innerClasses,
  outerClasses,
  outsideLabelClasses,
} = useProgressClasses(toRefs(props))
</script>
