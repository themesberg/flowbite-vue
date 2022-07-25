<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <Button gradient="blue" shadow>Blue with blue</Button>
    <Button gradient="cyan" shadow>Cyan with cyan</Button>
    <Button gradient="green" shadow>Green with green</Button>
    <Button gradient="lime" shadow>Lime with lime</Button>
    <Button gradient="pink" shadow>Pink with pink</Button>
    <Button gradient="purple" shadow>Purple with purple</Button>
    <Button gradient="red" shadow>Red with red</Button>
    <Button gradient="teal" shadow>Teal with teal</Button>
    <Button gradient="blue" shadow="red">Blue with red</Button>
    <Button gradient="cyan" shadow="teal">Cyan with teal</Button>
    <Button gradient="teal" shadow="purple">Teal with purple</Button>
  </div>
</template>
<script setup>
import { Button } from '../../../../src/index'
</script>
