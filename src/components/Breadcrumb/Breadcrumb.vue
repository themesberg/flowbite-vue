<template>
  <nav :class="breadcrumbWrapperClasses" aria-label="Breadcrumb">
    <ol :class="breadcrumbClasses">
      <slot name="default" />
    </ol>
  </nav>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
import { useBreadcrumbClasses } from '@/components/Breadcrumb/composables/useBreadcrumbClasses'

const props = defineProps({
  solid: {
    type: Boolean,
    default: false,
  },
})

const { breadcrumbWrapperClasses, breadcrumbClasses } = useBreadcrumbClasses(toRefs(props))
</script>
