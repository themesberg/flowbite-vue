<template>
  <div>
    <button data-tooltip-target="tooltip-default" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Default tooltip
    </button>
    <div id="tooltip-default" role="tooltip"
         class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700">
      Tooltip content
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
