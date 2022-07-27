<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import type { FlowbiteTheme } from './types'
import { provide, toRef } from 'vue'
import { FLOWBITE_THEMABLE_INJECTION_KEY } from './injection/config'

const props = defineProps({
  theme: {
    type: String as PropType<FlowbiteTheme>,
    required: true,
  },
})

provide(FLOWBITE_THEMABLE_INJECTION_KEY, toRef(props, 'theme'))
</script>
