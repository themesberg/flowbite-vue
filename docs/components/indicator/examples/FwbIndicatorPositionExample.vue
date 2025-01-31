<template>
<div class="relative w-56 h-56 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <fwb-indicator class="absolute top-0 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-left</fwb-indicator>
    <fwb-indicator class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-center</fwb-indicator>
    <fwb-indicator class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-right</fwb-indicator>
    <fwb-indicator class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-left</fwb-indicator>
    <fwb-indicator class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-center</fwb-indicator>
    <fwb-indicator class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-right</fwb-indicator>
    <fwb-indicator class="absolute bottom-0 translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-left</fwb-indicator>
    <fwb-indicator class="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-center</fwb-indicator>
    <fwb-indicator class="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-right</fwb-indicator>
</div>
</template>

<script setup lang="ts">
import { FwbIndicator } from '../../../../src/index'

</script>
