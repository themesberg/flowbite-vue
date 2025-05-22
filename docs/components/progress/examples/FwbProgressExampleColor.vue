<template>
  <div class="vp-raw grid gap-2">
    <fwb-progress
      label="Default"
      :progress="11"
    />
    <fwb-progress
      color="dark"
      label="Dark"
      :progress="22"
    />
    <fwb-progress
      color="blue"
      label="Blue"
      :progress="33"
    />
    <fwb-progress
      color="red"
      label="Red"
      :progress="44"
    />
    <fwb-progress
      color="green"
      label="Green"
      :progress="55"
    />
    <fwb-progress
      color="yellow"
      label="Yellow"
      :progress="66"
    />
    <fwb-progress
      color="indigo"
      label="Indigo"
      :progress="77"
    />
    <fwb-progress
      color="purple"
      label="Purple"
      :progress="88"
    />
    <fwb-progress
      color="#3fb984"
      label="Custom color"
      :progress="99"
    />
  </div>
</template>

<script lang="ts" setup>
import { FwbProgress } from '../../../../src/index'
</script>
