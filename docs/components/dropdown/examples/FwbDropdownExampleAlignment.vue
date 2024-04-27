<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <fwb-dropdown
      placement="top"
      text="Top"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </fwb-dropdown>
    <fwb-dropdown
      placement="right"
      text="Right"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </fwb-dropdown>
    <fwb-dropdown
      text="Bottom"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </fwb-dropdown>
    <fwb-dropdown
      placement="left"
      text="Left"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown } from '../../../../src/index'
</script>
