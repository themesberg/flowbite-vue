<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <dropdown placement="bottom" text="Bottom">
      Any content here
    </dropdown>
    <dropdown placement="top">
      <template #trigger="{ toggle }">
        <Button @click="toggle">
          Top
          <template #suffix>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </template>
        </Button>
      </template>
      <div class="p-2">
        Padding content
      </div>
    </dropdown>
    <dropdown placement="right" text="Right">
      <Spinner size="6" class="m-4" />
    </dropdown>
    <dropdown placement="left" text="Left">
      hello world
    </dropdown>
  </div>
</template>
<script setup>
import { Dropdown, Spinner, Button } from '../../../../src/index'
</script>
