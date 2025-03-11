<template>
  <div
    class="fwb-button-group inline-flex rounded-md shadow-sm"
    role="group"
  >
    <slot />
  </div>
</template>

<style>
.fwb-button-group > button,
.fwb-button-group > .fwb-dropdown button,
.fwb-button-group > .fwb-tooltip button {
  @apply rounded-none;
}
.fwb-button-group > button:first-child,
.fwb-button-group > .fwb-dropdown:first-child button,
.fwb-button-group > .fwb-tooltip:first-child button {
  @apply rounded-l-lg;
}
.fwb-button-group > button:last-child,
.fwb-button-group > .fwb-dropdown:last-child button,
.fwb-button-group > .fwb-tooltip:last-child button {
  @apply rounded-r-lg;
}
</style>
