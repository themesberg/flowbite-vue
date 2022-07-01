<template>
  <button-group>
    <Button outline>Button1</Button>
    <Button outline>Button2</Button>
    <Button outline>Button3</Button>
    <Button outline>
      hello world
      <template #suffix>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </template>
    </Button>
  </button-group>
</template>
<script setup>
import { ButtonGroup, Button } from '../../../../src/index'
</script>
