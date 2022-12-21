<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li>
        <button
          :disabled="isDecreaseDisabled"
          @click="decreasePage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>
      <li
        v-for="index in filteredPages"
        :key="index"
      >
        <button
            :disabled="isSetPageDisabled(index)"
            @click="setPage(index)"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{'text-blue-600 dark:text-white bg-blue-50 dark:bg-gray-700': index === modelValue}"
        >
          {{ index }}
        </button>
      </li>
      <li>
        <button
          :disabled="isIncreaseDisabled"
          @click="increasePage"
          class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { PaginationLayout } from '@/components/Pagination/types'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 10,
  },
  layout: {
    type: String as PropType<PaginationLayout>, // 'navigation' | 'pagination' | 'table'
    default: 'pagination',
  },
  showIcons: {
    type: Boolean,
    default: false,
  },
  sliceLength: {
    type: Number,
    default: 3,
  },
})


const setPage = (index: number) => {
  emit('update:modelValue', index)
}
const decreasePage = () => {
  emit('update:modelValue', props.modelValue - 1)
}
const increasePage = () => {
  emit('update:modelValue', props.modelValue + 1)
}

const isDecreaseDisabled = computed(() => props.modelValue <= 1)
const isIncreaseDisabled = computed(() => props.modelValue >= props.totalPages)
const isSetPageDisabled = (index: number) => index === props.modelValue

const filteredPages = computed(() => {
  if (props.modelValue <= props.sliceLength) return [...Array(Math.abs(props.modelValue - props.sliceLength) + props.modelValue + props.sliceLength + 1).keys()].map(num => num + 1)

  const pages = []

  let startedPage = props.modelValue - props.sliceLength > 0 ? props.modelValue - props.sliceLength : 1
  for (let page = startedPage; page < props.modelValue + props.sliceLength + 1; page++) {
    pages.push(page)
  }
  return pages
})
</script>
