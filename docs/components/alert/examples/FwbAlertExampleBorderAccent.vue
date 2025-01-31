<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert
      class="rounded-none border-t-4"
      icon
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="rounded-none border-t-4"
      icon
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="rounded-none border-t-4"
      icon
      type="danger"
    >
      Info Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="rounded-none border-t-4"
      icon
      type="dark"
    >
      Info Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert
      class="rounded-none border-t-4"
      icon
      type="success"
    >
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script lang="ts" setup>
import { FwbAlert } from '../../../../src/index'
</script>
