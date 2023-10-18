<template>
  <div class="vp-raw flex w-96">
    <fwb-radio
      v-model="picked"
      label="Inline 1"
      value="first"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 2"
      value="second"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 3"
      value="third"
    />
    <fwb-radio
      v-model="picked"
      label="Inline 4"
      value="fourth"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from '../../../../src/index'

const picked = ref('first')
</script>
