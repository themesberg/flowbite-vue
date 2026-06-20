<template>
  <div class="vp-raw">
    <fwb-radio-group name="shipping" label="Shipping method">
      <fwb-radio v-model="picked" label="Standard (3–5 days)" value="standard" />
      <fwb-radio v-model="picked" label="Express (1–2 days)" value="express" />
      <template #helper>
        Delivery times are estimates and may vary during peak seasons.
      </template>
    </fwb-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio, FwbRadioGroup } from '../../../../src/index'

const picked = ref('standard')
</script>
