<template>
  <div>
    <template v-for="(item, i) in formattedItems" :key="item.id">
      <h2>
        <button
          type="button"
          :class="[
            { 'rounded-t-xl border-b-0': i === 0 },
            headerClasses
          ]"
          class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="toggleItem(item)"
        >
          <span>{{item.header}}</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            :class="{'rotate-180': item.isVisible}"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
          </svg>
        </button>
      </h2>
      <div
        :class="[ { hidden: !item.isVisible }, contentClasses ]"
        class="p-5 border [&:not(:last-item)]:border-b-0 last:border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
      >
        <slot />
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'
import { nanoid } from 'nanoid'
import type { AccordionItem, AccordionTransformedItem } from '@/components/Accordion/types'

const props = defineProps({
  alwaysOpen: {
    type: Boolean,
    default: false,
  },
  headerClasses: {
    type: String,
    default: '',
  },
  contentClasses: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<AccordionItem[]>,
    default() {
      return []
    },
  },
  flush: {
    type: Boolean,
    default: false,
  },
})

const formattedItems = ref<AccordionTransformedItem[]>(props.items.map((item, i) => ({ ...item, id: nanoid(), isVisible: i === 0 })))

const commonToggleItem = (selectedItem: AccordionTransformedItem) => {
  const isSelectedVisible = selectedItem.isVisible
  formattedItems.value = formattedItems.value.map((item) => {
    if (item.id !== selectedItem.id) return { ...item, isVisible: false }
    return { ...item, isVisible: !isSelectedVisible }
  })
}
const alwaysOpenToggleItem = (selectedItem: AccordionTransformedItem) => {
  selectedItem.isVisible = !selectedItem.isVisible
}
const flushToggleItem = (selectedItem: AccordionTransformedItem) => {
  const isSelectedVisible = selectedItem.isVisible
  if (isSelectedVisible) return
  commonToggleItem(selectedItem)
}
const toggleItem = (selectedItem: AccordionTransformedItem) => {
  if (props.alwaysOpen) return alwaysOpenToggleItem(selectedItem)
  if (props.flush) return flushToggleItem(selectedItem)
  commonToggleItem(selectedItem)
}
</script>
