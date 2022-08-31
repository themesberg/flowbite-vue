<script setup>
import ModalExample from './examples/ModalExample.vue'
</script>
# Modal

### Demo

<ModalExample />

```vue
<script setup>
import { Modal } from 'flowbite-vue'
</script>
<template>
  <Modal>
    <template #trigger="props">
      <button @click="props.show()" type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Show Modal
      </button>
    </template>
    <template v-slot:title>Terms of Service</template>
    <template v-slot:body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    <template #footer="props">
      <button @click="props.hide()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        I accept
      </button>
      <button @click="props.hide()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
        Decline
      </button>
    </template>
  </Modal>
</template>
```

### Slot Properties 

Modal slots recieve the following functions to interact with the modal:
1. `show` = show the modal 
2. `hide` = hide the modal 
3. `toggle` = toggles the modal from current state (e.g. if shown, then hide)
