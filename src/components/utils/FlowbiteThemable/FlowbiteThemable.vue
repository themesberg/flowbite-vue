<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, toRef } from 'vue'
import type { FlowbiteTheme } from './types'
import { FLOWBITE_THEMABLE_INJECTION_KEY } from './injection/config'

interface IFlowbiteThemableProps {
  theme?: FlowbiteTheme,
}

const props = withDefaults(defineProps<IFlowbiteThemableProps>(), {
  theme: 'blue',
})

provide(FLOWBITE_THEMABLE_INJECTION_KEY, toRef(props, 'theme'))
</script>
