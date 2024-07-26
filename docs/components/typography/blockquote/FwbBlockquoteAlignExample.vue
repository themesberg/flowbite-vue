<template>
    <div class="vp-raw flex">
        <FwbBlockquote :align="align">
            "Flowbite is just awesome. Perfect choice for your next SaaS application."
        </FwbBlockquote>
    </div>
</template>

<script setup>
import { FwbBlockquote } from '../../../../src/index'

const props = defineProps({
    align: {
        type: String,
        default: 'left'
    }
})
</script>