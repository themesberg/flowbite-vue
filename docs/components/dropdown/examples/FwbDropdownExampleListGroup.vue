<template>
  <div class="vp-raw">
    <fwb-dropdown text="Menu">
      <list-group>
        <list-group-item>
          Profile
        </list-group-item>
        <list-group-item>
          Settings
        </list-group-item>
        <list-group-item>
          Messages
        </list-group-item>
        <list-group-item>
          Download
        </list-group-item>
      </list-group>
    </fwb-dropdown>
  </div>
</template>

<script setup>
import { FwbDropdown, ListGroup, ListGroupItem } from '../../../../src/index'
</script>
