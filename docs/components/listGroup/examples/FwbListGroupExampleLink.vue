<template>
  <div class="vp-raw flex flex-col">
    <fwb-list-group>
      <fwb-list-group-item
        active
        href="#"
      >
        Link with href (active)
      </fwb-list-group-item>
      <fwb-list-group-item
        href="https://flowbite.com"
        target="__blank"
      >
        External link
      </fwb-list-group-item>
      <fwb-list-group-item to="#">
        Router link
      </fwb-list-group-item>
      <fwb-list-group-item> Regular item (no hover) </fwb-list-group-item>
    </fwb-list-group>
  </div>
</template>

<script lang="ts" setup>
import { FwbListGroup, FwbListGroupItem } from '../../../../src/index'
</script>
