<script setup>
import FwbRatingExample from './rating/examples/FwbRatingExample.vue'
import FwbRatingExampleWithText from './rating/examples/FwbRatingExampleWithText.vue'
import FwbRatingExampleCount from './rating/examples/FwbRatingExampleCount.vue'
import FwbRatingExampleStarSizes from './rating/examples/FwbRatingExampleStarSizes.vue'
</script>
# Vue Rating - Flowbite

## Default rating
Use this simple example of a star rating component for showing review results.

<fwb-rating-example />
```vue
<template>
  <fwb-rating :rating="4" />
</template>

<script setup>
import { FwbRating } from 'flowbite-vue'
</script>
```

## Rating with text
If you also want to show a text near the stars you can use this example as a reference.

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

## Rating count
Aggregate more results by using this example to show the amount of reviews and the average score.

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

## Star sizes
Check out the different sizing options for the star review component from small, medium, and large.

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
