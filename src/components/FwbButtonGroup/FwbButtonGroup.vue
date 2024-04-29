<template>
  <div
    class="fwb-button-group inline-flex rounded-md shadow-sm"
    role="group"
  >
    <slot />
  </div>
</template>

<style>
.fwb-button-group > button {
  @apply rounded-none;
}
.fwb-button-group > button:first-child {
  @apply rounded-l-lg;
}
.fwb-button-group > button:last-child {
  @apply rounded-r-lg;
}
</style>
