<script setup>
import FwbListGroupExample from './listGroup/examples/FwbListGroupExample.vue'
import FwbListGroupExampleDisabled from './listGroup/examples/FwbListGroupExampleDisabled.vue'
import FwbListGroupExampleHover from './listGroup/examples/FwbListGroupExampleHover.vue'
import FwbListGroupExampleIcon from './listGroup/examples/FwbListGroupExampleIcon.vue'
</script>

# Vue List Group - Flowbite

#### Use the list group component to display a series of items, buttons or links inside a single element

---

:::tip
Original reference: [https://flowbite.com/docs/components/list-group/](https://flowbite.com/docs/components/list-group/)
:::

The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

## Default

<fwb-list-group-example />
```vue
<template>
  <fwb-list-group>
    <fwb-list-group-item>Item 1</fwb-list-group-item>
    <fwb-list-group-item>Item 2</fwb-list-group-item>
    <fwb-list-group-item>Item 3</fwb-list-group-item>
    <fwb-list-group-item>Item 4</fwb-list-group-item>
    <fwb-list-group-item>Item 5</fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Hover

<fwb-list-group-example-hover />
```vue
<template>
  <fwb-list-group>
    <fwb-list-group-item hover>Item 1</fwb-list-group-item>
    <fwb-list-group-item hover>Item 2</fwb-list-group-item>
    <fwb-list-group-item hover>Item 3</fwb-list-group-item>
    <fwb-list-group-item hover>Item 4</fwb-list-group-item>
    <fwb-list-group-item hover>Item 5</fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Icon

<fwb-list-group-example-icon />
```vue
<template>
  <fwb-list-group>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" fill-rule="evenodd" />
        </svg>
      </template>
      Profile
    </fwb-list-group-item>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </template>
      Settings
    </fwb-list-group-item>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" fill-rule="evenodd" />
        </svg>
      </template>
      Messages
    </fwb-list-group-item>
    <fwb-list-group-item>
      <template #suffix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" fill-rule="evenodd" />
        </svg>
      </template>
      Download
    </fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```

## Disabled

<fwb-list-group-example-disabled />
```vue
<template>
  <fwb-list-group>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" fill-rule="evenodd" />
        </svg>
      </template>
      Profile
    </fwb-list-group-item>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </template>
      Settings
    </fwb-list-group-item>
    <fwb-list-group-item>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" fill-rule="evenodd" />
        </svg>
      </template>
      Messages
    </fwb-list-group-item>
    <fwb-list-group-item disabled>
      <template #prefix>
        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" fill-rule="evenodd" />
        </svg>
      </template>
      Download
    </fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>
```
