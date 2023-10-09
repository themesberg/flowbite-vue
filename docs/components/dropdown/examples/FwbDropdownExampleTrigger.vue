<template>
  <div class="vp-raw">
    <fwb-dropdown>
      <template #trigger>
        <span>Custom Trigger Element</span>
      </template>
      <fwb-list-group>
        <fwb-list-group-item>
          Profile
        </fwb-list-group-item>
        <fwb-list-group-item>
          Settings
        </fwb-list-group-item>
        <fwb-list-group-item>
          Messages
        </fwb-list-group-item>
        <fwb-list-group-item>
          Download
        </fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from '../../../../src/index'
</script>
