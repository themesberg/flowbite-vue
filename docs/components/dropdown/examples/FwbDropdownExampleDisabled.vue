<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      text="Normal State"
    >
      <div class="w-52">
        <p class="p-4">
          Dropdown content
        </p>
      </div>
    </fwb-dropdown>
    <fwb-dropdown
      text="Disabled State"
      disabled
    >
      <div class="w-52">
        <p class="p-4">
          Disabled dropdown content
        </p>
      </div>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown } from '../../../../src/index'
</script>
