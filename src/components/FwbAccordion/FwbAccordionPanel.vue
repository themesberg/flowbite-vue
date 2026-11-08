<template>
  <div
    ref="panelRef"
    :data-panel-id="panelId"
    :class="accordionPanelClasses"
  >
    <slot v-if="isRegistered" />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, provide, reactive, ref, useId, watch } from 'vue'

import { useAccordionPanelClasses } from './composables/useAccordionPanelClasses'
import { ACCORDION_PANEL_KEY, ACCORDION_STATE_KEY } from './injection/config'

import type { AccordionPanel, AccordionPanelProps } from './types'

const props = withDefaults(
  defineProps<AccordionPanelProps>(), {
    activeClass: '',
  },
)

const panelRef = ref<HTMLDivElement>()
const panelId = useId()

const accordionState = inject(ACCORDION_STATE_KEY, null)
const panelState = reactive<AccordionPanel>({
  id: panelId,
  isVisible: false,
  order: -1,
})
provide(ACCORDION_PANEL_KEY, panelState)

const isRegistered = ref(false)

const accordionPanelClasses = computed(() =>
  useAccordionPanelClasses({
    isVisible: panelState.isVisible,
    props,
  }),
)

const emit = defineEmits<{
  show: []
  hide: []
}>()

watch(() => panelState.isVisible, (isVisible) => {
  if (isVisible) {
    emit('show')
  } else {
    emit('hide')
  }
})

onMounted(() => {
  if (!accordionState) return

  const panelIndex = panelRef.value && panelRef.value.parentElement
    ? Array.from(panelRef.value.parentElement.children).indexOf(panelRef.value)
    : -1

  panelState.order = panelIndex
  panelState.isVisible = !accordionState.collapsed && panelIndex === 0
  accordionState.panels.push(panelState)

  isRegistered.value = true
})
</script>
