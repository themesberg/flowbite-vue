<template>
  <div class="vp-raw">
    <tabs v-model="activeTab">
      <tab name="first" title="Проверка">
        Проверка
      </tab>
      <tab name="second" title="Проверка1">
        Проверка 2
      </tab>
      <tab name="third" title="Проверка2">
        Проверка 3
      </tab>
      <tab name="fourth" title="Проверка3" :disabled="true">
        Проверка 4
      </tab>
    </tabs>
    current tab: {{ activeTab }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Tabs, Tab } from '../../../../src/index'
const activeTab = ref('')
</script>
