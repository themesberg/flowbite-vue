<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert
      border
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      border
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      border
      type="danger"
    >
      Info Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      border
      type="dark"
    >
      Info Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      border
      type="success"
    >
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from '../../../../src/index'
</script>
