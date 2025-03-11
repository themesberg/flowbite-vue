<template>
  <div
    ref="dropdownWrapper"
    :class="wrapperClasses"
  >
    <div :class="triggerWrapperClasses">
      <fwb-slot-listener @click="onToggle">
        <slot name="trigger">
          <fwb-button
            :aria-expanded="isContentVisible"
            :class="[placement === 'left' ? ['flex-row-reverse', 'pl-2'] : '', triggerClass]"
            :color="color"
            :disabled="disabled"
            aria-haspopup="true"
            role="button"
          >
            {{ text }}
            <template #suffix>
              <svg
                :class="triggerSuffixClass"
                class="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </template>
          </fwb-button>
        </slot>
      </fwb-slot-listener>
    </div>
    <transition :name="transitionName">
      <div
        v-if="isContentVisible"
        ref="contentWrapper"
        :class="contentWrapperClasses"
        :style="contentStyles"
      >
        <fwb-slot-listener @click="onHide">
          <slot />
        </fwb-slot-listener>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

import { useDropdownClasses } from './composables/useDropdownClasses'

import type { DropdownPlacement } from './types'
import type { ButtonVariant } from '@/components/FwbButton/types'

import FwbButton from '@/components/FwbButton/FwbButton.vue'
import FwbSlotListener from '@/components/utils/FwbSlotListener/FwbSlotListener.vue'

export interface DropdownProps {
  alignToEnd?: boolean
  class?: string
  closeInside?: boolean
  color?: ButtonVariant
  contentWrapperClass?: string
  disabled?: boolean
  placement?: DropdownPlacement
  text?: string
  transition?: string
  triggerClass?: string
  triggerWrapperClass?: string
}

const props = withDefaults(
  defineProps<DropdownProps>(),
  {
    alignToEnd: false,
    class: '',
    closeInside: false,
    color: 'default',
    contentWrapperClass: '',
    disabled: false,
    placement: 'bottom',
    text: 'Dropdown',
    transition: '',
    triggerClass: '',
    triggerWrapperClass: '',
  },
)

const dropdownWrapper = ref<HTMLDivElement>()
const contentWrapper = ref<HTMLDivElement>()
const isContentVisible = ref(false)

const onToggle = () => (isContentVisible.value = !isContentVisible.value)
const onHide = () => props.closeInside && (isContentVisible.value = false)

onClickOutside(dropdownWrapper, () =>
  isContentVisible.value && (isContentVisible.value = false),
)

const emit = defineEmits<{
  show: []
  hide: []
}>()

watch(isContentVisible, () => {
  if (isContentVisible.value) {
    emit('show')
  } else {
    emit('hide')
  }
})

const placementTransitionMap: Record<DropdownPlacement, string> = {
  bottom: 'to-bottom',
  left: 'to-left',
  right: 'to-right',
  top: 'to-top',
}

const transitionName = computed(() =>
  (!props.transition)
    ? placementTransitionMap[props.placement]
    : props.transition,
)

const {
  contentStyles,
  contentWrapperClasses,
  triggerSuffixClass,
  triggerWrapperClasses,
  wrapperClasses,
} = useDropdownClasses({ contentWrapper, isContentVisible, props })

</script>

<style>
.fwb-dropdown {
  /* transitions */
  .to-bottom-enter-active,
  .to-bottom-leave-active,
  .to-left-enter-active,
  .to-left-leave-active,
  .to-right-enter-active,
  .to-right-leave-active,
  .to-top-enter-active,
  .to-top-leave-active {
    transition: all 250ms;
  }

  /* to top */
  .to-top-enter-active,
  .to-top-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  .to-top-leave,
  .to-top-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  /* to right */
  .to-right-enter-active,
  .to-right-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }

  .to-right-leave,
  .to-right-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  /* to bottom */
  .to-bottom-enter-active,
  .to-bottom-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .to-bottom-leave,
  .to-bottom-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  /* to left */
  .to-left-enter-active,
  .to-left-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }

  .to-left-leave,
  .to-left-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
