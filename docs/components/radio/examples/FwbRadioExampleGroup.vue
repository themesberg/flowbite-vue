<template>
  <div class="vp-raw">
    <fwb-radio-group name="fruit" label="Pick a fruit">
      <fwb-radio
        v-for="fruit in fruits"
        :key="fruit.value"
        v-model="picked"
        :label="fruit.label"
        :value="fruit.value"
      />
    </fwb-radio-group>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Selected: {{ picked }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio, FwbRadioGroup } from '../../../../src/index'

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

const picked = ref('banana')
</script>
