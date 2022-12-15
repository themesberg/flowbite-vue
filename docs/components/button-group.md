<script setup>
import ButtonGroupBasicExample from './buttonGroup/examples/ButtonGroupBasicExample.vue';
import ButtonGroupIconExample from './buttonGroup/examples/ButtonGroupIconExample.vue';
</script>

# Vue Button Group Component - Flowbite

#### Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line

---

:::tip
Original reference: [https://flowbite.com/docs/components/button-group/](https://flowbite.com/docs/components/button-group/)
:::

The button group component from Flowbite can be used to stack together multiple buttons and links inside a single element.

## Basic example

<ButtonGroupBasicExample />

```vue
<script setup>
import { ButtonGroup, Button } from 'flowbite-vue'
</script>
<template>
  <button-group>
    <Button>hello world</Button>
    <Button color="purple">hello world</Button>
    <Button color="alternative">hello world</Button>
    <Button color="red">hello world</Button>
  </button-group>
</template>
```

## Buttons with icons

<ButtonGroupIconExample />

```vue
<script setup>
import { ButtonGroup, Button } from 'flowbite-vue'
</script>
<template>
  <button-group>
    <Button outline>Button1</Button>
    <Button outline>Button2</Button>
    <Button outline>Button3</Button>
    <Button outline>
      hello world
      <template #suffix>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </template>
    </Button>
  </button-group>
</template>
```
