<script setup>
import FwbModalExample from './modal/examples/FwbModalExample.vue'
import FwbModalExampleSize from './modal/examples/FwbModalExampleSize.vue'
import FwbModalExampleEscapable from './modal/examples/FwbModalExampleEscapable.vue'
import FwbModalExamplePersistent from './modal/examples/FwbModalExamplePersistent.vue'
import FwbModalExamplePosition from './modal/examples/FwbModalExamplePosition.vue'
import FwbModalExampleFocusTrap from './modal/examples/FwbModalExampleFocusTrap.vue'
</script>

# Modal - Flowbite Vue

#### Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles

---

:::tip Modal - Flowbite
Original reference: [https://flowbite.com/docs/components/modal/](https://flowbite.com/docs/components/modal/)
:::

The modal component can be used as an interactive dialog on top of the main content area to show notifications, confirmations, or gather input from your users. Use `v-if` to control visibility and listen to the `close` event to dismiss it.

## Default Modal

Use the `header`, `body`, and `footer` slots to compose the modal content. Wire up a reactive boolean and toggle it from a button to open and close the modal.

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
        The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
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

Use the `size` prop to control the maximum width of the modal. Available values are `xs`, `sm`, `md`, `lg`, `xl`, `2xl` (default), `3xl`, `4xl`, `5xl`, `6xl`, and `7xl`.

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

## Position

Use the `position` prop to control where on the screen the modal appears. The default is `center`. Available positions are `top-start`, `top-center`, `top-end`, `center-start`, `center`, `center-end`, `bottom-start`, `bottom-center`, and `bottom-end`. RTL direction is handled automatically.

<fwb-modal-example-position />

```vue
<template>
  <fwb-modal position="top-start" />
  <fwb-modal position="top-center" />
  <fwb-modal position="top-end" />
  <fwb-modal position="center-start" />
  <fwb-modal position="center" />
  <fwb-modal position="center-end" />
  <fwb-modal position="bottom-start" />
  <fwb-modal position="bottom-center" />
  <fwb-modal position="bottom-end" />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## Escapable

By default the modal can be dismissed by clicking the close button, clicking outside the modal content, or pressing the `Escape` key. Set `not-escapable` to `true` to disable the outside-click and Escape key behaviours — the developer then controls when to close it programmatically.

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

Set `persistent` to `true` to prevent the `close` event from firing when the user clicks outside the modal or presses Escape. The close button is also hidden. Use this when the user must interact with the modal content before it can be dismissed.

<fwb-modal-example-persistent />

```vue
<template>
  <fwb-modal persistent />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## Focus Trap

Set `focus-trap` to `true` to keep keyboard focus inside the modal while it is open, preventing users from tabbing to elements in the background. The `Escape` key still closes the modal unless `not-escapable` or `persistent` is set.

<fwb-modal-example-focus-trap />

```vue
<template>
  <fwb-modal />
  <fwb-modal focus-trap />
</template>

<script setup>
import { FwbModal } from 'flowbite-vue'
</script>
```

## Modal component API

### FwbModal Props

| Name         | Type                                                                                                                         | Default    | Description                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| bodyClass    | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the body wrapper.                                   |
| focusTrap    | `Boolean`                                                                                                                    | `false`    | Traps keyboard focus inside the modal while it is open.                           |
| footerClass  | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the footer wrapper.                                 |
| headerClass  | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the header wrapper.                                 |
| layoutClass  | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the layout positioning wrapper.                     |
| notEscapable | `Boolean`                                                                                                                    | `false`    | Disables closing via outside click or Escape key (close button still shown).      |
| overlayClass | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the overlay backdrop element.                       |
| persistent   | `Boolean`                                                                                                                    | `false`    | Hides the close button and prevents all passive dismiss behaviours.               |
| position     | `'top-start' \| 'top-center' \| 'top-end' \| 'center-start' \| 'center' \| 'center-end' \| 'bottom-start' \| 'bottom-center' \| 'bottom-end'` | `'center'` | Controls where the modal is positioned on screen. |
| size         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl'`                              | `'2xl'`    | Controls the maximum width of the modal panel.                                    |
| wrapperClass | `String \| Object`                                                                                                           | `''`       | Additional classes applied to the modal panel wrapper.                            |

### FwbModal Events

| Name          | Description                                                                             |
| ------------- | --------------------------------------------------------------------------------------- |
| close         | Emitted when the close button is clicked, Escape is pressed, or the overlay is clicked. |
| click:outside | Emitted when the user clicks outside the modal content area.                            |

### FwbModal Slots

| Name       | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| header     | Content rendered inside the modal header bar, next to the close button.              |
| body       | Main content area of the modal.                                                      |
| footer     | Content rendered inside the modal footer. The footer is hidden when this slot is empty. |
| close-icon | Replaces the default X icon inside the close button.                                 |
