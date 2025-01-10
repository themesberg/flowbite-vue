<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      text="Normal State"
    >
      <div class="w-52">
        <p class="p-4">
          Access this content by clicking the dropdown's trigger button
        </p>
      </div>
    </fwb-dropdown>
    <fwb-dropdown
      text="Disabled State"
      disabled
    >
      <div class="w-52">
        <p class="p-4">
          You cannot access this content, since the dropdown's trigger button is disabled
        </p>
      </div>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown } from '../../../../src/index'
</script>
