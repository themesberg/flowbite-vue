<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert
      class="border-t-4 rounded-none"
      icon
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="border-t-4 rounded-none"
      icon
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="border-t-4 rounded-none"
      icon
      type="danger"
    >
      Info Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="border-t-4 rounded-none"
      icon
      type="dark"
    >
      Info Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="border-t-4 rounded-none"
      icon
      type="success"
    >
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from '../../../../src/index'
</script>
