<script setup>
import FwbBadgeExample from './badge/examples/FwbBadgeExample.vue'
import FwbBadgeExampleSize from './badge/examples/FwbBadgeExampleSize.vue'
import FwbBadgeExampleLink from './badge/examples/FwbBadgeExampleLink.vue'
import FwbBadgeExampleIcon from './badge/examples/FwbBadgeExampleIcon.vue'
import FwbBadgeExampleIconOnly from './badge/examples/FwbBadgeExampleIconOnly.vue'
</script>

# Badge - Flowbite Vue

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components

---

:::tip Badge - Flowbite
Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made. Badges can also be used as standalone elements that link to a page by setting the `href` prop, which renders an anchor tag instead of a span.

## Default Badge

Use the `type` prop to set the badge colour. Available types are `default`, `dark`, `red`, `green`, `yellow`, `indigo`, `purple`, and `pink`.

<fwb-badge-example />

```vue
<template>
  <fwb-badge>Default</fwb-badge>
  <fwb-badge type="dark">Dark</fwb-badge>
  <fwb-badge type="red">Red</fwb-badge>
  <fwb-badge type="green">Green</fwb-badge>
  <fwb-badge type="yellow">Yellow</fwb-badge>
  <fwb-badge type="indigo">Indigo</fwb-badge>
  <fwb-badge type="purple">Purple</fwb-badge>
  <fwb-badge type="pink">Pink</fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Sizes

Use the `size` prop to control badge dimensions. `xs` is the default (smaller) size and `sm` is the larger option.

<fwb-badge-example-size />

```vue
<template>
  <fwb-badge size="xs">Default</fwb-badge>
  <fwb-badge size="xs" type="dark">Dark</fwb-badge>
  <fwb-badge size="xs" type="red">Red</fwb-badge>
  <fwb-badge size="xs" type="green">Green</fwb-badge>
  <fwb-badge size="sm" type="yellow">Yellow</fwb-badge>
  <fwb-badge size="sm" type="indigo">Indigo</fwb-badge>
  <fwb-badge size="sm" type="purple">Purple</fwb-badge>
  <fwb-badge size="sm" type="pink">Pink</fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badges as Links

Set the `href` prop to render the badge as an `<a>` element, making the entire badge a clickable link.

<fwb-badge-example-link />

```vue
<template>
  <fwb-badge href="#">
    Link
  </fwb-badge>
  <fwb-badge href="#" size="sm">
    Link small
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badges with Icon

Use the `#icon` slot to place an SVG icon before the badge label.

<fwb-badge-example-icon />

```vue
<template>
  <fwb-badge>
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Default
  </fwb-badge>
  <fwb-badge size="sm" type="dark">
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Dark
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badge with Icon Only

Omit the default slot content and use only the `#icon` slot to render an icon-only badge.

<fwb-badge-example-icon-only />

```vue
<template>
  <fwb-badge>
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
  <fwb-badge type="dark">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
  <fwb-badge size="sm" type="green">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badge component API

### FwbBadge Props

| Name | Type                                                                        | Default     | Description                                                    |
| ---- | --------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| type | `'default' \| 'dark' \| 'red' \| 'green' \| 'yellow' \| 'indigo' \| 'purple' \| 'pink'` | `'default'` | Sets the badge colour scheme. |
| size | `'xs' \| 'sm'`                                                              | `'xs'`      | Controls badge padding and font size.                          |
| href | `String`                                                                    | `null`      | When set, renders an `<a>` element instead of `<span>`.        |

### FwbBadge Slots

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | Badge label text.                               |
| icon    | Icon rendered before the label.                 |
