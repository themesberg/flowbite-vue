<template>
  <div class="xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50">
    <TransitionGroup
      :duration="150"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      enter-active-class="transition duration-400 ease-out"
      leave-active-class="transition duration-400 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <template
        v-for="item in toasts"
        :key="item.id"
      >
        <component
          :is="getComponent(item)"
          v-bind="item.componentAttrs"
          @close="removeToast(item.id)"
        >
          {{ item.text }}
        </component>
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/components/FwbToast/composables/useToast'
import FwbToast from './FwbToast.vue'
import type { ToastItem } from '@/components/FwbToast/types'
const { toasts, removeToast } = useToast()

function getComponent (item: ToastItem) {
  if (!item.component) {
    return FwbToast
  }
  return item.component
}
</script>
