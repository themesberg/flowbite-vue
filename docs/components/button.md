<script setup>
import ButtonColorExample from './button/examples/ButtonColorExample.vue';
import ButtonSizeExample from './button/examples/ButtonSizeExample.vue';
import ButtonPillExample from './button/examples/ButtonPillExample.vue';
import ButtonGradientMonochromeExample from './button/examples/ButtonGradientMonochromeExample.vue';
import ButtonGradientDuotoneExample from './button/examples/ButtonGradientDuotoneExample.vue';
import ButtonOutlineColorExample from './button/examples/ButtonOutlineColorExample.vue';
import ButtonPrefixExample from './button/examples/ButtonPrefixExample.vue';
import ButtonSuffixExample from './button/examples/ButtonSuffixExample.vue';
import ButtonOutlineGradientExample from './button/examples/ButtonOutlineGradientExample.vue';
import ButtonGradientShadowExample from './button/examples/ButtonGradientShadowExample.vue';
import ButtonIconExample from './button/examples/ButtonIconExample.vue';
import ButtonSquareExample from './button/examples/ButtonSquareExample.vue';
import ButtonDisabledExample from './button/examples/ButtonDisabledExample.vue';
import ButtonLoadingExample from './button/examples/ButtonLoadingExample.vue';
</script>

# Vue Button Component - Flowbite

#### Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

---

:::tip
Original reference: [https://flowbite.com/docs/components/buttons/](https://flowbite.com/docs/components/buttons/)
:::

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Prop - color

```typescript
type ButtonVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'blue'
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


## Prop - size

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

## Prop - pill

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

## Prop - gradient (monochrome)

```typescript
type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
type ButtonDuotoneGradient = 'purple-blue' | 'cyan-blue' | 'green-blue' | 'purple-pink' | 'pink-orange' | 'teal-lime' | 'red-yellow'
type ButtonGradient = ButtonDuotoneGradient | ButtonMonochromeGradient

defineProps({
    gradient: {
        type: [String, null] as PropType<ButtonGradient | null>,
        default: null,
    },
})
```


<ButtonGradientMonochromeExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="blue">Blue</Button>
  <Button gradient="cyan">Cyan</Button>
  <Button gradient="green">Green</Button>
  <Button gradient="lime">Lime</Button>
  <Button gradient="pink">Pink</Button>
  <Button gradient="purple">Purple</Button>
  <Button gradient="red">Red</Button>
  <Button gradient="teal">Teal</Button>
</template>
```


## Prop - gradient  (duotone)

<ButtonGradientDuotoneExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="purple-blue">Purple to blue</Button>
  <Button gradient="cyan-blue">Cyan to blue</Button>
  <Button gradient="green-blue">Green to blue</Button>
  <Button gradient="purple-pink">Purple to pink</Button>
  <Button gradient="pink-orange">Pink to orange</Button>
  <Button gradient="teal-lime">Teal to lime</Button>
  <Button gradient="red-yellow">Red to yellow</Button>
</template>
```

## Prop - outline (color)

```typescript
defineProps({
    outline: {
        type: Boolean,
        default: false,
    },
})
```


<ButtonOutlineColorExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="purple-blue">Purple to blue</Button>
  <Button gradient="cyan-blue">Cyan to blue</Button>
  <Button gradient="green-blue">Green to blue</Button>
  <Button gradient="purple-pink">Purple to pink</Button>
  <Button gradient="pink-orange">Pink to orange</Button>
  <Button gradient="teal-lime">Teal to lime</Button>
  <Button gradient="red-yellow">Red to yellow</Button>
</template>
```


## Prop - outline (gradient)

<ButtonOutlineGradientExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="purple-blue" outline>Purple to blue</Button>
  <Button gradient="cyan-blue" outline>Cyan to blue</Button>
  <Button gradient="green-blue" outline>Green to blue</Button>
  <Button gradient="purple-pink" outline>Purple to pink</Button>
  <Button gradient="pink-orange" outline>Pink to orange</Button>
  <Button gradient="teal-lime" outline>Teal to lime</Button>
  <Button gradient="red-yellow" outline>Red to yellow</Button>
</template>
```

## Prop - shadow

```typescript
type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'

defineProps({
    shadow: {
        type: [String, null] as PropType<ButtonMonochromeGradient | '' | null>,
        default: null,
    },
})
```

<ButtonGradientShadowExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="blue" shadow>Blue</Button>
  <Button gradient="cyan" shadow>Cyan</Button>
  <Button gradient="green" shadow>Green</Button>
  <Button gradient="lime" shadow>Lime</Button>
  <Button gradient="pink" shadow>Pink</Button>
  <Button gradient="purple" shadow>Purple</Button>
  <Button gradient="red" shadow>Red</Button>
  <Button gradient="teal" shadow>Teal</Button>
</template>
```


## Prop - square

```typescript
defineProps({
    square: {
        type: Boolean,
        default: false,
    },
})
```


<ButtonSquareExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="red-yellow" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="dark" outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="yellow" pill outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
</template>
```


## Prop - loading

```typescript
defineProps({
    loading: {
        type: Boolean,
        default: false,
    },
    loadingPosition: {
        type: String as PropType<'suffix' | 'prefix'>,
        default: 'prefix',
    },
})
```


<ButtonLoadingExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
const loading = ref(false)
</script>
<template>
  <Button gradient="purple-blue" outline :disabled="loading" :loading="loading" @click="loading = !loading" size="xs">
    Click me
  </Button>
  <Button gradient="red-yellow" :loading="loading" @click="loading = !loading" size="sm">
    Click me
  </Button>
  <Button outline color="default" loading-position="suffix" :loading="loading" @click="loading = !loading">
    Click me
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
      </svg>
    </template>
  </Button>
  <Button gradient="green-blue" :loading="loading" @click="loading = !loading" size="lg">
    Click me
  </Button>
  <Button gradient="pink" :loading="loading" @click="loading = !loading" size="xl">
    Click me
  </Button>
</template>
```


## Prop - disabled

```typescript
defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
})
```


<ButtonDisabledExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="red-yellow" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="dark" outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="yellow" pill outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
</template>
```


## Slot - default

<ButtonIconExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button gradient="purple-blue" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
  <Button gradient="green-blue" square>
    Close something
  </Button>
  <Button color="default" pill outline square>
    Open something
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </template>
  </Button>
</template>
```

## Slot - prefix

<ButtonPrefixExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button color="default">
    <template #prefix>
      <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    </template>
    Buy
  </Button>
</template>
```

## Slot - suffix

<ButtonSuffixExample />

```vue
<script setup>
import { Button } from 'flowbite-vue'
</script>
<template>
  <Button color="default">
    Choose plan
    <template #suffix>
      <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </template>
  </Button>
</template>
```
