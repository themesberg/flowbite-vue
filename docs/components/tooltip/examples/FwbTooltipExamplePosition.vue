<template>
  <div class="vp-raw flex flex-wrap justify-center gap-2">
    <fwb-tooltip placement="top">
      <template #trigger>
        <fwb-button>
          Tooltip top
        </fwb-button>
      </template>
      <template #content>
        Tooltip on top
      </template>
    </fwb-tooltip>
    <fwb-tooltip placement="right">
      <template #trigger>
        <fwb-button>
          Tooltip right
        </fwb-button>
      </template>
      <template #content>
        Tooltip on right
      </template>
    </fwb-tooltip>
    <fwb-tooltip placement="bottom">
      <template #trigger>
        <fwb-button>
          Tooltip bottom
        </fwb-button>
      </template>
      <template #content>
        Tooltip on bottom
      </template>
    </fwb-tooltip>
    <fwb-tooltip placement="left">
      <template #trigger>
        <fwb-button>
          Tooltip left
        </fwb-button>
      </template>
      <template #content>
        Tooltip on left
      </template>
    </fwb-tooltip>
  </div>
</template>

<script setup>
import { FwbButton, FwbTooltip } from '../../../../src/index'
</script>
