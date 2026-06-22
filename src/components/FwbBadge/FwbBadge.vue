<template>
  <component
    :is="wrapperType"
    :class="badgeClasses"
    :href="href"
  >
    <slot name="icon" />
    <slot name="default" />
    <button
      v-if="dismissible"
      type="button"
      :class="dismissButtonClass"
      aria-label="Remove badge"
      @click="$emit('dismiss')"
    >
      <svg
        aria-hidden="true"
        class="h-2 w-2"
        fill="none"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
      <span class="sr-only">Remove badge</span>
    </button>
  </component>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { useBadgeClasses } from './composables/useBadgeClasses'

import type { BadgeSize, BadgeType } from './types'

interface IBadgeProps {
  type?: BadgeType
  size?: BadgeSize
  href?: string | null
  pill?: boolean
  border?: boolean
  dismissible?: boolean
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  type: 'default',
  size: 'xs',
  href: null,
  pill: false,
  border: false,
  dismissible: false,
})

defineEmits<{ dismiss: [] }>()

const slots = useSlots()
const isContentEmpty = computed(() => !slots.default)
const wrapperType = computed(() => (props.href ? 'a' : 'span'))

const { badgeClasses, dismissButtonClass } = useBadgeClasses(props, { isContentEmpty })
</script>
