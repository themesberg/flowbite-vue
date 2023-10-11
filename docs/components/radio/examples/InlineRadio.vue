<template>
  <div class="flex w-96 vp-raw">
    <fwb-radio
      v-model="picked"
      value="first"
      label="Inline 1"
    />
    <fwb-radio
      v-model="picked"
      value="sec"
      label="Inline 2"
    />
    <fwb-radio
      v-model="picked"
      value="third"
      label="Inline 3"
    />
    <fwb-radio
      v-model="picked"
      value="fourth"
      label="Inline 4"
    />
  </div>
</template>

<script setup>
import { FwbRadio } from '../../../../src/index'
import { ref } from 'vue'

const picked = ref('first')
</script>
