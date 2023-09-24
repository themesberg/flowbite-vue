<script setup>
import FwbAccordionExample from './accordion/examples/FwbAccordionExample.vue'
import FwbAccordionExampleAlwaysOpen from './accordion/examples/FwbAccordionExampleAlwaysOpen.vue'
import FwbAccordionExampleFlush from './accordion/examples/FwbAccordionExampleFlush.vue'
import FwbAccordionExampleStyledHeaders from './accordion/examples/FwbAccordionExampleStyledHeaders.vue'
import FwbAccordionExampleFirstItemClosed from './accordion/examples/FwbAccordionExampleFirstItemClosed.vue'
</script>
# Vue Accordion - Flowbite

#### Use Tailwind CSS accordion component to show expanding content
---

:::tip
Original reference: [https://flowbite.com/docs/components/accordion/](https://flowbite.com/docs/components/accordion/)
:::

## Default accordion
Use this example to basic accordion.

<fwb-accordion-example />
```vue
<template>
  <fwb-accordion>
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline" >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>

```

## Always open accordion
Always open prop to makes accordion able to open multiple elements.

<fwb-accordion-example-always-open />
```vue
<template>
  <fwb-accordion always-open>
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
```

## Flush accordion
Flush prop removes side borders, and rounded corners

<fwb-accordion-example-flush />
```vue
<template>
  <fwb-accordion flush>
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
```

## Styling accordion
You can style accordion content and headers by passing tailwind classes into them.

<fwb-accordion-example-styled-headers />
```vue
<template>
  <fwb-accordion>
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">
        another header
      </fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
```

## Closed first item

<fwb-accordion-example-first-item-closed />
```vue
<template>
    <fwb-accordion :open-first-item="false">
      <fwb-accordion-panel>
        <fwb-accordion-header>header</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>another header</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>and one more header</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
```
