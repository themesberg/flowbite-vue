<template>
  <div
    v-bind="rootAttrs()"
    :class="wrapperClasses"
    role="group"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue'

import type { ClassInput } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

// The child selectors reset each button's own `rounded-lg`, so they must be
// utilities: component CSS sits below utilities in the cascade (#467).
const defaultButtonGroupClasses = `fwb-button-group inline-flex rounded-md shadow-xs
  [&>button]:rounded-none [&>.fwb-dropdown_button]:rounded-none [&>.fwb-tooltip_button]:rounded-none
  [&>button:first-child]:rounded-l-lg [&>.fwb-dropdown:first-child_button]:rounded-l-lg [&>.fwb-tooltip:first-child_button]:rounded-l-lg
  [&>button:last-child]:rounded-r-lg [&>.fwb-dropdown:last-child_button]:rounded-r-lg [&>.fwb-tooltip:last-child_button]:rounded-r-lg`

// The root gets the merged class only. With inheritance on, Vue would also add
// the raw `class`, putting back classes the merge dropped.
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
// Called on every render, not cached in `computed`: listing the attrs isn't
// tracked, so a cached copy would miss attributes added after the first render.
const rootAttrs = () => Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== 'class'))

const wrapperClasses = computed(() => useMergeClasses([defaultButtonGroupClasses, attrs.class as ClassInput]))
</script>
