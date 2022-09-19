<script setup>
import CardDefaultExample from './examples/CardDefaultExample.vue'
import CardImageExample from './examples/CardImageExample.vue'
import CardHorizontalExample from './examples/CardHorizontalExample.vue'
</script>
# Card

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
import { Card } from 'flowbite-vue'
</script>
<template>
  <Card :href="'#'"/>
</template>
```

## Prop - image

<CardImageExample />

```vue
<script setup>
import { Card } from 'flowbite-vue'
</script>
<template>
  <Card 
    :variant="'image'" 
    :href="'#'" 
    :imgSrc="'./images/blog/image-1.jpg'" 
    :imgAlt="'Image'"
  />
</template>
```

## Prop - horizontal

<CardHorizontalExample />

```vue
<script setup>
import { Card } from 'flowbite-vue'
</script>
<template>
  <Card 
    :variant="'horizontal'" 
    :href="'#'" 
    :imgSrc="'./images/blog/image-4.jpg'" 
    :imgAlt="'Image'"
  />
</template>
```
