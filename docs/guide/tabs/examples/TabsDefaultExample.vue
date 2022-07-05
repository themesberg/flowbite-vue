<template>
  <div class="vp-raw">
    <tabs v-model="activeTab" class="p-5">
      <tab name="first" title="First">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, id, nisi? Enim excepturi id minus molestias quaerat qui rem repudiandae sed tempore ullam voluptate, voluptatum. Consequuntur illum possimus tempora totam.
      </tab>
      <tab name="second" title="Second">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur expedita explicabo facere facilis fugit illo laboriosam minus molestias nulla placeat porro quaerat, quo repellat sapiente similique temporibus voluptate. Nemo!
      </tab>
      <tab name="third" title="Third">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias assumenda consequatur, dicta eius eos excepturi hic magnam maxime molestias nisi perferendis provident quia. Aliquam consequatur esse ex sit velit.
      </tab>
      <tab name="fourth" title="Fourth" :disabled="true">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti dolores ea eligendi quis, ratione repellat temporibus veniam veritatis voluptates. Distinctio enim eos illo incidunt ipsam provident, quaerat quia vel!
      </tab>
    </tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Tabs, Tab } from '../../../../src/index'
const activeTab = ref('first')
</script>
