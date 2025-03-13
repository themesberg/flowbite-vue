<template>
  <nav aria-label="Navigation">
    <div
      v-if="layout === 'table'"
      class="mb-2 text-gray-700 dark:text-gray-400"
      :class="large ? 'text-base' : 'text-sm'"
    >
      Showing
      <span class="font-semibold text-gray-900 dark:text-white">{{ startItemsCount }}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{{ endItemsCount }}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{{ computedTotalItems }}</span>
    </div>
    <div
      class="inline-flex"
      :class="large && 'text-base h-10'"
    >
      <slot name="start" />

      <slot
        v-if="enableFirstLast"
        name="first-button"
      >
        <button
          :disabled="isFirstPage"
          :class="getNavigationButtonClasses(1)"
          @click="goToFirstPage"
        >
          <slot name="first-icon">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m17 14-4-4 4-4m-6 8-4-4 4-4"
              />
            </svg>
          </slot>
          <template v-if="!hideLabels">
            {{ firstLabel }}
          </template>
        </button>
      </slot>

      <slot
        name="prev-button"
        :disabled="isDecreaseDisabled"
        :decrease-page="decreasePage"
      >
        <button
          :disabled="isDecreaseDisabled"
          :class="getNavigationButtonClasses(modelValue - 1)"
          @click="decreasePage"
        >
          <slot name="prev-icon">
            <svg
              v-if="showIcons || $slots['prev-icon']"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </slot>
          <template v-if="!hideLabels">
            {{ previousLabel }}
          </template>
        </button>
      </slot>
      <slot
        v-for="index in pagesToDisplay"
        :key="index"
        name="page-button"
        :page="index"
        :set-page="setPage"
        :disabled="isSetPageDisabled(index)"
      >
        <button
          :disabled="isSetPageDisabled(index)"
          :class="getPageButtonClasses(index === modelValue)"
          @click="setPage(index)"
        >
          {{ index }}
        </button>
      </slot>
      <slot
        name="next-button"
        :disabled="isIncreaseDisabled"
        :increase-page="increasePage"
      >
        <button
          :disabled="isIncreaseDisabled"
          :class="getNavigationButtonClasses(modelValue + 1)"
          @click="increasePage"
        >
          <template v-if="!hideLabels">
            {{ nextLabel }}
          </template>
          <slot name="next-icon">
            <svg
              v-if="showIcons || $slots['next-icon']"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </slot>
        </button>
      </slot>

      <slot
        v-if="enableFirstLast"
        name="last-button"
      >
        <button
          :disabled="isLastPage"
          :class="getNavigationButtonClasses(computedTotalPages)"
          @click="goToLastPage"
        >
          <template v-if="!hideLabels">
            {{ lastLabel }}
          </template>
          <slot name="last-icon">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 14 4-4-4-4m6 8 4-4-4-4"
              />
            </svg>
          </slot>
        </button>
      </slot>

      <slot name="end" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import type { PaginationLayout } from './types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const emit = defineEmits<{
  'update:model-value': [page: number]
  'page-changed': [page: number]
}>()
interface IPaginationProps {
  modelValue?: number
  totalPages?: number
  perPage?: number
  totalItems?: number
  layout?: PaginationLayout
  showIcons?: boolean
  sliceLength?: number
  previousLabel?: string
  nextLabel?: string
  firstLabel?: string
  lastLabel?: string
  enableFirstLast?: boolean
  hideLabels?: boolean
  large?: boolean
}

