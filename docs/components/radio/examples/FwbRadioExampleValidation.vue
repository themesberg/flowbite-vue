<template>
  <div class="vp-raw space-y-6">
    <fwb-radio-group name="fruit-success" label="Pick a fruit (success)" validation-status="success">
      <fwb-radio v-model="picked1" label="Apple" value="apple" />
      <fwb-radio v-model="picked1" label="Banana" value="banana" />
      <template #validationMessage>
        <span class="font-medium">Great!</span> You selected a fruit.
      </template>
    </fwb-radio-group>

    <fwb-radio-group name="fruit-error" label="Pick a fruit (error)" validation-status="error">
      <fwb-radio v-model="picked2" label="Apple" value="apple" />
      <fwb-radio v-model="picked2" label="Banana" value="banana" />
      <template #validationMessage>
        <span class="font-medium">Required!</span> Please select a fruit to continue.
      </template>
    </fwb-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbRadio, FwbRadioGroup } from '../../../../src/index'

const picked1 = ref('banana')
const picked2 = ref('')
</script>
