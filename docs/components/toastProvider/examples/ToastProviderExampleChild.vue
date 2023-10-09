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
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="John"
      required
    >
    <div class="flex gap-2">
      <button
        color="green"
        @click="() => add('success')"
      >
        success
      </button>
      <button
        color="yellow"
        @click="() => add('warning')"
      >
        warning
      </button>
      <button
        color="red"
        @click="() => add('danger')"
      >
        danger
      </button>
      <button
        color="purple"
        @click="() => add('update')"
      >
        update
      </button>
    </div>
    <div class="flex">
      <button
        color="alternative"
        @click="remove"
      >
        pop
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, shallowRef } from 'vue'
import { Button, useToast } from '../../../../src/index'
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
