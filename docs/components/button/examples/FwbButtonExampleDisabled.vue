<template>
  <div class="vp-raw flex flex-wrap gap-2">
    <fwb-button
      color="default"
      disabled
    >
      Default
    </fwb-button>
    <fwb-button
      color="default"
      outline
      disabled
    >
      Default outline
    </fwb-button>
    <fwb-button
      gradient="red"
      disabled
    >
      Red gradient
    </fwb-button>
    <fwb-button
      gradient="red-yellow"
      disabled
    >
      Red to yellow gradient
    </fwb-button>
    <fwb-button
      gradient="red-yellow"
      outline
      disabled
    >
      Red to yellow outline
    </fwb-button>
  </div>
</template>

<script setup>
import { FwbButton } from '../../../../src/index'
</script>
