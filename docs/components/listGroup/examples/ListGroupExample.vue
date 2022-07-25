<template>
  <div class="vp-raw flex flex-col">
    <list-group>
      <list-group-item :hover="false">Item 1</list-group-item>
      <list-group-item :hover="false">Item 2</list-group-item>
      <list-group-item :hover="false">Item 3</list-group-item>
      <list-group-item :hover="false">Item 4</list-group-item>
      <list-group-item :hover="false">Item 5</list-group-item>
    </list-group>
  </div>
</template>
<script setup>
import { ListGroup, ListGroupItem } from '../../../../src/index'
</script>
