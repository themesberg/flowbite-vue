<template>
  <div class="flex flex-col gap-2">
    <label
      for="ms"
      class="block text-sm font-medium text-gray-900 dark:text-gray-400"
    >Duration(ms)</label>
    <input
      id="ms"
      v-model.number="ms"
      type="number"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="John"
      required
    >
    <div class="flex gap-2">
      <fwb-button
        color="green"
        @click="() => add('success')"
      >
        success
      </fwb-button>
      <fwb-button
        color="yellow"
        @click="() => add('warning')"
      >
        warning
      </fwb-button>
      <fwb-button
        color="red"
        @click="() => add('danger')"
      >
        danger
      </fwb-button>
      <fwb-button
        color="purple"
        @click="() => add('update')"
      >
        update
      </fwb-button>
    </div>
    <div class="flex">
      <fwb-button
        color="alternative"
        @click="remove"
      >
        pop
      </fwb-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { FwbButton, useToast } from '../../../../src/index'
import UpdateToast from './UpdateToast.vue'

const ms = ref(5000)

const toast = useToast()

const addUpdate = () => {
  toast.add({
    time: parseInt(ms.value) || 0,
    text: 'A new software version is available for download.',
    component: shallowRef(UpdateToast),
    componentProps: {
      alignment: 'start',
      closable: true,
    },
  })
}

const add = (type) => {
  if (type === 'update') return addUpdate()
  toast.add({
    type,
    time: parseInt(ms.value) || 0,
    text: `${type} alert! Hello world!`,
  })
}
const remove = () => {
  toast.pop()
}
</script>
