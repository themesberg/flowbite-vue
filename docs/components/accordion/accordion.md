<script setup>
import AccordionExample from './examples/AccordionExample.vue';
import AccordionAlwaysOpenExample from './examples/AccordionAlwaysOpenExample.vue';
import AccordionFlushExample from './examples/AccordionFlushExample.vue';
import AccordionStyledHeadersExample from './examples/AccordionStyledHeadersExample.vue';
</script>
# Vue Accordion Component - Flowbite

#### Use Tailwind CSS accordion component to show expanding content
---

:::tip
Original reference: [https://flowbite.com/docs/components/accordion/](https://flowbite.com/docs/components/accordion/)
:::

## Default accordion
Use this example to basic accordion. 
```vue
<script setup>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite'
</script>

<template>
  <Accordion>
    <accordion-panel>
      <accordion-header>header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>another header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>and one more header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
</template>

```

<AccordionExample />

## Always open accordion
Always open prop to makes accordion able to open multiple elements.
```vue
<script setup>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite'
</script>

<template>
  <Accordion always-open>
    <accordion-panel>
      <accordion-header>header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>another header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>and one more header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
</template>

```

<AccordionAlwaysOpenExample />

## Flush accordion
Flush prop removes side borders, and rounded corners
```vue
<script setup>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite'
</script>

<template>
  <Accordion flush>
    <accordion-panel>
      <accordion-header>header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>another header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>and one more header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
</template>

```

<AccordionFlushExample />

## Styling accordion
You can style accordion content and headers by passing tailwind classes into them.
```vue
<script setup>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite'
</script>

<template>
  <Accordion>
    <accordion-panel>
      <accordion-header>header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">another header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>and one more header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
</template>

```

<AccordionStyledHeadersExample />
