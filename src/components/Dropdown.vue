<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  autoClose: {
    type: Boolean,
    default: true,
  },
  fixed: {
    type: Boolean,
    default: true,
  },
});

const isVisible = ref(false);
const dropdown = ref(null);

function toggle() {
  isVisible.value = !isVisible.value;
  if (isVisible.value && props.autoClose) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
}

function handleClickOutside(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    const target = event.target as HTMLElement;
    const self = dropdown.value as unknown as HTMLElement;
    if (self && (self.contains(target) || self === target)) {
      return;
    }
  }
  toggle();
}
</script>

<template>
  <div ref="dropdown">
    <slot name="trigger" :toggle="toggle" :is-visible="isVisible" />
    <div
      :class="{
        fixed: fixed,
      }"
    >
      <slot :is-visible="isVisible" />
    </div>
  </div>
</template>