<script setup>
import FwbToastExample from './toast/examples/FwbToastExample.vue'
import FwbToastExampleClosable from './toast/examples/FwbToastExampleClosable.vue'
import FwbToastExampleIcon from './toast/examples/FwbToastExampleIcon.vue'
import FwbToastExampleDivide from './toast/examples/FwbToastExampleDivide.vue'
import FwbToastExampleMessage from './toast/examples/FwbToastExampleMessage.vue'
import FwbToastExampleInteractive from './toast/examples/FwbToastExampleInteractive.vue'
</script>
# Vue Toast - Flowbite

#### Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions

---

:::tip
Original reference: [https://flowbite.com/docs/components/toast/](https://flowbite.com/docs/components/toast/)
:::

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

## Prop - type

<fwb-toast-example />
```vue
<template>
  <fwb-toast>
    You've unlocked achievement.
  </fwb-toast>
  <fwb-toast type="warning">
    Improve password difficulty.
  </fwb-toast>
  <fwb-toast type="success">
    Item moved successfully.
  </fwb-toast>
  <fwb-toast type="danger">
    Item has been deleted.
  </fwb-toast>
</template>

<script setup>
import { FwbToast } from 'flowbite-vue'
</script>
```

## Prop - closable

<fwb-toast-example-closable />
```vue
<template>
  <fwb-toast closable>
    You've unlocked achievement.
  </fwb-toast>
  <fwb-toast closable type="warning">
    Improve password difficulty.
  </fwb-toast>
  <fwb-toast closable type="success">
    Item moved successfully.
  </fwb-toast>
  <fwb-toast closable type="danger">
    Item has been deleted.
  </fwb-toast>
</template>

<script setup>
import { FwbToast } from 'flowbite-vue'
</script>
```

## Prop - divide

<fwb-toast-example-divide />
```vue
<template>
  <fwb-toast divide>
    You've unlocked achievement.
  </fwb-toast>
  <fwb-toast divide type="warning">
    Improve password difficulty.
  </fwb-toast>
  <fwb-toast divide type="success">
    Item moved successfully.
  </fwb-toast>
  <fwb-toast divide type="danger">
    Item has been deleted.
  </fwb-toast>
</template>

<script setup>
import { FwbToast } from 'flowbite-vue'
</script>
```

## Message

<fwb-toast-example-message />
```vue
<template>
  <fwb-toast alignment="start" closable>
    <template #icon>
      <img
        alt="Jese Leos image" class="w-8 h-8 rounded-full shadow-lg" src="avatar.jpg">
    </template>
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
    <div class="mb-2 text-sm font-normal">
      Hi Neil, thanks for sharing your thoughts regarding Flowbite.
    </div>
    <fwb-button size="xs" href="#">
      Reply
    </fwb-button>
  </fwb-toast>
</template>

<script setup>
import { FwbButton, FwbToast } from 'flowbite-vue'
</script>
```

## Interactive

<fwb-toast-example-interactive />
```vue
<template>
  <flowbite-themable theme="blue">
    <fwb-toast alignment="start" closable>
      <template #icon>
        <svg aria-hidden="true" class="w-5 h-5" fill="#ffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" fill-rule="evenodd" />
        </svg>
      </template>
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
      <div class="mb-2 text-sm font-normal">
        A new software version is available for download.
      </div>
      <div class="grid grid-cols-2 gap-2">
        <fwb-button size="xs">
          Update
        </fwb-button>
        <fwb-button size="xs" color="alternative">
          Not now
        </fwb-button>
      </div>
    </fwb-toast>
  </flowbite-themable>
</template>

<script setup>
import { FlowbiteThemable, FwbButton, FwbToast } from 'flowbite-vue'
</script>

```

## Slot - icon

You can use icon slot for rendering your own icons. Also you can change icon background color by using [FlowbiteThemable](/components/flowbiteThemable/flowbiteThemable.md)

<fwb-toast-example-icon />
```vue
<template>
  <fwb-toast closable>
    <template #icon>
      <svg class="bi bi-mouse" fill="#fff" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
      </svg>
    </template>
    Scroll down to see more examples.
  </fwb-toast>
  <fwb-toast closable>
    <template #icon>
      <svg class="bi bi-person-plus" fill="#fff" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        <path d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" fill-rule="evenodd" />
      </svg>
    </template>
    You have new friend request.
  </fwb-toast>
  <fwb-toast closabletype="success">
    <template #icon>
      <svg class="bi bi-earbuds" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z" fill-rule="evenodd" />
      </svg>
    </template>
    Your airpods are connected.
  </fwb-toast>
</template>

<script setup>
import { FwbToast } from 'flowbite-vue'
</script>
```
