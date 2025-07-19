<template>
  <div class="vp-raw">
    <fwb-dropdown
      text="Menu"
      content-wrapper-class="rounded-lg"
    >
      <fwb-list-group class="text-sm text-gray-700 dark:text-gray-200">
        <fwb-list-group-item to="#">
          Dashboard
        </fwb-list-group-item>
        <fwb-list-group-item href="#">
          Settings
        </fwb-list-group-item>
        <fwb-list-group-item href="#">
          Earnings
        </fwb-list-group-item>
        <fwb-list-group-item @click="signOut">
          Sign out
        </fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from '../../../../src/index'
const signOut = () => {}
</script>
