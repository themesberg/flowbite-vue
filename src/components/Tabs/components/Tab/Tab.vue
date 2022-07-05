<template>
  <div>
    <template v-if="directive === 'if'">
      <div v-if="activeTab === name">
        <slot/>
      </div>
    </template>
    <template v-else-if="directive === 'show'">
      <div v-show="activeTab === name">
        <slot/>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { TAB_ACTIVE_NAME_INJECTION_KEY, TAB_VISIBILITY_DIRECTIVE_INJECTION_KEY } from '../../config'

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

<script lang="ts">
export default {
  __FLOWBITE_TAB__: true, // add this to easily find tab components from tabs
}
</script>