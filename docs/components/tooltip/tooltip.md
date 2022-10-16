<script setup>
import TooltipExample from './examples/TooltipExample.vue'
import TooltipStyleExample from './examples/TooltipStyleExample.vue'
import TooltipTriggerExample from './examples/TooltipTriggerExample.vue'
</script>
# Vue Tooltip Component - Flowbite

## Demo

<TooltipExample>
    <template #trigger-text>Demo Tooltip</template>
    <template #content-text>Demo Content</template>
</TooltipExample>

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<template>
  <Tooltip hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Demo tooltip
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Demo content
        </div>
      </template>
    </Tooltip>
</template>
```

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using placement attribute with `top`, `top-start` , `top-end`, `bottom`, `bottom-start`, `bottom-end`, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`,  `auto-end`.  
The default value is: `top`

<div class="flex flex-wrap justify-center py-8 space-x-3">
  <TooltipExample placement="top">
    <template #trigger-text>Tooltip top</template>
    <template #content-text>Tooltip top</template>
  </TooltipExample> 

  <TooltipExample placement="right">
    <template #trigger-text>Tooltip right</template>
    <template #content-text>Tooltip on right</template>
  </TooltipExample> 

  <TooltipExample placement="bottom">
    <template #trigger-text>Tooltip bottom</template>
    <template #content-text>Tooltip on bottom</template>
  </TooltipExample> 

  <TooltipExample placement="left">
    <template #trigger-text>Tooltip left</template>
    <template #content-text>Tooltip on left</template>
  </TooltipExample> 
  
</div>

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<template>
  <!-- Show tooltip on top -->
  <Tooltip placement="top" hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip top
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip on top
        </div>
      </template>
    </Tooltip>

    <!-- Show tooltip on right -->
  <Tooltip placement="right" hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip right
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip on right
        </div>
      </template>
    </Tooltip>

    <!-- Show tooltip on bottom -->
  <Tooltip placement="bottom" hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip bottom
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip on bottom
        </div>
      </template>
    </Tooltip>

  <!-- Show tooltip on left -->
  <Tooltip placement="left" hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip left
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip left
        </div>
      </template>
    </Tooltip>
</template>
```

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `tooltip-light` or `tooltip-dark` attribute.

<div class="flex flex-wrap justify-center py-8 space-x-3">
  <TooltipStyleExample placement="top" arrow-color="yellow" colorStyle="tooltip-light">
    <template #trigger-text>
        light style tooltip
    </template>
    <template #tooltip>
        <div
        class="py-2 px-3 text-sm font-medium rounded-lg shadow-sm transition-opacity duration-300">
            light style content
        </div>
    </template>
  </TooltipStyleExample> 

  <TooltipStyleExample placement="top" arrow-color="yellow" colorStyle="tooltip-dark">
    <template #trigger-text>
        dark style tooltip
    </template>
    <template #tooltip>
        <div
          class="py-2 px-3 text-sm font-medium text-white rounded-lg shadow-sm transition-opacity duration-300">
            dark style Tooltip
          </div>
    </template>
  </TooltipStyleExample> 
</div>

```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<!-- light style tooltip -->
<Tooltip class="tooltip-light" hover arrow>
  <template #trigger>
    <button type="button"
             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            light style tooltip
    </button>
  </template>

  <template #content>
    <div
      class="py-2 px-3 text-sm font-medium rounded-lg shadow-sm transition-opacity duration-300">
      light style content
      </div>
  </template>
</Tooltip>

<!-- dark style tooltip -->
<Tooltip class="tooltip-dark" hover arrow>
  <template #trigger>
    <button type="button"
             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            dark style tooltip
    </button>
  </template>

  <template #content>
    <div
      class="py-2 px-3 text-sm font-medium text-white rounded-lg shadow-sm transition-opacity duration-300">
      dark style content
      </div>
  </template>
</Tooltip>
```

## triggerType

You can choose the triggering event by using the `hover` or `click` attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `click`.

<div class="flex flex-wrap justify-center py-8 space-x-3">
  <TooltipExample>
      <template #trigger-text>Tooltip Hover</template>
      <template #content-text>Tooltip Content</template>
  </TooltipExample>

  <TooltipTriggerExample>
      <template #trigger-text>Tooltip click</template>
      <template #content-text>Tooltip Content</template>
  </TooltipTriggerExample>
</div>


```vue
<script setup>
import { Tooltip } from 'flowbite-vue'
</script>

<!-- light style tooltip -->
<template>
  <Tooltip hover arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip Hover
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip Content
        </div>
      </template>
    </Tooltip>
</template>

<!-- light style tooltip -->
<template>
  <Tooltip click arrow>
      <template #trigger>
        <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Tooltip click
        </button>
      </template>
      <template #content>
        <div
        class="py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700">
          Tooltip Content
        </div>
      </template>
    </Tooltip>
</template>
```
