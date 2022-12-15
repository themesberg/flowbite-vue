<template>
  <div class="flex items-center">
    <!-- valid stars -->
    <svg
      v-for="valid_star_index in valid_star_number"
      :key="valid_star_index"
      class="text-yellow-400"
      :class="sizeClasses"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <!-- invalid stars -->
    <svg
      v-for="invalid_star_index in invalid_star_number"
      :key="invalid_star_index"
      class="text-gray-300 dark:text-gray-500"
      :class="sizeClasses"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <!-- text -->
    <slot name="besideText"></slot>
    <!-- review link -->
    <template v-if="(reviewText && reviewLink)">
      <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
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
import type { PropType } from 'vue'
import { useRatingClasses } from './composables/useRatingClasses'
import type { RatingSize } from './types'

const props = defineProps({
  size: {
    type: String as PropType<RatingSize>,
    default: 'sm',
  },
  rating: {
    type: Number,
    default: 3,
  },
  scale: {
    type: Number,
    default: 5,
  },
  reviewText: {
    type: String,
    default: '',
  },
  reviewLink: {
    type: String,
    default: '',
  },
})

const valid_star_number = computed(() => {
  return Math.floor(props.rating)
})

const invalid_star_number = computed(() => {
  return props.scale - valid_star_number.value
})

const { sizeClasses } = useRatingClasses(toRefs(props))

</script>
