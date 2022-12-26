<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <slot />
      </ul>
    </div>
  </aside>
</template>
<script lang="ts" setup>

defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  collapseBehavior: {
    type: String, // 'collapse' | 'hide';
    default: 'collapse',
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
})

</script>
