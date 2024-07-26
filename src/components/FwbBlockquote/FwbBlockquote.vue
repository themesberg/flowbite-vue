<template>
    <blockquote :class="blockquoteClasses" :cite="cite">
        <slot></slot>
    </blockquote>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useBlockquoteClasses } from './composables/useBlockquoteClasses'
import type { BlockquoteSize, BlockquoteAlign, BlockquoteType } from './types'

interface BlockquoteProps {
    type?: BlockquoteType;
    size?: BlockquoteSize;
    align?: BlockquoteAlign;
    cite?: string;
}

const props = withDefaults(defineProps<BlockquoteProps>(), {
    type: 'default',
    size: 'md',
    align: 'left',
    cite: '',
})

const {
    blockquoteClasses
} = useBlockquoteClasses(props)
</script>