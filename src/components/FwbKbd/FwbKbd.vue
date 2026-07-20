<template>
  <kbd :class="kbdClasses">
    <slot name="icon" />
    <slot name="default" />
  </kbd>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import { useKbdClasses } from './composables/useKbdClasses'

const slots = useSlots()
const hasIcon = computed(() => !!slots.icon)

const { kbdClasses } = useKbdClasses({ hasIcon })
</script>
