<script setup>
import SpinnerBasicExample from './examples/SpinnerBasicExample.vue';
import SpinnerSizeExample from './examples/SpinnerSizeExample.vue';
</script>

# Spinner

reference: [https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)

## Basic example

<SpinnerBasicExample />

```vue
<script setup>
import { Spinner } from 'flowbite-vue'
</script>
<template>
  <div class="inline-flex align-center gap-2 flex-wrap">
    <spinner />
  </div>
</template>
```

## Prop - size

```typescript
defineProps({
    size: {
        type: String, // any string for w-${size} and h-${size} tailwind classes
        default: '4',
    },
})
```


<SpinnerSizeExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
    <Button color="default">Default</Button>
    <Button color="alternative">Alternative</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    <Button color="green">Green</Button>
    <Button color="red">Red</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="purple">Purple</Button>
</template>
```

