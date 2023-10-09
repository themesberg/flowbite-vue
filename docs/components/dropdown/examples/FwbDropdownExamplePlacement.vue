<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      placement="top"
      text="Top"
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown
      placement="right"
      text="Right"
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown text="Bottom">
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown
      placement="left"
      text="Left"
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown } from '../../../../src/index'
</script>
