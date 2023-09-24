<script setup>
import FwbButtonGroupExample from './buttonGroup/examples/FwbButtonGroupExample.vue'
import FwbButtonGroupExampleIcon from './buttonGroup/examples/FwbButtonGroupExampleIcon.vue'
</script>

# Vue Button Group - Flowbite

#### Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line

---

:::tip
Original reference: [https://flowbite.com/docs/components/button-group/](https://flowbite.com/docs/components/button-group/)
:::

The button group component from Flowbite can be used to stack together multiple buttons and links inside a single element.

## Basic example

<fwb-button-group-example />
```vue
<template>
  <fwb-button-group>
    <fwb-button>Button Default</fwb-button>
    <fwb-button color="purple">Button Purple</fwb-button>
    <fwb-button color="alternative">Button Alternative</fwb-button>
    <fwb-button color="red">Button Red</fwb-button>
  </fwb-button-group>
</template>

<script setup>
import { FwbButtonGroup, FwbButton } from 'flowbite-vue'
</script>
```

## Buttons with icons

<fwb-button-group-example-icon />
```vue
<template>
  <fwb-button-group>
    <fwb-button outline>Button 1</fwb-button>
    <fwb-button outline>Button 2</fwb-button>
    <fwb-button outline>Button 3</fwb-button>
    <fwb-button outline>
      Button 4
      <template #suffix>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
        </svg>
      </template>
    </fwb-button>
  </fwb-button-group>
</template>

<script setup>
import { FwbButtonGroup, FwbButton } from 'flowbite-vue'
</script>
```
