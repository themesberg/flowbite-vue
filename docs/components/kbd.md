<script setup>
import FwbKbdExample from './kbd/examples/FwbKbdExample.vue'
import FwbKbdExampleText from './kbd/examples/FwbKbdExampleText.vue'
import FwbKbdExampleTable from './kbd/examples/FwbKbdExampleTable.vue'
import FwbKbdExampleArrowKeys from './kbd/examples/FwbKbdExampleArrowKeys.vue'
import FwbKbdExampleLetterKeys from './kbd/examples/FwbKbdExampleLetterKeys.vue'
import FwbKbdExampleNumberKeys from './kbd/examples/FwbKbdExampleNumberKeys.vue'
import FwbKbdExampleFunctionKeys from './kbd/examples/FwbKbdExampleFunctionKeys.vue'
</script>

# KBD (Keyboard) - Flowbite Vue

#### Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components

---

:::tip KBD - Flowbite
Original reference: [https://flowbite.com/docs/components/kbd/](https://flowbite.com/docs/components/kbd/)
:::

The KBD (Keyboard) renders a styled `<kbd>` element used to represent a keyboard key. It has no props or variants — it's a purely compositional building block that can be used standalone, joined with other keys inside text, placed inside a table cell, or combined with an icon to represent a directional key.

## Default KBD

Here's a list of `fwb-kbd` components that you can use inside any other element.

<fwb-kbd-example />

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <fwb-kbd>Shift</fwb-kbd>
    <fwb-kbd>Ctrl</fwb-kbd>
    <fwb-kbd>Tab</fwb-kbd>
    <fwb-kbd>Caps Lock</fwb-kbd>
    <fwb-kbd>Esc</fwb-kbd>
    <fwb-kbd>Spacebar</fwb-kbd>
    <fwb-kbd>Enter</fwb-kbd>
  </div>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'
</script>
```

## KBD Inside Text

Use this example by nesting an inline `fwb-kbd` component inside a paragraph.

<fwb-kbd-example-text />

```vue
<template>
  <p>
    Please press <fwb-kbd>Ctrl</fwb-kbd> + <fwb-kbd>Shift</fwb-kbd> + <fwb-kbd>R</fwb-kbd> to re-render a page.
  </p>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'
</script>
```

## KBD Inside a Table

The `fwb-kbd` component can also be used inside table components to denote what type of key can be pressed for certain descriptions.

<fwb-kbd-example-table />

```vue
<template>
  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>Key</fwb-table-head-cell>
      <fwb-table-head-cell>Description</fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-cell>
          <fwb-kbd>Shift</fwb-kbd> or <fwb-kbd>Tab</fwb-kbd>
        </fwb-table-cell>
        <fwb-table-cell>Navigate to interactive elements</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>
          <fwb-kbd>Enter</fwb-kbd> or <fwb-kbd>Spacebar</fwb-kbd>
        </fwb-table-cell>
        <fwb-table-cell>Ensure elements with ARIA role="button" can be activated with both key commands</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-cell>
          <span class="inline-flex gap-1">
            <fwb-kbd>
              <template #icon>
                <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 -rotate-90" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </template>
              <span class="sr-only">Up</span>
            </fwb-kbd>
            <fwb-kbd>
              <template #icon>
                <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 rotate-90" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </template>
              <span class="sr-only">Down</span>
            </fwb-kbd>
          </span>
          or
          <span class="inline-flex gap-1">
            <fwb-kbd>
              <template #icon>
                <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </template>
              <span class="sr-only">Left</span>
            </fwb-kbd>
            <fwb-kbd>
              <template #icon>
                <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </template>
              <span class="sr-only">Right</span>
            </fwb-kbd>
          </span>
        </fwb-table-cell>
        <fwb-table-cell>Choose and activate previous/next tab</fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbKbd,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'
</script>
```

## Arrow Keys

Use the `#icon` slot to render a directional icon inside the key. Supply your own SVG — `fwb-kbd` ships no built-in icon set.

<fwb-kbd-example-arrow-keys />

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <fwb-kbd>
      <template #icon>
        <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 -rotate-90" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      <span class="sr-only">Up</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 rotate-90" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      <span class="sr-only">Down</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5 rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      <span class="sr-only">Left</span>
    </fwb-kbd>
    <fwb-kbd>
      <template #icon>
        <svg aria-hidden="true" class="mx-1 h-2.5 w-2.5" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      <span class="sr-only">Right</span>
    </fwb-kbd>
  </div>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'
</script>
```

## Letter Keys

Use this example to show letter keys inside the `fwb-kbd` styled element.

<fwb-kbd-example-letter-keys />

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <fwb-kbd v-for="key in keys" :key="key">
      {{ key }}
    </fwb-kbd>
  </div>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'

const keys = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
]
</script>
```

## Number Keys

Use this example to show a key inside a `fwb-kbd` component from the English numeral system.

<fwb-kbd-example-number-keys />

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <fwb-kbd v-for="key in keys" :key="key">
      {{ key }}
    </fwb-kbd>
  </div>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'

const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
</script>
```

## Function Keys

This example can be used to denote function keys inside the `fwb-kbd` component.

<fwb-kbd-example-function-keys />

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <fwb-kbd v-for="key in keys" :key="key">
      {{ key }}
    </fwb-kbd>
  </div>
</template>

<script setup>
import { FwbKbd } from 'flowbite-vue'

const keys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']
</script>
```

## KBD component API

### FwbKbd Slots

| Name    | Description                                          |
| ------- | ---------------------------------------------------- |
| default | Key label content.                                   |
| icon    | Icon rendered inside the key (e.g. arrow direction). |
