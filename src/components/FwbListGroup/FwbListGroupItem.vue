<template>
  <li :class="itemClasses">
    <div
      v-if="$slots.prefix"
      class="mr-2"
    >
      <slot name="prefix" />
    </div>
    <slot />
    <div
      v-if="$slots.suffix"
      class="ml-2"
    >
      <slot name="suffix" />
    </div>
  </li>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useListGroupItemClasses } from './composables/useListGroupItemClasses'

const props = defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const { itemClasses } = useListGroupItemClasses(toRefs(props))
</script>
