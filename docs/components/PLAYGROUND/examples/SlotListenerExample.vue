<template>
  <slot-listener @click="onClick" @mouseleave="onMouseleave" @mouseenter="onMouseenter">
    <Button>HELLO</Button>
  </slot-listener>
</template>
<script lang="ts" setup>
import { SlotListener, Button } from '../../../../src/index'
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
