<template>
  <div class="vp-raw grid grid-cols-2 gap-6">
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
        v-model="picked"
        label="Radio 1"
        name="radio-bordered"
        value="one"
      />
    </div>
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
        v-model="picked"
        label="Radio 2"
        name="radio-bordered"
        value="two"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from '../../../../src/index'

const picked = ref('one')
</script>
