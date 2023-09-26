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
        :class="innerClasses"
        :style="{ width: progress + '%' }"
        class="rounded-full font-medium text-blue-100 text-center p-0.5"
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
} = useProgressClasses(toRefs(props))
</script>
