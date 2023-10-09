<template>
  <div class="flex justify-between">
    <toggle
      v-model="toggle1"
      label="Red"
      color="red"
    />
    <toggle
      v-model="toggle2"
      label="Green"
      color="green"
    />
    <toggle
      v-model="toggle3"
      label="Purple"
      color="purple"
    />
    <toggle
      v-model="toggle4"
      label="Yellow"
      color="yellow"
    />
    <toggle
      v-model="toggle5"
      label="Teal"
      color="teal"
    />
    <toggle
      v-model="toggle6"
      label="Orange"
      color="orange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toggle } from '../../../../src/index'

const toggle1 = ref(true)
const toggle2 = ref(true)
const toggle3 = ref(true)
const toggle4 = ref(true)
const toggle5 = ref(true)
const toggle6 = ref(true)
</script>
