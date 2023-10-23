<template>
  toasts
  <new-fwb-toast-provider />
</template>

<script lang="ts" setup>

import NewFwbToastProvider from '@/components/FwbToast/FwbToastProvider.vue'
import UpdateToast from '../../toastProvider/examples/UpdateToast.vue'
import { useToast } from '@/components/FwbToast/composables/useToast'
import { shallowRef } from 'vue'
const toastProvider = useToast()
const myToastComponent = shallowRef(UpdateToast)

toastProvider.addToast({
  text: 'Hello',
  component: myToastComponent,
  time: 5000,
  componentAttrs: {
    text: 'Alert! Hello world!',
    type: 'success',
    closable: true,
  },
})
</script>
