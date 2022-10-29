<template>
  <div>
  <template v-if="label || (labelProgress && labelPosition === 'outside')">
    <div class="flex justify-between mb-1">
      <span v-show="label || (labelProgress && labelPosition === 'outside')" class="text-base font-medium" :class="outsideLabelClasses">{{ label }}</span>
      <span v-if="labelProgress && labelPosition === 'outside'" class="text-sm font-medium" :class="outsideLabelClasses">{{ progress }}%</span>
    </div>
  </template>
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" :class="outerClasses">
    <div class="rounded-full font-medium text-blue-100 text-center p-0.5" :class="innerClasses" :style="{ width: progress + '%' }">
      <template v-if="labelProgress && labelPosition === 'inside'">
        {{ progress }}%
      </template>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useProgressClasses } from './composables/useProgressClasses'

const props = defineProps({
  color: {
    type: String, // 'default' | 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'
    default: 'default',
  },
  label: {
    type: String,
    default: '',
  },
  labelPosition: {
    type: String, // 'inside' | 'outside' | 'none'
    default: 'inside',
  },
  labelProgress: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Number,
    default: 0,
  },
  size: {
    type: String, // 'sm' | 'md' | 'lg' | 'xl'
    default: 'lg',
  },
})

const widthStyle = computed(() => "width:" + props.progress + "%")

const { innerClasses, outerClasses, outsideLabelClasses } = useProgressClasses(toRefs(props))

</script>
