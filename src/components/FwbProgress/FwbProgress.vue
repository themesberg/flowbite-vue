<template>
  <div>
    <template v-if="label || (showValue && valuePosition === 'outside' && !indeterminate)">
      <div class="mb-1 flex justify-between">
        <span :class="outsideLabelClasses">{{ label }}</span>
        <span
          v-if="showValue && valuePosition === 'outside' && !indeterminate"
          :class="outsideLabelClasses"
        >
          <slot
            name="value"
            :progress="progress"
          >{{ progress }}%</slot>
        </span>
      </div>
    </template>
    <div
      :class="outerClasses"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="indeterminate ? undefined : progress"
    >
      <div
        v-if="indeterminate"
        class="fwb-progress-indeterminate absolute inset-y-0 left-0"
        :class="innerClasses"
      />
      <div
        v-else
        :class="innerClasses"
        :style="{ width: progress + '%' }"
      >
        <template v-if="showValue && valuePosition === 'inside' && progress > 0">
          <slot
            name="value"
            :progress="progress"
          >
            {{ progress }}%
          </slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useProgressClasses } from './composables/useProgressClasses'

import type { ProgressColorVariant, ProgressSize, ProgressValuePosition } from './types'

interface IProgressProps {
  color?: ProgressColorVariant
  label?: string
  showValue?: boolean
  valuePosition?: ProgressValuePosition
  progress?: number
  indeterminate?: boolean
  size?: ProgressSize
  innerClasses?: string | Record<string, boolean>
  outerClasses?: string | Record<string, boolean>
  outsideLabelClasses?: string | Record<string, boolean>
}

const props = withDefaults(defineProps<IProgressProps>(), {
  color: 'default',
  label: '',
  showValue: false,
  valuePosition: 'none',
  progress: 0,
  indeterminate: false,
  size: 'md',
  innerClasses: '',
  outerClasses: '',
  outsideLabelClasses: '',
})

defineSlots<{
  value?: (props: { progress: number }) => unknown
}>()

const {
  innerClasses,
  outerClasses,
  outsideLabelClasses,
} = useProgressClasses(toRefs(props))
</script>

<style scoped>
@keyframes fwb-progress-indeterminate-slide {
  0% {
    left: -40%;
    width: 40%;
  }
  50% {
    left: 20%;
    width: 60%;
  }
  100% {
    left: 100%;
    width: 40%;
  }
}

.fwb-progress-indeterminate {
  animation: fwb-progress-indeterminate-slide 1.5s ease-in-out infinite;
}
</style>
