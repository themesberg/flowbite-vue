<template>
  <template v-if="directive === 'if'">
    <div
      v-if="activeTab === name"
      :id="`panel-${name}`"
      role="tabpanel"
      :aria-labelledby="`tab-${name}`"
      tabindex="0"
    >
      <slot />
    </div>
  </template>
  <template v-else-if="directive === 'show'">
    <div
      v-show="activeTab === name"
      :id="`panel-${name}`"
      role="tabpanel"
      :aria-labelledby="`tab-${name}`"
      :tabindex="activeTab === name ? 0 : -1"
    >
      <slot />
    </div>
  </template>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'

import {
  TAB_ACTIVE_NAME_KEY,
  TAB_DIRECTIVE_KEY,
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

const activeTab = inject(TAB_ACTIVE_NAME_KEY, ref(''))
const directive = inject(TAB_DIRECTIVE_KEY, ref<'if' | 'show'>('if'))
</script>
