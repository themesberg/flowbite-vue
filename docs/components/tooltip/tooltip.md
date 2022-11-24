<script setup>
import TooltipExample from './examples/TooltipExample.vue'
import TooltipPositionExample from './examples/TooltipPositionExample.vue'
import TooltipStyleExample from './examples/TooltipStyleExample.vue'
import TooltipTriggerExample from './examples/TooltipTriggerExample.vue'
</script>
# Vue Tooltip Component - Flowbite

## Demo

<TooltipExample></TooltipExample>

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<template>
  <Tooltip>
    <template #trigger>
      <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Default Tooltip
      </button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </Tooltip>
</template>
```

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `tooltip-light` or `tooltip-dark` attribute.

<TooltipStyleExample />

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<!-- light style tooltip -->
<Tooltip tooltip-style="tooltip-light">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Light Tooltip
    </button>
  </template>
  <template #content>
    Tooltip content
  </template>
</Tooltip>
<!-- dark style tooltip -->
<Tooltip tooltip-style="tooltip-dark">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Dark Tooltip
    </button>
  </template>
  <template #content>
    Tooltip content
  </template>
</Tooltip>
```

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using placement attribute with `top`, `top-start` , `top-end`, `bottom`, `bottom-start`, `bottom-end`, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`,  `auto-end`.  
The default value is: `top`

<TooltipPositionExample />

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<template>
<!-- Show tooltip on top -->
<Tooltip placement="top">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip top
    </button>
  </template>
  <template #content>
    Tooltip on top
  </template>
</Tooltip>

<!-- Show tooltip on right -->
<Tooltip placement="right">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip right
    </button>
  </template>
  <template #content>
    Tooltip on right
  </template>
</Tooltip>

<!-- Show tooltip on bottom -->
<Tooltip placement="bottom">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip bottom
    </button>
  </template>
  <template #content>
    Tooltip on bottom
  </template>
</Tooltip>

<!-- Show tooltip on left -->
<Tooltip placement="left">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip left
    </button>
  </template>
  <template #content>
    Tooltip on left
  </template>
</Tooltip>
```



## triggerType

You can choose the triggering event by using the `hover` or `click` attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `click`.

<TooltipTriggerExample />

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<!-- Show tooltip on hover -->
<Tooltip trigger="hover">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip hover
    </button>
  </template>
  <template #content>
    Tooltip content
  </template>
</Tooltip>
<!-- Show tooltip on click -->
<Tooltip trigger="click">
  <template #trigger>
    <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip click
    </button>
  </template>
  <template #content>
    Tooltip content
  </template>
</Tooltip>
```
