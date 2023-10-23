<script setup>
import FwbButtonExampleColor from './button/examples/FwbButtonExampleColor.vue';
import FwbButtonExampleDisabled from './button/examples/FwbButtonExampleDisabled.vue';
import FwbButtonExampleGradientDuotone from './button/examples/FwbButtonExampleGradientDuotone.vue';
import FwbButtonExampleGradientMonochrome from './button/examples/FwbButtonExampleGradientMonochrome.vue';
import FwbButtonExampleLink from './button/examples/FwbButtonExampleLink.vue';
import FwbButtonExampleLoading from './button/examples/FwbButtonExampleLoading.vue';
import FwbButtonExampleOutline from './button/examples/FwbButtonExampleOutline.vue';
import FwbButtonExampleOutlineGradient from './button/examples/FwbButtonExampleOutlineGradient.vue';
import FwbButtonExamplePill from './button/examples/FwbButtonExamplePill.vue';
import FwbButtonExampleShadow from './button/examples/FwbButtonExampleShadow.vue';
import FwbButtonExampleSize from './button/examples/FwbButtonExampleSize.vue';
import FwbButtonExampleSlot from './button/examples/FwbButtonExampleSlot.vue';
import FwbButtonExampleSlotPrefix from './button/examples/FwbButtonExampleSlotPrefix.vue';
import FwbButtonExampleSlotSuffix from './button/examples/FwbButtonExampleSlotSuffix.vue';
import FwbButtonExampleSquare from './button/examples/FwbButtonExampleSquare.vue';
</script>

# Vue Button - Flowbite

#### Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

---

