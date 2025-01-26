<template>
  <div class="flex items-center">
    <!-- valid stars -->
    <svg
      v-for="validStarIndex in validStarNumber"
      :key="validStarIndex"
      :class="sizeClasses"
      class="text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <!-- invalid stars -->
    <svg
      v-for="invalidStarIndex in invalidStarNumber"
      :key="invalidStarIndex"
      :class="sizeClasses"
      class="text-gray-300 dark:text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <!-- text -->
    <slot name="besideText" />
    <!-- review link -->
    <template v-if="(reviewText && reviewLink)">
      <span class="mx-1.5 size-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        :href="reviewLink"
        class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        {{ reviewText }}
      </a>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import { useRatingClasses } from './composables/useRatingClasses'

import type { RatingSize } from './types'

interface IRatingProps {
  rating?: number
  reviewLink?: string
  reviewText?: string
  scale?: number
  size?: RatingSize
}

const props = withDefaults(defineProps<IRatingProps>(), {
  rating: 3,
  reviewLink: '',
  reviewText: '',
  scale: 5,
  size: 'md',
})

const validStarNumber = computed(() => Math.floor(props.rating))
const invalidStarNumber = computed(() => props.scale - validStarNumber.value)

const { sizeClasses } = useRatingClasses(toRefs(props))
</script>
