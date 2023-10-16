<template>
  <div class="vp-raw flex justify-between flex-wrap gap-2">
    <fwb-toggle
      v-model="toggle1"
      label="Red"
      color="red"
    />
    <fwb-toggle
      v-model="toggle2"
      label="Green"
      color="green"
    />
    <fwb-toggle
      v-model="toggle3"
      label="Purple"
      color="purple"
    />
    <fwb-toggle
      v-model="toggle4"
      label="Yellow"
      color="yellow"
    />
    <fwb-toggle
      v-model="toggle5"
      label="Teal"
      color="teal"
    />
    <fwb-toggle
      v-model="toggle6"
      label="Orange"
      color="orange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from '../../../../src/index'

const toggle1 = ref(true)
const toggle2 = ref(true)
const toggle3 = ref(true)
const toggle4 = ref(true)
const toggle5 = ref(true)
const toggle6 = ref(true)
</script>
