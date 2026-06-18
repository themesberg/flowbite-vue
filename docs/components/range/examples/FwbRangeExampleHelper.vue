<template>
  <div class="vp-raw">
    <fwb-range
      v-model.number="value"
      label="Brightness"
    >
      <template #helper>
        Adjust screen brightness between 0 and 100.
      </template>
    </fwb-range>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRange } from '../../../../src/index'

const value = ref(50)
</script>
