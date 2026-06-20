<template>
  <div class="vp-raw grid grid-cols-2 gap-6">
    <fwb-radio
      v-model="picked"
      label="Radio 1"
      name="radio-bordered"
      value="one"
      wrapper-class="rounded border border-gray-200 p-2 dark:border-gray-700"
    />
    <fwb-radio
      v-model="picked"
      label="Radio 2"
      name="radio-bordered"
      value="two"
      wrapper-class="rounded border border-gray-200 p-2 dark:border-gray-700"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio } from '../../../../src/index'

const picked = ref('one')
</script>
