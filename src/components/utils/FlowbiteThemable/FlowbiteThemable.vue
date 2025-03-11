<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, toRef } from 'vue'

import { FLOWBITE_THEMABLE_INJECTION_KEY } from './injection/config'

import type { FlowbiteTheme } from './types'

interface IFlowbiteThemableProps {
  theme?: FlowbiteTheme
}

const props = withDefaults(defineProps<IFlowbiteThemableProps>(), {
  theme: 'blue',
})

provide(FLOWBITE_THEMABLE_INJECTION_KEY, toRef(props, 'theme'))
</script>
