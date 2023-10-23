<template>
  <div class="vp-raw flex flex-wrap justify-center gap-2">
    <fwb-tooltip theme="light">
      <template #trigger>
        <fwb-button>
          Light Tooltip
        </fwb-button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </fwb-tooltip>
    <fwb-tooltip theme="dark">
      <template #trigger>
        <fwb-button>
          Dark Tooltip
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
