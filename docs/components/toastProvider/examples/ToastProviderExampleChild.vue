<template>
  <div class="flex flex-col gap-2">
    <input class="text-black" type="number" v-model="ms">
    <div class="flex gap-2">
      <Button @click="() => add('success')" color="green">success</Button>
      <Button @click="() => add('warning')" color="yellow">warning</Button>
      <Button @click="() => add('danger')" color="red">danger</Button>
      <Button @click="() => add('update')" color="purple">update</Button>
    </div>
    <div class="flex">
      <Button @click="remove" color="alternative">remove</Button>
    </div>
  </div>
</template>
<script setup>
import { FLOWBITE_TOAST_INJECTION_KEY } from '../../../../src/components/Toast/components/ToastProvider/injection/config'
import { inject, ref, shallowRef } from 'vue'
import { Button } from '../../../../src/index'
import UpdateToast from './UpdateToast.vue'

const ms = ref('5000')

const injected = inject(FLOWBITE_TOAST_INJECTION_KEY)

const addUpdate = () => {
  injected.add({
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
  if(type === 'update') return addUpdate()
  injected.add({
    type,
    time: parseInt(ms.value) || 0,
    text: `${type} alert! Hello world!`,
  })

}
const remove = () => {
  injected.pop()
}

</script>
