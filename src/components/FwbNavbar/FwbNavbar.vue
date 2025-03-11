<template>
  <nav :class="navbarClasses">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <slot name="logo" />
      <button
        aria-controls="navbar-default"
        aria-expanded="false"
        class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        type="button"
        @click="toggleMobileMenu()"
      >
        <span class="sr-only">Open main menu</span>
        <slot name="menu-icon">
          <svg
            aria-hidden="true"
            class="size-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            clip-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            fill-rule="evenodd"
          /></svg>
        </slot>
      </button>
      <slot
        :is-show-menu="isShowMenu"
        name="default"
      />
      <div
        v-if="slots['right-side']"
        class="hidden md:order-2 md:flex"
      >
        <slot name="right-side" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints, useToggle } from '@vueuse/core'
import { computed, ref, useSlots } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
})

const slots = useSlots()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
const isShowMenuOnMobile = ref(false)
const toggleMobileMenu = useToggle(isShowMenuOnMobile)
const navbarBaseClasses = ' border-gray-200'
const navbarFloatClasses = 'fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
const navbarRoundedClasses = 'rounded'
const navbarSolidClasses = 'p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
const navbarWhiteClasses = 'bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900'

const navbarClasses = computed(() => useMergeClasses(
  [
    navbarBaseClasses,
    props.sticky ? navbarFloatClasses : '',
    props.rounded ? navbarRoundedClasses : '',
    props.solid ? navbarSolidClasses : navbarWhiteClasses,
    props.class,
  ].join(' '),
))

const isShowMenu = computed(() => (!isMobile)
  ? true
  : isShowMenuOnMobile.value,
)
</script>
