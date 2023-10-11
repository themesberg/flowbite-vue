<template>
  <div class="grid grid-cols-2 gap-6 vp-raw">
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
        v-model="picked"
        value="fs"
        label="Radio 1"
      />
    </div>
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <fwb-radio
        v-model="picked"
        value="sec"
        label="Radio 2"
      />
    </div>
  </div>
</template>

<script setup>
import { FwbRadio } from '../../../../src/index'
import { ref } from 'vue'

const picked = ref('fs')
</script>
