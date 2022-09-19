<template>
  <div>
    <slot name="trigger" :show="showModal" :hide="hideModal" :toggle="toggleModal"></slot>
    <div v-if="!isHidden" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
    <div v-if="!isHidden" tabindex="-1" :aria-hidden="isHidden ? 'true' : 'false'"
         class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
      <div class="relative p-4 w-full h-full md:h-auto"
           :class="`${modalSizeClasses[size]}`">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="p-4 rounded-t"
               :class="$slots.header ? 'border-b' : ''">
            <slot name="header" :show="showModal" :hide="hideModal" :toggle="toggleModal"></slot>
          </div>
          <!-- Modal body -->
          <div class="p-6" :class="$slots.header ? '' : 'pt-0'">
            <slot name="body" :show="showModal" :hide="hideModal" :toggle="toggleModal"></slot>
          </div>
          <!-- Modal footer -->
          <div v-if="$slots.footer" class="p-6 rounded-b border-gray-200">
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

const modalSizeClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

const isHidden: Ref<boolean> = ref(!props.show)

function toggleModal() {
  isHidden.value = !isHidden.value
}
function hideModal() {
  isHidden.value = true
}
function showModal() {
  isHidden.value = false
}

</script>
