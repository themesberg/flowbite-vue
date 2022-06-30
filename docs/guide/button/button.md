<script setup>
import ButtonColorExample from './ButtonColorExample.vue';
import ButtonSizeExample from './ButtonSizeExample.vue';
import ButtonPillExample from './ButtonPillExample.vue';
</script>

# Button

reference: [https://flowbite.com/docs/components/buttons/](https://flowbite.com/docs/components/buttons/)

## Props

### Color

```typescript
type ButtonVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
defineProps({
    color: {
        type: String as PropType<ButtonVariant>,
        default: 'default',
    }, 
})
```


<ButtonColorExample />

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


### Size

```typescript
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
defineProps({
    size: {
        type: String as PropType<ButtonSize>,
        default: 'md',
    },
})
```


<ButtonSizeExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button size="xs">XS</Button>
  <Button size="sm">SM</Button>
  <Button size="md">MD</Button>
  <Button size="lg">LG</Button>
  <Button size="xl">XL</Button>
</template>
```

### Pill

```typescript
defineProps({
    pill: {
        type: Boolean,
        default: false,
    },
})
```


<ButtonPillExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button color="default" pill>Default</Button>
  <Button color="alternative" pill>Alternative</Button>
  <Button color="dark" pill>Dark</Button>
  <Button color="light" pill>Light</Button>
  <Button color="green" pill>Green</Button>
  <Button color="red" pill>Red</Button>
  <Button color="yellow" pill>Yellow</Button>
  <Button color="purple" pill>Purple</Button>
</template>
```


