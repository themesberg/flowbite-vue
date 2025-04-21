<template>
  <div class="vp-raw">
    <fwb-checkbox v-model="check">
      I agree with the
      <fwb-a
        class="text-blue-600 hover:underline"
        href="#"
      >
        terms and conditions.
      </fwb-a>
    </fwb-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbA, FwbCheckbox } from '../../../../src/index'

const check = ref(false)
</script>
