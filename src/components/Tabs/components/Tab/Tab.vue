<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<script lang="ts">
export default {
  __FLOWBITE_TAB__: true, // add this to easily find tab components from tabs
}
</script>