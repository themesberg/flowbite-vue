<template>
  <li :class="itemClasses">
    <div class="mr-2" v-if="$slots.prefix">
      <slot name="prefix" />
    </div>
    <slot />
    <div class="ml-2" v-if="$slots.suffix">
      <slot name="suffix" />
    </div>
  </li>
</template>
<script lang="ts" setup>
import {
  useListGroupItemClasses,
} from './composables/useListGroupItemClasses'
import { toRefs } from 'vue'

const props = defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const { itemClasses } = useListGroupItemClasses(toRefs(props))
</script>
