<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      placement="top"
      text="Top"
      align-to-end
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown
      placement="right"
      text="Right"
      align-to-end
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown
      text="Bottom"
      align-to-end
    >
      <p class="p-2">
        Dropdown content here
      </p>
    </fwb-dropdown>
    <fwb-dropdown
      placement="left"
      text="Left"
      align-to-end
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
