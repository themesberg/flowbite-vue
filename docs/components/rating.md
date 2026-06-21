<script setup>
import FwbRatingExample from './rating/examples/FwbRatingExample.vue'
import FwbRatingExampleWithText from './rating/examples/FwbRatingExampleWithText.vue'
import FwbRatingExampleCount from './rating/examples/FwbRatingExampleCount.vue'
import FwbRatingExampleStarSizes from './rating/examples/FwbRatingExampleStarSizes.vue'
</script>

# Rating - Flowbite Vue

#### Use the rating component to show star-based review scores and testimonials from your users based on Tailwind CSS utility classes

---

:::tip Rating - Flowbite
Original reference: [https://flowbite.com/docs/components/rating/](https://flowbite.com/docs/components/rating/)
:::

The rating component can be used to show star-based review scores with support for partial ratings, review counts, and multiple star sizes.

## Default Rating

Use the `rating` prop to set how many stars are filled out of the `scale` (default 5). Fractional values render partial stars.

<fwb-rating-example />
```vue
<template>
  <fwb-rating :rating="4" />
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
</script>
```

## Rating with Text

Use the `besideText` slot to render additional content — such as a score label — next to the star row.

<fwb-rating-example-with-text />
```vue
<template>
  <fwb-rating :rating="4.75">
    <template #besideText>
      <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        4.75 out of 5
      </p>
    </template>
  </fwb-rating>
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
</script>
```

## Rating Count

Combine the `besideText` slot with `reviewLink` and `reviewText` to display a linked review count alongside the stars.

<fwb-rating-example-count />
```vue
<template>
  <fwb-rating
    :rating="1"
    :scale="1"
    review-link="#"
    review-text="73 reviews"
  >
    <template #besideText>
      <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        4.95
      </p>
    </template>
  </fwb-rating>
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
</script>
```

## Star Sizes

Use the `size` prop to control the star dimensions. Available sizes are `sm`, `md` (default), and `lg`.

<fwb-rating-example-star-sizes />
```vue
<template>
    <fwb-rating size="sm" :rating="4" />
    <fwb-rating size="md" :rating="4" />
    <fwb-rating size="lg" :rating="4" />
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
</script>
```

## Rating component API

### FwbRating Props

| Name       | Type                    | Default | Description                                                                 |
| ---------- | ----------------------- | ------- | --------------------------------------------------------------------------- |
| rating     | `Number`                | `3`     | The score to display. Fractional values render partial stars.               |
| reviewLink | `String`                | `''`    | URL applied to the review count text. Renders an `<a>` when set.           |
| reviewText | `String`                | `''`    | Text displayed as the review count label next to the stars.                 |
| scale      | `Number`                | `5`     | Total number of stars (the full-score denominator).                         |
| size       | `'sm' \| 'md' \| 'lg'` | `'md'`  | Controls the size of each star icon.                                        |

### FwbRating Slots

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| besideText | Content rendered next to the stars (e.g. a score label or review summary).  |
