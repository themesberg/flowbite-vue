<template>
  <div>
    <div :class="overlayClass" />
    <div
      ref="modalRef"
      class="top-0 z-50 fixed inset-x-0 md:inset-0 grid w-full h-modal md:h-full overflow-x-hidden overflow-y-auto"
      tabindex="0"
      @click.self="clickOutside"
      @keyup.esc="closeWithEsc"
    >
      <div :class="layoutClass">
        <!-- Modal wrapper -->
        <div :class="wrapperClass">
          <!-- Modal header -->
          <div :class="headerClass">
            <slot name="header" />
            <button
              v-if="!persistent"
              aria-label="close"
              class="inline-flex items-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 ms-auto p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm"
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
          <div :class="bodyClass">
            <slot name="body" />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            :class="footerClass"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, onBeforeUnmount, onMounted, type Ref, ref, toRefs, useSlots } from 'vue'

import { useModalClasses } from './composables/useModalClasses'

import type { ModalPosition, ModalSize } from './types'

interface ModalProps {
  notEscapable?: boolean
  persistent?: boolean
  size?: ModalSize
  position?: ModalPosition
  focusTrap?: boolean
  bodyClass?: string | Record<string, boolean>
  wrapperClass?: string | Record<string, boolean>
  overlayClass?: string | Record<string, boolean>
  headerClass?: string | Record<string, boolean>
  footerClass?: string | Record<string, boolean>
}

const props = withDefaults(defineProps<ModalProps>(), {
  bodyClass: '',
  focusTrap: false,
  footerClass: '',
  headerClass: '',
  notEscapable: false,
  overlayClass: '',
  persistent: false,
  position: 'center',
  size: '2xl',
  wrapperClass: '',
})

const $slots = useSlots()

const emit = defineEmits(['close', 'click:outside'])

const isHeaderSlotProvided = ref(!!($slots.header))

const {
  bodyClass,
  footerClass,
  headerClass,
  layoutClass,
  overlayClass,
  wrapperClass,
} = useModalClasses({ ...toRefs(props), isHeaderSlotProvided })

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
const { activate, deactivate } = useFocusTrap(modalRef, {
  immediate: false,
  initialFocus: () => modalRef.value?.querySelector('button[aria-label="close"]') || modalRef.value,
  escapeDeactivates: false,
})

onMounted(async () => {
  if (modalRef.value) {
    if (props.focusTrap) {
      await nextTick()
      activate()
    }
  }
})

onBeforeUnmount(() => {
  deactivate()
})
</script>
