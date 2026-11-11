<template>
  <div
    :class="wrapperClasses"
    role="group"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

// The child selectors reset each button's own `rounded-lg`, so they must be
// utilities: component CSS sits below utilities in the cascade (#467).
const defaultButtonGroupClasses = `fwb-button-group inline-flex rounded-md shadow-xs
  [&>button]:rounded-none [&>.fwb-dropdown_button]:rounded-none [&>.fwb-tooltip_button]:rounded-none
  [&>button:first-child]:rounded-l-lg [&>.fwb-dropdown:first-child_button]:rounded-l-lg [&>.fwb-tooltip:first-child_button]:rounded-l-lg
  [&>button:last-child]:rounded-r-lg [&>.fwb-dropdown:last-child_button]:rounded-r-lg [&>.fwb-tooltip:last-child_button]:rounded-r-lg`

const attrs = useAttrs()

const wrapperClasses = computed(() => useMergeClasses([defaultButtonGroupClasses, attrs.class as string]))
</script>
