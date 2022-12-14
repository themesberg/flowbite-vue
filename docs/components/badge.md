<script setup>
import BadgeTypesExample from './badge/examples/BadgeTypesExample.vue'
import BadgeSizesExample from './badge/examples/BadgeSizesExample.vue'
import BadgeLinksExample from './badge/examples/BadgeLinksExample.vue'
import BadgeIconsExample from './badge/examples/BadgeIconsExample.vue'
import BadgeOnlyIconsExample from './badge/examples/BadgeOnlyIconsExample.vue'
</script>
# Vue Badge Component - Flowbite

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
---

:::tip
Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.
Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.



## Default badge
Prop – type

<BadgeTypesExample />

```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
    <Badge />
    <Badge type="dark" />
    <Badge type="red" />
    <Badge type="green" />
    <Badge type="yellow" />
    <Badge type="indigo" />
    <Badge type="purple" />
    <Badge type="pink" />
</template>
```

## Large badges
Prop – size

<BadgeSizesExample />

```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
    <Badge />
    <Badge type="dark" />
    <Badge type="red" />
    <Badge type="green" />
    <Badge type="yellow" />
    <Badge type="indigo" />
    <Badge type="purple" />
    <Badge type="pink" />
</template>
```

## Badges as links
You can also use badges as anchor elements to link to another page.
Prop – href

```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
    <Badge href="#">Link</Badge>
</template>
```

<BadgeLinksExample />

## Badges with icon
You can also use SVG icons inside the badge elements.
slot icon

```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
    <Badge>
        <template #icon>
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
        </template>
        Default
    </Badge>
</template>
```

<BadgeIconsExample />

## Badge with icon only

```vue
<script setup>
import { Badge } from 'flowbite-vue'
</script>
<template>
    <Badge>
        <template #icon>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
        </template>
    </Badge>
</template>
```

<BadgeOnlyIconsExample />
