<template>
  <div class="vp-raw grid gap-4">
    <fwb-toggle
      v-model="toggle1"
      label="Notifications (success)"
      validation-status="success"
    >
      <template #validationMessage>
        <span class="font-medium">Great!</span> Notifications are enabled.
      </template>
    </fwb-toggle>
    <fwb-toggle
      v-model="toggle2"
      label="Location (error)"
      validation-status="error"
    >
      <template #validationMessage>
        <span class="font-medium">Required!</span> Location access must be enabled.
      </template>
    </fwb-toggle>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbToggle } from '../../../../src/index'

const toggle1 = ref(true)
const toggle2 = ref(false)
</script>
