<script setup>
import ToastTypeExample from './toast/examples/ToastTypeExample.vue';
import ToastClosableExample from './toast/examples/ToastClosableExample.vue';
import ToastIconExample from './toast/examples/ToastIconExample.vue';
import ToastDivideExample from './toast/examples/ToastDivideExample.vue';
import ToastMessageExample from './toast/examples/ToastMessageExample.vue';
import ToastInteractiveExample from './toast/examples/ToastInteractiveExample.vue'
</script>
# Vue Toast - Flowbite

#### Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions

---

:::tip
Original reference: [https://flowbite.com/docs/components/toast/](https://flowbite.com/docs/components/toast/)
:::

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

## Prop - type

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="empty"> <!-- default -->
    You've unlocked achievement.
  </Toast>
  <Toast type="warning">
    Improve password difficulty.
  </Toast>
  <Toast type="success">
    Item moved successfully.
  </Toast>
  <Toast type="danger">
    Item has been deleted.
  </Toast>
</template>
```

<ToastTypeExample />

## Prop - closable

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="empty" closable>
    You've unlocked achievement.
  </Toast>
  <Toast :type="'warning'" closable>
    Improve password difficulty.
  </Toast>
  <Toast :type="'success'" closable>
    Item moved successfully.
  </Toast>
  <Toast :type="'danger'" closable>
    Item has been deleted.
  </Toast>
</template>
```

<ToastClosableExample />

## Prop - divide

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="empty" closable divide>
    You've unlocked achievement.
  </Toast>
  <Toast :type="'warning'" closable divide>
    Improve password difficulty.
  </Toast>
  <Toast :type="'success'" closable divide>
    Item moved successfully.
  </Toast>
  <Toast :type="'danger'" closable divide>
    Item has been deleted.
  </Toast>
</template>
```

<ToastDivideExample />

## Message

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="empty" closable alignment="start">
    <template #icon>
      <img class="w-8 h-8 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
    </template>
    <div class="text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
    </div>
  </Toast>
</template>
```

<ToastMessageExample />

## Interactive

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="empty" closable alignment="start">
    <template #icon>
      <img class="w-8 h-8 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
    </template>
    <div class="text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
    </div>
  </Toast>
</template>
```

<ToastInteractiveExample />

## Slot - icon

You can use icon slot for rendering your own icons. Also you can change icon background color by using [FlowbiteThemable](/components/flowbiteThemable/flowbiteThemable.md)

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <flowbite-themable theme="blue">
    <Toast type="empty" closable>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-mouse" viewBox="0 0 16 16">
          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/>
        </svg>
      </template>
      Scroll down to see more examples.
    </Toast>
  </flowbite-themable>
  <flowbite-themable theme="red">
    <Toast closable>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-person-plus" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </template>
      You have new friend request.
    </Toast>
  </flowbite-themable>
  <Toast :type="'success'" closable>
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-earbuds" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
      </svg>
    </template>
    Your airpods connected.
  </Toast>
</template>
```

<ToastIconExample />

---