const props = withDefaults(defineProps<IPaginationProps>(), {
  modelValue: 1,
  totalPages: undefined,
  perPage: 10,
  totalItems: 10,
  layout: 'pagination',
  showIcons: false,
  sliceLength: 2,
  previousLabel: 'Prev',
  nextLabel: 'Next',
  firstLabel: 'First',
  lastLabel: 'Last',
  enableFirstLast: false,
  hideLabels: false,
  large: false,
})
defineSlots<{
  'start': any
  'first-icon': any
  'first-button': any
  'prev-icon': any
  'prev-button': any
  'page-button': any
  'next-button': any
  'next-icon': any
  'last-button': any
  'last-icon': any
  'end': any
}>()
function setPage (index: number) {
  emit('update:model-value', index)
  emit('page-changed', index)
}
function decreasePage () {
  emit('update:model-value', props.modelValue - 1)
  emit('page-changed', props.modelValue - 1)
}
function increasePage () {
  emit('update:model-value', props.modelValue + 1)
  emit('page-changed', props.modelValue + 1)
}
function goToFirstPage () {
  emit('update:model-value', 1)
  emit('page-changed', 1)
}
function goToLastPage () {
  const lastPage = computedTotalPages.value
  emit('update:model-value', lastPage)
  emit('page-changed', lastPage)
}

const computedTotalPages = computed(() => props.totalPages ? props.totalPages : Math.ceil(props.totalItems / props.perPage))
const isDecreaseDisabled = computed(() => props.modelValue <= 1)
const isIncreaseDisabled = computed(() => props.modelValue >= computedTotalPages.value)

const isSetPageDisabled = (index: number) => index === props.modelValue

const pagesToDisplay = computed(() => {
  if (props.layout === 'navigation') return []
  if (props.layout === 'table') return []

  if (computedTotalPages.value <= props.sliceLength * 2 + 1) {
    const pages: number[] = []
    for (let page = 1; page <= computedTotalPages.value; page++) {
      pages.push(page)
    }
    return pages
  }
  if (props.modelValue <= props.sliceLength) {
    const pages: number[] = []
    const slicedLength = Math.abs(props.modelValue - props.sliceLength) + props.modelValue + props.sliceLength + 1
    for (let page = 1; page <= slicedLength; page++) {
      pages.push(page)
    }
    return pages
  }
  if (props.modelValue >= computedTotalPages.value - props.sliceLength) {
    const pages: number[] = []
    for (let page = Math.abs(computedTotalPages.value - props.sliceLength * 2); page <= computedTotalPages.value; page++) {
      pages.push(page)
    }
    return pages
  }

  const pages: number[] = []
  const startedPage = props.modelValue - props.sliceLength > 0 ? props.modelValue - props.sliceLength : 1
  for (let page = startedPage; page < props.modelValue + props.sliceLength + 1; page++) {
    if (page >= computedTotalPages.value) break
    pages.push(page)
  }
  return pages
})

const startItemsCount = computed(() => props.modelValue * props.perPage - props.perPage + 1)
const endItemsCount = computed(() => {
  const count = props.modelValue * props.perPage
  if (!props.totalItems) return count
  if (count > props.totalItems) return props.totalItems
  return count
})
const computedTotalItems = computed(() => {
  if (props.totalItems) return props.totalItems
  return computedTotalPages.value * props.perPage
})

const isFirstPage = computed(() => props.modelValue === 1)
const isLastPage = computed(() => props.modelValue === computedTotalPages.value)

const pageButtonClasses = 'flex h-8 items-center justify-center border border-r-0 border-gray-300 bg-white px-3 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
const navigationButtonClasses = 'ml-0 flex h-8 items-center justify-center gap-1 border border-gray-300 bg-white px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
const tableLayoutClasses = 'rounded-none border-none bg-gray-800 text-white first:rounded-l last:rounded-r hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'

const activeClasses = 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'
const disabledClasses = 'disabled:cursor-not-allowed disabled:opacity-50'
const largeClasses = 'h-10 px-4'

const getPageButtonClasses = (active: boolean) =>
  useMergeClasses(
    [
      pageButtonClasses,
      active ? activeClasses : '',
      props.large ? largeClasses : '',
    ],
  )

const getNavigationButtonClasses = (toPage: number) =>
  useMergeClasses(
    [
      navigationButtonClasses,
      props.layout === 'table' ? tableLayoutClasses : '',
      props.layout === 'navigation' ? '[&:not(:last-child)]:mr-3 rounded-lg' : '[&:not(:last-child)]:border-r-0',
      (toPage === props.modelValue || toPage > computedTotalPages.value || toPage < 1) ? disabledClasses : '',
      props.large ? largeClasses : '',
    ],
  )
</script>
