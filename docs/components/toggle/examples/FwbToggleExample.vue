<template>
  <div class="vp-raw">
    <fwb-toggle
      v-model="toggle"
      label="Toggle me"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
