<script setup>
import CardDefaultExample from './card/examples/CardDefaultExample.vue'
import CardImageExample from './card/examples/CardImageExample.vue'
import CardHorizontalExample from './card/examples/CardHorizontalExample.vue'
</script>
# Vue Card Components - Flowbite

#### Get started with a large variety of Tailwind CSS card examples for your web project

---

:::tip
Original reference: [https://flowbite.com/docs/components/card/](https://flowbite.com/docs/components/card/)
:::

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Prop - default

<CardDefaultExample />

```vue
<script setup>
import { TheCard } from 'flowbite-vue'
</script>
<template>
  <the-card href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </the-card>
</template>
```

## Prop - image

<CardImageExample />

```vue
<script setup>
import { TheCard } from 'flowbite-vue'
</script>
<template>
  <the-card variant="image" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" img-alt="Desk">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </the-card>
</template>
```

## Prop - horizontal

<CardHorizontalExample />

```vue
<script setup>
import { TheCard } from 'flowbite-vue'
</script>
<template>
  <the-card href="#" variant="horizontal" img-src="https://flowbite.com/docs/images/blog/image-4.jpg" img-alt="Desk">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </the-card>
</template>
```
