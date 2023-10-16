<template>
  <slot />
</template>

<script lang="ts" setup>
import type { FlowbiteTheme } from './types'
import { provide, toRef } from 'vue'
import { FLOWBITE_THEMABLE_INJECTION_KEY } from './injection/config'

interface IFlowbiteThemableProps {
  theme?: FlowbiteTheme,
}

const props = withDefaults(defineProps<IFlowbiteThemableProps>(), {
  theme: 'blue',
})

provide(FLOWBITE_THEMABLE_INJECTION_KEY, toRef(props, 'theme'))
</script>
