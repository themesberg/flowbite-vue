<template>
  <div class="gap-2 grid vp-raw">
    <fwb-input
      v-model="value"
      label="Readonly input"
      placeholder="This value cannot be changed"
      readonly
    />
    <fwb-input
      v-model="value"
      disabled
      label="Disabled + readonly input"
      placeholder="This value cannot be changed"
      readonly
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const value = ref('A pre-filled value')
</script>
