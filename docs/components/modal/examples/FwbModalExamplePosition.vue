<template>
  <div class="flex flex-wrap justify-start gap-2 vp-raw">
    <span>
      <fwb-modal-example
        position="top-start"
        trigger-text="Top Start"
      />
    </span>
    <span>
      <fwb-modal-example
        position="top-center"
        trigger-text="Top Center"
      />
    </span>
    <span>
      <fwb-modal-example
        position="top-end"
        trigger-text="Top End"
      />
    </span>
    <span>
      <fwb-modal-example
        position="center-start"
        trigger-text="Center Start"
      />
    </span>
    <span>
      <fwb-modal-example
        position="center"
        trigger-text="Center"
      />
    </span>
    <span>
      <fwb-modal-example
        position="center-end"
        trigger-text="Center End"
      />
    </span>
    <span>
      <fwb-modal-example
        position="bottom-start"
        trigger-text="Bottom Start"
      />
    </span>
    <span>
      <fwb-modal-example
        position="bottom-center"
        trigger-text="Bottom Center"
      />
    </span>
    <span>
      <fwb-modal-example
        position="bottom-end"
        trigger-text="Bottom End"
      />
    </span>
  </div>
</template>

<script setup>
import FwbModalExample from './FwbModalExample.vue'
</script>
