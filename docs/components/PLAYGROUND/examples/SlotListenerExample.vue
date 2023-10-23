<template>
  <fwb-slot-listener
    @click="onClick"
    @mouseleave="onMouseleave"
    @mouseenter="onMouseenter"
  >
    <fwb-button>HELLO</fwb-button>
  </fwb-slot-listener>
</template>

<script lang="ts" setup>
import { FwbButton, FwbSlotListener } from '../../../../src/index'
const onClick = () => {
  console.log('onClick from slot-listener')
}
const onMouseenter = () => {
  console.log('onMouseenter from slot-listener')
}
const onMouseleave = () => {
  console.log('onMouseleave from slot-listener')
}
</script>
