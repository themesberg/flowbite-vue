<template>
  <div class="vp-raw flex justify-center gap-2">
    <fwb-tooltip>
      <template #trigger>
        <fwb-button>
          Tooltip hover
        </fwb-button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </fwb-tooltip>
    <fwb-tooltip trigger="click">
      <template #trigger>
        <fwb-button>
          Tooltip click
        </fwb-button>
      </template>
      <template #content>
        Tooltip content
      </template>
    </fwb-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { FwbButton, FwbTooltip } from '../../../../src/index'
</script>
