<template>
  <div class="vp-raw">
    <fwb-button-group>
      <fwb-button>Button 1</fwb-button>
      <fwb-button>Button 2</fwb-button>
      <fwb-dropdown text="Dropdown">
        <p class="p-2">
          This is a test dropdown
        </p>
      </fwb-dropdown>
      <fwb-dropdown text="Dropdown with list">
        <fwb-list-group>
          <fwb-list-group-item hover>
            <a href="#">These</a>
          </fwb-list-group-item>
          <fwb-list-group-item hover>
            <a href="#">are</a>
          </fwb-list-group-item>
          <fwb-list-group-item hover>
            <a href="#">some</a>
          </fwb-list-group-item>
          <fwb-list-group-item hover>
            <a href="#">list</a>
          </fwb-list-group-item>
          <fwb-list-group-item hover>
            <a href="#">items</a>
          </fwb-list-group-item>
        </fwb-list-group>
      </fwb-dropdown>
    </fwb-button-group>
  </div>
</template>

<script setup>
import { FwbButton, FwbButtonGroup, FwbDropdown, FwbListGroup, FwbListGroupItem } from '../../../../src/index'
</script>
