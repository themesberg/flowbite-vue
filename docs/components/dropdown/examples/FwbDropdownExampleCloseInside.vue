<template>
  <div class="vp-raw">
    <fwb-dropdown
      close-inside
      text="Closes after click on child"
    >
      <fwb-list-group>
        <fwb-list-group-item hover>
          Profile
        </fwb-list-group-item>
        <fwb-list-group-item hover>
          Settings
        </fwb-list-group-item>
        <fwb-list-group-item hover>
          Messages
        </fwb-list-group-item>
        <fwb-list-group-item hover>
          Download
        </fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from '../../../../src/index'
</script>
