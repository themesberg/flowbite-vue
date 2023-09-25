<script setup>
import FwbModalExample from './modal/examples/FwbModalExample.vue'
import FwbModalExampleSize from './modal/examples/FwbModalExampleSize.vue'
import FwbModalExampleEscapable from './modal/examples/FwbModalExampleEscapable.vue'
import FwbModalExamplePersistent from './modal/examples/FwbModalExamplePersistent.vue'
</script>
# Vue Modal - Flowbite

#### Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles

---

:::tip
Original reference: [https://flowbite.com/docs/components/modal/](https://flowbite.com/docs/components/modal/)
:::

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.

## Default modal

<fwb-modal-example />
```vue
<template>
  <fwb-button @click="showModal">
    Open modal
  </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Terms of Service
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Decline
        </fwb-button>
        <fwb-button @click="closeModal" color="green">
          I accept
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbButton, FwbModal } from 'flowbite-vue'

const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}
</script>
```

## Size

You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

The default value is: `2xl`

<fwb-modal-example-size />
```vue
<template>
  <fwb-modal size="xs" />
  <fwb-modal size="md" />
  <fwb-modal size="xl" />
  <fwb-modal size="5xl" />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## Escapable

The escapable property is true by default to improve user experience and accessibility.

This means that you may close the modal by

 - Using the close button on the modal
 - Clicking outside of the modal
 - Pressing the escape key

In some situations, your user may be required to interact with the modal content. If this is the case, you can set the `not-escapable` property to `true`. The developer can then choose when they want to close the modal.

<fwb-modal-example-escapable />
```vue
<template>
  <fwb-modal />
  <fwb-modal not-escapable />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## Persistent

Clicking outside of the element or pressing esc key will not send `close` event.

<fwb-modal-example-persistent />
```vue
<template>
  <fwb-modal persistent />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## API

### Props:

| Name         | Values                                                    | Default |
|--------------|-----------------------------------------------------------|---------|
| size         | `md`,`lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl` | 2xl     |
| notEscapable | `true`, `false`                                           | `false` |
| persistent   | `true`, `false`                                           | `true`  |

### Events:
| Name            | Type                                                                             |
|-----------------|----------------------------------------------------------------------------------|
| `close`         | Clicked on the close button, pressed `Esc`, or clicked outside the modal content |
| `click:outside` | Clicked outside the modal content                                                |
