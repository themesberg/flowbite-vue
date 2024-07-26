<template>
    <div class="vp-raw flex">
        <FwbBlockquote :size="size">
            "Flowbite is just awesome. Perfect choice for your next SaaS application."
        </FwbBlockquote>
    </div>
</template>

<script setup>
import { FwbBlockquote } from '../../../../src/index'

const props = defineProps({
    size: {
        type: String,
        default: 'md'
    }
})

</script>