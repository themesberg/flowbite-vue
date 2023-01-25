<template>
  <nav aria-label="Page navigation example">
    <div class="text-sm text-gray-700 dark:text-gray-400 mb-2" v-if="layout === 'table'">
      Showing
      <span class="font-semibold text-gray-900 dark:text-white">{{ startItemsCount }}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{{ endItemsCount }}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{{ computedTotalItems }}</span>
    </div>
    <ul class="inline-flex -space-x-px">
      <li>
        <button
          :disabled="isDecreaseDisabled"
          @click="decreasePage"
          class="flex items-center py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg v-if="showIcons" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          {{ previousLabel }}
        </button>
      </li>
      <li
        v-for="index in pagesToDisplay"
        :key="index"
      >
        <button
            :disabled="isSetPageDisabled(index)"
            @click="setPage(index)"
            class="w-12 py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{'text-blue-600 dark:text-white bg-blue-50 dark:bg-gray-700': index === modelValue}"
        >
          {{ index }}
        </button>
      </li>
      <li>
        <button
          :disabled="isIncreaseDisabled"
          @click="increasePage"
          class="flex items-center py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {{ nextLabel }}
          <svg v-if="showIcons" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
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
    default: 1,
  },
  perPage: {
    type: Number,
    default: 10,
  },
  totalItems: {
    type: Number,
    required: false,
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
    default: 2,
  },
  previousLabel: {
    type: String,
    default: 'Previous',
  },
  nextLabel: {
    type: String,
    default: 'Next',
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

const computedTotalPages = computed(() => {
  if (!props.totalItems) return props.totalPages
  if (!props.perPage) return props.totalPages
  return Math.ceil(props.totalItems / props.perPage)
})

const isDecreaseDisabled = computed(() => props.modelValue <= 1)
const isIncreaseDisabled = computed(() => props.modelValue >= computedTotalPages.value)
const isSetPageDisabled = (index: number) => index === props.modelValue

const pagesToDisplay = computed(() => {
  if (props.layout === 'navigation') return []
  if (props.layout === 'table') return []

  if (computedTotalPages.value <= props.sliceLength * 2 + 1) {
    const pages = []
    for (let page = 1; page <= computedTotalPages.value; page++) {
      pages.push(page)
    }
    return pages
  }
  if (props.modelValue <= props.sliceLength) {
    const pages = []
    const slicedLength = Math.abs(props.modelValue - props.sliceLength) + props.modelValue + props.sliceLength + 1
    for (let page = 1; page <= slicedLength; page++) {
      pages.push(page)
    }
    return pages
  }
  if (props.modelValue >= computedTotalPages.value - props.sliceLength) {
    const pages = []
    for (let page = Math.abs(computedTotalPages.value - props.sliceLength * 2); page <= computedTotalPages.value; page++) {
      pages.push(page)
    }
    return pages
  }

  const pages = []
  let startedPage = props.modelValue - props.sliceLength > 0 ? props.modelValue - props.sliceLength : 1
  for (let page = startedPage; page < props.modelValue + props.sliceLength + 1; page++) {
    if (page >= computedTotalPages.value) break
    pages.push(page)
  }
  return pages
})


const startItemsCount = computed(() => props.modelValue * props.perPage - props.perPage + 1)
const endItemsCount = computed(() => {
  const count = props.modelValue * props.perPage + 1
  if (!props.totalItems) return count
  if (count > props.totalItems) return props.totalItems
  return count
})
const computedTotalItems = computed(() => {
  if (props.totalItems) return props.totalItems
  return computedTotalPages.value * props.perPage
})
</script>
