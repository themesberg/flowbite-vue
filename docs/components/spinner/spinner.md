<script setup>
import SpinnerBasicExample from './examples/SpinnerBasicExample.vue';
import SpinnerSizeExample from './examples/SpinnerSizeExample.vue';
import SpinnerColorExample from './examples/SpinnerColorExample.vue';
</script>

# Spinner

#### Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)
:::

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.


## Basic example

<SpinnerBasicExample />

```vue
<script setup>
import { Spinner } from 'flowbite-vue'
</script>
<template>
  <spinner />
</template>
```

## Prop - size

```typescript
type SpinnerSize = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

defineProps({
    size: {
        type: String as PropType<SpinnerSize>, // any string for w-${size} and h-${size} tailwind classes
        default: '4',
    },
})
```


<SpinnerSizeExample />

```vue
<script setup>
import { Spinner } from 'flowbite-vue'
</script>
<template>
  <spinner />
  <spinner size="6" />
  <spinner size="8" />
  <spinner size="10" />
  <spinner size="12" />
</template>
```


## Prop - color

```typescript
type SpinnerColor = 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink' | 'purple' | 'white'

defineProps({
    color: {
        type: String as PropType<SpinnerColor>,
        default: 'blue',
    },
})
```


<SpinnerColorExample />

```vue
<script setup>
import { Spinner } from 'flowbite-vue'
</script>
<template>
  <spinner color="blue" size="6" />
  <spinner color="pink" size="8" />
  <spinner color="gray" size="10" />
  <spinner color="green" size="12" />
  <spinner color="purple" size="10" />
  <spinner color="white" size="8" />
  <spinner color="yellow" size="6" />
  <spinner color="red" size="4" />
</template>
```

