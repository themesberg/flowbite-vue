<template>
  <div class="vp-raw">
    <fwb-button-group>
      <fwb-button>
        Normal Button
      </fwb-button>
      <fwb-tooltip>
        <template #trigger>
          <fwb-button>
            Button With Tooltip
          </fwb-button>
        </template>
        <template #content>
          Tooltip content
        </template>
      </fwb-tooltip>
    </fwb-button-group>
  </div>
</template>

<script setup>
import { FwbButton, FwbButtonGroup, FwbTooltip } from '../../../../src/index'
</script>
