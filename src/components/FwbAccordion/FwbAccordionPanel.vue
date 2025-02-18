<template>
  <div
    ref="panelRef"
    :data-panel-id="panelId"
    :class="accordionPanelClasses"
  >
    <slot v-if="accordionId" />
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { computed, onMounted, type Ref, ref, watch } from 'vue'

import { useAccordionPanelClasses } from './composables/useAccordionPanelClasses'

import type { AccordionPanelProps, AccordionState } from '@/components/FwbAccordion/types'

import { useAccordionState } from '@/components/FwbAccordion/composables/useAccordionState'

const props = withDefaults(
  defineProps<AccordionPanelProps>(), {
    activeClass: '',
  },
)

const {
  getAccordionState,
  getAccordionPanelState,
} = useAccordionState()

const panelRef = ref<HTMLDivElement>()
const panelId = nanoid()

const accordionId = ref()
const accordionState = ref()
const accordionPanelState = computed(() =>
  (accordionState.value)
    ? getAccordionPanelState({ accordionState: accordionState as Ref<AccordionState>, panelId })
    : null,
)
const accordionPanelClasses = computed(() =>
  useAccordionPanelClasses({
    isVisible: accordionPanelState.value?.isVisible ?? false,
    props,
  }),
)

const isPanelVisible = computed(() => accordionPanelState.value?.isVisible)

const emit = defineEmits<{
  show: []
  hide: []
}>()

watch(isPanelVisible, () => {
  if (isPanelVisible.value) {
    emit('show')
  } else {
    emit('hide')
  }
})

onMounted(() => {
  accordionState.value = getAccordionState({ element: panelRef })

  accordionId.value = accordionState.value.id

  const panelIndex = panelRef.value && panelRef.value.parentElement
    ? Array.from(panelRef.value.parentElement.children).indexOf(panelRef.value)
    : -1

  accordionState.value.panels.push({
    id: panelId,
    isVisible: (!accordionState.value.collapsed && panelIndex === 0) ?? false,
    order: panelIndex,
  })
})
</script>
