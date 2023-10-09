<template>
  <slot-listener
    @click="onClick"
    @mouseleave="onMouseleave"
    @mouseenter="onMouseenter"
  >
    <button>HELLO</button>
  </slot-listener>
</template>
<script lang="ts" setup>
import { SlotListener } from '../../../../src/index'
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
