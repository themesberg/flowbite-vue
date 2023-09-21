<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert
      closable
      icon
      type="info"
    >
      Info
    </fwb-alert>
    <fwb-alert
      closable
      icon
      type="warning"
    >
      Warning
    </fwb-alert>
    <fwb-alert
      closable
      icon
      type="danger"
    >
      Danger
    </fwb-alert>
    <fwb-alert
      closable
      icon
      type="dark"
    >
      Dark
    </fwb-alert>
    <fwb-alert
      closable
      icon
      type="success"
    >
      Success
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from '../../../../src/index'
</script>
