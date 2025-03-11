<template>
  <template v-if="directive === 'if'">
    <div v-if="activeTab === name">
      <slot />
    </div>
  </template>
  <template v-else-if="directive === 'show'">
    <div v-show="activeTab === name">
      <slot />
    </div>
  </template>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import {
  TAB_ACTIVE_NAME_INJECTION_KEY,
  TAB_VISIBILITY_DIRECTIVE_INJECTION_KEY,
} from './injection/config'

defineOptions({
  __FLOWBITE_TAB__: true, // add this to easily find tab components from tabs
})

defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const activeTab = inject(TAB_ACTIVE_NAME_INJECTION_KEY, '')
const directive = inject(TAB_VISIBILITY_DIRECTIVE_INJECTION_KEY, 'if')
</script>
