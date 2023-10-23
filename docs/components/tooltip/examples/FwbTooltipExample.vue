<template>
  <div class="vp-raw">
    <fwb-tooltip>
      <template #trigger>
        <fwb-button>
          Default Tooltip
        </fwb-button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </fwb-tooltip>
  </div>
</template>

<script setup>
import { FwbButton, FwbTooltip } from '../../../../src/index'
</script>
