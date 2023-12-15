<template>
  <div class="overflow-hidden">
    <button
      type="button"
      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 z-10"
      aria-controls="dropdown-content"
      @click="toggleDropdown"
    >
      <slot name="icon">
        <svg
          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path
            d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
          />
        </svg>
      </slot>
      <span class="flex-1 ml-3 text-left whitespace-nowrap">
        <slot name="trigger" />
      </span>
      <slot
        name="arrow-icon"
        :toggle-dropdown="toggleDropdown"
      >
        <svg
          class="w-3 h-3 transition-all duration-300"
          :class="isOpen && 'rotate-180'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </slot>
    </button>

    <div class="py-2 space-y-2 z-0 overflow-hidden">
      <transition
        :duration="150"
        enter-from-class="-translate-y-full"
        enter-to-class="translate-y-0"
        enter-active-class="transition duration-400 ease-out"
        leave-active-class="transition duration-400 ease-in"
        leave-from-class="translate-y-0"
        leave-to-class="-translate-y-full"
      >
        <div v-if="isOpen">
          <slot name="default" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
function toggleDropdown () {
  isOpen.value = !isOpen.value
}
</script>
