<template>
  <div>
    <div class="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80" />
    <div
      ref="modalRef"
      class="fixed inset-x-0 top-0 z-50 grid h-modal w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      tabindex="0"
      @click.self="clickOutside"
      @keyup.esc="closeWithEsc"
    >
      <div
        :class="`${modalSizeClasses[size]} ${modalPositionClasses[position]}`"
        class="relative w-full p-4"
      >
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            :class="$slots.header ? 'border-b border-gray-200 dark:border-gray-600' : ''"
            class="flex items-center justify-between rounded-t p-4"
          >
            <slot name="header" />
            <button
              v-if="!persistent"
              aria-label="close"
              class="ms-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
              @click="closeModal"
            >
              <slot name="close-icon">
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"
                /></svg>
              </slot>
            </button>
          </div>
          <!-- Modal body -->
          <div
            :class="$slots.header ? '' : 'pt-0'"
            class="p-6"
          >
            <slot name="body" />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            class="rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'

import type { ModalPosition, ModalSize } from './types'

interface ModalProps {
  notEscapable?: boolean
  persistent?: boolean
  size?: ModalSize
  position?: ModalPosition
}

const props = withDefaults(defineProps<ModalProps>(), {
  notEscapable: false,
  persistent: false,
  size: '2xl',
  position: 'center',
})

const emit = defineEmits(['close', 'click:outside'])
const modalSizeClasses: Record<ModalSize, string> = {
  'xs': 'max-w-xs',
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

const modalPositionClasses: Record<ModalPosition, string> = {
  'top-start': 'self-start justify-self-start',
  'top-center': 'self-start justify-self-center',
  'top-end': 'self-start justify-self-end',
  'center-start': 'self-center justify-self-start',
  'center': 'self-center justify-self-center',
  'center-end': 'self-center justify-self-end',
  'bottom-start': 'self-end justify-self-start',
  'bottom-center': 'self-end justify-self-center',
  'bottom-end': 'self-end justify-self-end',
}

function closeModal () {
  emit('close')
}
function clickOutside () {
  if (!props.persistent) {
    emit('click:outside')
    closeModal()
  }
}

function closeWithEsc () {
  if (!props.notEscapable && !props.persistent) closeModal()
}
const modalRef: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus()
  }
})
</script>
