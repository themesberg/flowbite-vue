<template>
  <div class="flex gap-2 vp-raw">
    <fwb-radio
      v-model="picked"
      label="Inline 1"
      name="inline-radio"
      value="first"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 2"
      name="inline-radio"
      value="second"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 3"
      name="inline-radio"
      value="third"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 4"
      name="inline-radio"
      value="fourth"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio } from '../../../../src/index'

const picked = ref('first')
</script>
