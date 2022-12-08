<script setup>
import RatingExample from './examples/RatingExample.vue'
import RatingWithTextExample from './examples/RatingWithTextExample.vue'
import RatingCountExample from './examples/RatingCountExample.vue'
import RatingStarSizesExample from './examples/RatingStarSizesExample.vue'
</script>
# Vue Rating Component - Flowbite

## Default rating
Use this simple example of a star rating component for showing review results.
```vue
<script setup>
import { Rating } from 'flowbite-vue'
</script>
<template>
  <Rating></Rating>
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
  <Rating></Rating>
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
  <Rating></Rating>
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
  <Rating></Rating>
</template>
```

<RatingStarSizesExample />
