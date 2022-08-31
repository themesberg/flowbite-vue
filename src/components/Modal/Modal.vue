<template>
  <div>
    <slot name="trigger" :show="showModal" :hide="hideModal" :toggle="toggleModal"></slot>
    <div v-if="!isHidden" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
    <div v-if="!isHidden" id="defaultModal" tabindex="-1" :aria-hidden="isHidden ? 'true' : 'false'" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              <slot name="title"></slot>
            </h3>
            <button @click="hideModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <slot name="body" :show="showModal" :hide="hideModal" :toggle="toggleModal"></slot>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <slot name="footer"  :show="showModal" :hide="hideModal" :toggle="toggleModal"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  popup: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String, // 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right'
    default: 'center',
  },
  show: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String, // 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
    default: '2xl',
  },
})

const isHidden: Ref<boolean> = ref(!props.show)

function toggleModal() {
  isHidden.value = !isHidden.value
}
function hideModal() {
  isHidden.value = !isHidden.value
}
function showModal() {
  isHidden.value = !isHidden.value
}

</script>
