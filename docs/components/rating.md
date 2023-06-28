<script setup>
import RatingExample from './rating/examples/RatingExample.vue'
import RatingWithTextExample from './rating/examples/RatingWithTextExample.vue'
import RatingCountExample from './rating/examples/RatingCountExample.vue'
import RatingStarSizesExample from './rating/examples/RatingStarSizesExample.vue'
</script>
# Vue Rating - Flowbite

## Default rating
Use this simple example of a star rating component for showing review results.
```vue
<script setup>
import { Rating } from 'flowbite-vue'
</script>
<template>
    <Rating :rating="4" />
</template>
```

<RatingExample />

## Rating with text
If you also want to show a text near the stars you can use this example as a reference.
```vue
<script setup>
import { Rating } from 'flowbite-vue'
</script>
<template>
    <Rating :rating="4">
      <template #besideText>
          <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </template>
    </Rating>
</template>
```

<RatingWithTextExample />

## Rating count
Aggregate more results by using this example to show the amount of reviews and the average score.
```vue
<script setup>
import { Rating } from 'flowbite-vue'
</script>
<template>
    <Rating
      :rating="1"
      :scale="1"
      review-text="73 reviews"
      review-link="#"
    >
      <template #besideText>
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
      </template>
    </Rating>
</template>
```

<RatingCountExample />

## Star sizes
Check out the different sizing options for the star review component from small, medium, and large.
```vue
<script setup>
import { Rating } from 'flowbite-vue'
</script>
<template>
    <!-- Small -->
    <Rating size="sm" :rating="4" />
    <!-- Medium -->
    <Rating size="md" :rating="4" />
    <!-- Large -->
    <Rating size="lg" :rating="4" />
</template>
```

<RatingStarSizesExample />
