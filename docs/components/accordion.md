<script setup>
import FwbAccordionExample from './accordion/examples/FwbAccordionExample.vue'
import FwbAccordionExampleCollapsed from './accordion/examples/FwbAccordionExampleCollapsed.vue'
import FwbAccordionExampleFlushed from './accordion/examples/FwbAccordionExampleFlushed.vue'
import FwbAccordionExamplePersistent from './accordion/examples/FwbAccordionExamplePersistent.vue'
import FwbAccordionExampleStyling from './accordion/examples/FwbAccordionExampleStyling.vue'
</script>

# Vue Accordion - Flowbite

#### Use Tailwind CSS accordion component to show expanding content
---

:::tip
Original reference: [https://flowbite.com/docs/components/accordion/](https://flowbite.com/docs/components/accordion/)
:::

## Basic Accordion
A simple accordion example.

<fwb-accordion-example />
```vue
<template>
  <fwb-accordion>
    <fwb-accordion-panel>
      <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Pro</a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
          </li>
        </ul>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionPanel,
  FwbAccordionHeader,
  FwbAccordionContent,
} from 'flowbite-vue'
</script>
```

## Persistent Accordion Items
By default, only one accordion item can be open at a time.  Use the `persistent` prop to enable the opening of multiple items concurrently.

<fwb-accordion-example-persistent />
```vue
<template>
  <fwb-accordion persistent>
    <fwb-accordion-panel>
      <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Pro</a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
          </li>
        </ul>
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

## Flushed Accordion
The `flushed` prop removes background color, side borders, and rounded corners, creating a flush appearance.

<fwb-accordion-example-flushed />
```vue
<template>
  <fwb-accordion flushed>
    <fwb-accordion-panel>
      <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Pro</a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
          </li>
        </ul>
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

## Initialy Collapsed
The `collapsed` prop allows you to set an accordion to be fully collapsed by default.

<fwb-accordion-example-collapsed />
```vue
<template>
  <fwb-accordion collapsed>
    <fwb-accordion-panel>
      <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
      <fwb-accordion-content>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Pro</a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
          </li>
        </ul>
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

## Styling Accordions
Use dedicated `class` and `activeClass` props to style accordion components with Tailwind CSS. The `FwbAccordionPanel` component emits `show` and `hide` events on visibility change.

_Advanced styling example:_
<fwb-accordion-example-styling />
```vue
<template>
  <fwb-accordion>
    <fwb-accordion-panel
      v-for="(panel, i) in panels"
      :key="i"
      :class="{ 'border-b-0': i !== panels.length - 1 }"
      class="border border-cyan-700"
      @show="() => (panel.isVisible = true)"
      @hide="() => (panel.isVisible = false)"
    >
      <fwb-accordion-header
        class="w-full justify-center rounded-none border-0 bg-white hover:bg-cyan-200 dark:bg-cyan-800 dark:text-white dark:hover:bg-cyan-700 [&>svg]:m-0"
        :active-class="'bg-lime-200 hover:bg-lime-300 dark:bg-lime-500 dark:text-black dark:hover:bg-lime-400'"
      >
        Item {{ i+1 }} ({{ panel.isVisible ? 'open' : 'closed' }})
      </fwb-accordion-header>
      <fwb-accordion-content class="border-t border-t-cyan-700 text-center ">
        <p>{{ panel.content }}</p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import { ref } from 'vue'
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'

const panels = ref([
  { isVisible: false, content: 'Lorem ipsum...' },
  { isVisible: false, content: 'Lorem ipsum...' },
  { isVisible: false, content: 'Lorem ipsum...' },
])

</script>
```

## Accordion components API

### FwbAccordion Props
| Name  | Type             | Default |
| ----- | ---------------- | ------- |
| class | String \| Object | `''`    |

### FwbAccordionPanel Props
| Name        | Type             | Default |
| ----------- | ---------------- | ------- |
| class       | String \| Object | `''`    |
| activeClass | String \| Object | `''`    |

### FwbAccordionPanel Events
| Name | Description                                       |
| ---- | ------------------------------------------------- |
| show | Emitted when panel visibility changes to visible. |
| hide | Emitted when panel visibility changes to hidden.  |

### FwbAccordionHeader Props
| Name        | Type             | Default |
| ----------- | ---------------- | ------- |
| class       | String \| Object | `''`    |
| activeClass | String \| Object | `''`    |

### FwbAccordionContent Props
| Name        | Type             | Default |
| ----------- | ---------------- | ------- |
| class       | String \| Object | `''`    |
| activeClass | String \| Object | `''`    |