:::tip
Original reference: [https://flowbite.com/docs/components/buttons/](https://flowbite.com/docs/components/buttons/)
:::

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Prop - color

<fwb-button-example-color />
```vue
<template>
  <fwb-button color="default">Default</fwb-button>
  <fwb-button color="alternative">Alternative</fwb-button>
  <fwb-button color="dark">Dark</fwb-button>
  <fwb-button color="light">Light</fwb-button>
  <fwb-button color="green">Green</fwb-button>
  <fwb-button color="red">Red</fwb-button>
  <fwb-button color="yellow">Yellow</fwb-button>
  <fwb-button color="purple">Purple</fwb-button>
  <fwb-button color="pink">Pink</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````


## Prop - size

<fwb-button-example-size />
```vue
<template>
  <fwb-button size="xs">Extra Small - xs</fwb-button>
  <fwb-button size="sm">Small - sm</fwb-button>
  <fwb-button size="md">Medium - md</fwb-button>
  <fwb-button size="lg">Large - lg</fwb-button>
  <fwb-button size="xl">Extra Large - xl</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Prop - pill

<fwb-button-example-pill />
```vue
<template>
  <fwb-button color="default" pill>Default</fwb-button>
  <fwb-button color="alternative" pill>Alternative</fwb-button>
  <fwb-button color="dark" pill>Dark</fwb-button>
  <fwb-button color="light" pill>Light</fwb-button>
  <fwb-button color="green" pill>Green</fwb-button>
  <fwb-button color="red" pill>Red</fwb-button>
  <fwb-button color="yellow" pill>Yellow</fwb-button>
  <fwb-button color="purple" pill>Purple</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````


## Prop - gradient (monochrome)

<fwb-button-example-gradient-monochrome />
```vue
<template>
  <fwb-button gradient="blue">Blue</fwb-button>
  <fwb-button gradient="cyan">Cyan</fwb-button>
  <fwb-button gradient="green">Green</fwb-button>
  <fwb-button gradient="lime">Lime</fwb-button>
  <fwb-button gradient="pink">Pink</fwb-button>
  <fwb-button gradient="purple">Purple</fwb-button>
  <fwb-button gradient="red">Red</fwb-button>
  <fwb-button gradient="teal">Teal</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Prop - gradient (duotone)

<fwb-button-example-gradient-duotone />
```vue
<template>
  <fwb-button gradient="purple-blue">Purple to blue</fwb-button>
  <fwb-button gradient="cyan-blue">Cyan to blue</fwb-button>
  <fwb-button gradient="green-blue">Green to blue</fwb-button>
  <fwb-button gradient="purple-pink">Purple to pink</fwb-button>
  <fwb-button gradient="pink-orange">Pink to orange</fwb-button>
  <fwb-button gradient="teal-lime">Teal to lime</fwb-button>
  <fwb-button gradient="red-yellow">Red to yellow</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````


## Prop - outline

<fwb-button-example-outline />
```vue
<template>
  <fwb-button color="default" outline>Default</fwb-button>
  <fwb-button color="dark" outline>Dark</fwb-button>
  <fwb-button color="green" outline>Green</fwb-button>
  <fwb-button color="red" outline>Red</fwb-button>
  <fwb-button color="yellow" outline>Yellow</fwb-button>
  <fwb-button color="purple" outline>Purple</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Prop - outline (gradient)

<fwb-button-example-outline-gradient />
```vue
<template>
  <fwb-button gradient="purple-blue" outline>Purple to blue</fwb-button>
  <fwb-button gradient="cyan-blue" outline>Cyan to blue</fwb-button>
  <fwb-button gradient="green-blue" outline>Green to blue</fwb-button>
  <fwb-button gradient="purple-pink" outline>Purple to pink</fwb-button>
  <fwb-button gradient="pink-orange" outline>Pink to orange</fwb-button>
  <fwb-button gradient="teal-lime" outline>Teal to lime</fwb-button>
  <fwb-button gradient="red-yellow" outline>Red to yellow</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````

## Prop - shadow

<fwb-button-example-shadow />
```vue
<template>
  <fwb-button gradient="blue" shadow>Blue with blue</fwb-button>
  <fwb-button gradient="cyan" shadow>Cyan with cyan</fwb-button>
  <fwb-button gradient="green" shadow>Green with green</fwb-button>
  <fwb-button gradient="lime" shadow>Lime with lime</fwb-button>
  <fwb-button gradient="pink" shadow>Pink with pink</fwb-button>
  <fwb-button gradient="purple" shadow>Purple with purple</fwb-button>
  <fwb-button gradient="red" shadow>Red with red</fwb-button>
  <fwb-button gradient="teal" shadow>Teal with teal</fwb-button>
  <fwb-button gradient="blue" shadow="red">Blue with red</fwb-button>
  <fwb-button gradient="cyan" shadow="teal">Cyan with teal</fwb-button>
  <fwb-button gradient="teal" shadow="purple">Teal with purple</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Prop - square

<fwb-button-example-square />
```vue
<template>
  <fwb-button gradient="red-yellow" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </fwb-button>
  <fwb-button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </fwb-button>
  <fwb-button color="dark" outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </fwb-button>
  <fwb-button color="yellow" outline pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````

## Prop - loading

<fwb-button-example-loading />
```vue
<template>
  <fwb-button :disabled="loading" :loading="loading" gradient="purple-blue" outline size="xs" @click="loading = !loading">
    Click me
  </fwb-button>
  <fwb-button :loading="loading" gradient="red-yellow" size="sm" @click="loading = !loading">
    Click me
  </fwb-button>
  <fwb-button :loading="loading" color="default" loading-position="suffix" outline @click="loading = !loading">
    Click me
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-button>
  <fwb-button :loading="loading" gradient="green-blue" size="lg" @click="loading = !loading">
    Click me
  </fwb-button>
  <fwb-button :loading="loading" gradient="pink" size="xl" @click="loading = !loading">
    Click me
  </fwb-button>
</template>

<script setup>
import { ref } from 'vue'
import { FwbButton } from 'flowbite-vue'

const loading = ref(false)
</script>
````

## Prop - disabled

<fwb-button-example-disabled />
```vue
<template>
  <fwb-button color="default" disabled>Default</fwb-button>
  <fwb-button color="default" outline disabled>Default outline</fwb-button>
  <fwb-button gradient="red" disabled>Red gradient</fwb-button>
  <fwb-button gradient="red-yellow" disabled>Red to yellow gradient</fwb-button>
  <fwb-button gradient="red-yellow" outline disabled>Red to yellow outline</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````

## Prop - href
You can add a link to a `Button` component.
Additionally you can add `tag` prop to change button component to `router-link`

<fwb-button-example-link />
```vue
<template>
  <fwb-button href="https://google.com" target="_blank">Google.com</fwb-button>
  <fwb-button href="/pages/getting-started" tag="router-link">Quickstart</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Slot - default

<fwb-button-example-slot />
```vue
<template>
  <fwb-button gradient="purple-blue" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </fwb-button>
  <fwb-button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </fwb-button>
  <fwb-button gradient="green-blue" square>
    Close something
  </fwb-button>
  <fwb-button color="default" outline pill square>
    Open something
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

````

## Slot - prefix

<fwb-button-example-slot-prefix />
```vue
<template>
  <fwb-button>
    <template #prefix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    </template>
    Buy
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
````

## Slot - suffix

<fwb-button-example-slot-suffix />
```vue
<template>
  <fwb-button>
    Choose plan
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>

```

## Button API

### Props
| Name             | Type    | Values                                                                                         | Default   |
|------------------|---------|------------------------------------------------------------------------------------------------|-----------|
| color            | String  | `default`, `alternative`, `dark`, `light`, `green`, `red`, `yellow`, `purple`, `pink`, `blue`  | `default` |
| disabled         | Boolean |                                                                                                | `false`   |
| gradient         | String  | monochrome:<br>`blue`, `green`, `cyan`, `teal`, `lime`, `red`, `pink`, `purple`<br>duotone:<br>`purple-blue`, `cyan-blue`, `green-blue`, `purple-pink`, `pink-orange`, `teal-lime`, `red-yellow`                                      | `null`    |
| href             | String  |                                                                                                | `''`      |
| loading          | Boolean |                                                                                                | `false`   |
| loading-position | String  |  `prefix`, `suffix`                                                                            | `prefix`  |
| outline          | Boolean |                                                                                                | `false`   |
| pill             | Boolean |                                                                                                | `false`   |
| shadow           | String  | `blue`, `green`, `cyan`, `teal`, `lime`, `red`, `pink`, `purple`                               | `null`    |
| size             | String  | `xs`, `sm`, `md`, `lg`, `xl`                                                                   | `md`      |
| square           | Boolean |                                                                                                | `false`   |
| tag              | String  |                                                                                                | `a`       |
```
