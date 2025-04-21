<template>
  <div class="vp-raw">
    <fwb-checkbox
      v-model="check"
      label="Free shipping via Flowbite"
    >
      <template #helper>
        For orders shipped from $25 in books or $29 in other categories.
      </template>
    </fwb-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbCheckbox } from '../../../../src/index'

const check = ref(false)
</script>
