<template>
  <div
    class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
    role="alert"
  >
    <div class="flex items-center mb-3">
      <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">{{ label }}</span>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
        aria-label="Close"
        @click="close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: undefined,
  },
)

const emit = defineEmits<{(e: 'close'): void }>()

function close () {
  emit('close')
}
</script>
