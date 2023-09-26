<template>
  <div class="vp-raw grid gap-2">
    <fwb-progress
      label="Default"
      :progress="12.5"
    />
    <fwb-progress
      color="dark"
      label="Dark"
      :progress="25"
    />
    <fwb-progress
      color="blue"
      label="Blue"
      :progress="37.5"
    />
    <fwb-progress
      color="red"
      label="Red"
      :progress="50"
    />
    <fwb-progress
      color="green"
      label="Green"
      :progress="62.5"
    />
    <fwb-progress
      color="yellow"
      label="Yellow"
      :progress="75"
    />
    <fwb-progress
      color="indigo"
      label="Indigo"
      :progress="87.5"
    />
    <fwb-progress
      color="purple"
      label="Purple"
      :progress="100"
    />
  </div>
</template>

<script setup>
import { FwbProgress } from '../../../../src/index'
</script>
