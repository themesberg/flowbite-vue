<script setup>
import FwbButtonExampleColor from './button/examples/FwbButtonExampleColor.vue'
import FwbButtonExampleDisabled from './button/examples/FwbButtonExampleDisabled.vue'
import FwbButtonExampleGradientDuotone from './button/examples/FwbButtonExampleGradientDuotone.vue'
import FwbButtonExampleGradientMonochrome from './button/examples/FwbButtonExampleGradientMonochrome.vue'
import FwbButtonExampleLink from './button/examples/FwbButtonExampleLink.vue'
import FwbButtonExampleLoading from './button/examples/FwbButtonExampleLoading.vue'
import FwbButtonExampleOutline from './button/examples/FwbButtonExampleOutline.vue'
import FwbButtonExampleOutlineGradient from './button/examples/FwbButtonExampleOutlineGradient.vue'
import FwbButtonExamplePill from './button/examples/FwbButtonExamplePill.vue'
import FwbButtonExampleShadow from './button/examples/FwbButtonExampleShadow.vue'
import FwbButtonExampleSize from './button/examples/FwbButtonExampleSize.vue'
import FwbButtonExampleSlot from './button/examples/FwbButtonExampleSlot.vue'
import FwbButtonExampleSlotPrefix from './button/examples/FwbButtonExampleSlotPrefix.vue'
import FwbButtonExampleSlotSuffix from './button/examples/FwbButtonExampleSlotSuffix.vue'
import FwbButtonExampleSquare from './button/examples/FwbButtonExampleSquare.vue'
</script>

# Vue Button - Flowbite

#### Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

---

:::tip
Original reference: [https://flowbite.com/docs/components/buttons/](https://flowbite.com/docs/components/buttons/)
:::

The button component is one of the most widely used elements in any user interface. Use `FwbButton` to trigger actions or navigate to other pages — with support for colors, sizes, gradients, outlines, loading states, and router-link integration. The component defaults to `type="button"` to prevent accidental form submission; pass `type="submit"` or `type="reset"` explicitly when form interaction is needed.

## Button colors

Use the `color` prop to select a color variant. The default is blue (`color="default"` and `color="blue"` produce identical styling).

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
```

## Button sizes

Use the `size` prop to control the button's padding and font size. Available sizes are `xs`, `sm`, `md` (default), `lg`, and `xl`.

<fwb-button-example-size />
```vue
<template>
  <fwb-button size="xs">Extra Small</fwb-button>
  <fwb-button size="sm">Small</fwb-button>
  <fwb-button size="md">Medium</fwb-button>
  <fwb-button size="lg">Large</fwb-button>
  <fwb-button size="xl">Extra Large</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
```

## Pill buttons

Add the `pill` prop to apply fully rounded corners to any button variant.

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
```

## Outline buttons

Use the `outline` prop together with `color` to render a bordered button without a filled background.

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
```

## Gradient monochrome

Use the `gradient` prop with a single color name to apply a smooth gradient background.

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
```

## Gradient duotone

Use a duotone gradient name (two colors joined with a hyphen) to blend between two colors.

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
```

## Outline gradient

Combine `outline` with a duotone `gradient` to get a bordered button with a gradient hover effect.

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
```

## Button shadows

Use the `shadow` prop to add a colored drop shadow beneath the button. Pass a monochrome gradient color name to set an explicit shadow color, or pass `shadow` as a boolean to infer the color from the active `gradient`.

<fwb-button-example-shadow />
```vue
<template>
  <fwb-button gradient="blue" shadow>Blue with blue shadow</fwb-button>
  <fwb-button gradient="cyan" shadow>Cyan with cyan shadow</fwb-button>
  <fwb-button gradient="green" shadow>Green with green shadow</fwb-button>
  <fwb-button gradient="lime" shadow>Lime with lime shadow</fwb-button>
  <fwb-button gradient="pink" shadow>Pink with pink shadow</fwb-button>
  <fwb-button gradient="purple" shadow>Purple with purple shadow</fwb-button>
  <fwb-button gradient="red" shadow>Red with red shadow</fwb-button>
  <fwb-button gradient="teal" shadow>Teal with teal shadow</fwb-button>
  <fwb-button gradient="blue" shadow="red">Blue with red shadow</fwb-button>
  <fwb-button gradient="cyan" shadow="teal">Cyan with teal shadow</fwb-button>
  <fwb-button gradient="teal" shadow="purple">Teal with purple shadow</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
```

## Loading state

Use the `loading` prop to show a spinner inside the button. The spinner position defaults to `prefix` but can be changed to `suffix` with `loading-position`. While loading, `aria-busy="true"` is set automatically.

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
```

## Disabled state

Use the `disabled` prop to prevent interaction. The `disabled` HTML attribute is set only when the button renders as a `<button>` element — link buttons use opacity styling only.

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
```

## Button as link

Use the `href` prop to render the button as an `<a>` element. Extra attributes such as `target` and `rel` pass through to the anchor automatically. Use the `tag` prop with `router-link` or `nuxt-link` to integrate with your router.

<fwb-button-example-link />
```vue
<template>
  <fwb-button href="https://flowbite.com" target="_blank" rel="noopener">Flowbite</fwb-button>
  <fwb-button href="/getting-started" tag="router-link">Quickstart</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
```

## Square (icon) buttons

Use the `square` prop to apply equal padding on all sides — ideal for icon-only buttons. Combine with `pill` for circular icon buttons.

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
```

## Prefix and suffix

Use the `prefix` and `suffix` slots to add icons or other elements before or after the button label. The spinner replaces the slot content during loading.

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
```

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

<fwb-button-example-slot />
```vue
<template>
  <fwb-button gradient="purple-blue" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
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
```

## FwbButton API

:::tip Native attribute passthrough
`FwbButton` renders as `<button>`, `<a>`, or a router component depending on `href` and `to`. Extra attributes (e.g. `target`, `rel`, `aria-label`, `form`) fall through to the root element automatically.
:::

### FwbButton Props

| Name            | Type                                                                                                         | Default     | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------ |
| class           | `string \| Record<string, boolean> \| Array<string \| Record<string, boolean>>`                              | `''`        | Additional classes merged onto the button via `useMergeClasses` — overrides default styles. |
| color           | `'default' \| 'alternative' \| 'dark' \| 'light' \| 'green' \| 'red' \| 'yellow' \| 'purple' \| 'pink' \| 'blue'` | `'default'` | Button color variant. Ignored when `gradient` is set.                         |
| disabled        | `Boolean`                                                                                                    | `false`     | Disables the button. Sets the `disabled` attribute on `<button>`; applies opacity on links. |
| gradient        | `String`                                                                                                     | `null`      | Monochrome (`'blue'`, `'green'`, …) or duotone (`'purple-blue'`, …) gradient.        |
| href            | `String`                                                                                                     | `''`        | Renders the button as an `<a>` element with this `href`.                             |
| loading         | `Boolean`                                                                                                    | `false`     | Shows a spinner and sets `aria-busy="true"`.                                         |
| loadingPosition | `'prefix' \| 'suffix'`                                                                                       | `'prefix'`  | Position of the loading spinner.                                                     |
| outline         | `Boolean`                                                                                                    | `false`     | Renders a bordered button. Works with `color` and duotone `gradient`.                |
| pill            | `Boolean`                                                                                                    | `false`     | Applies fully rounded corners (`rounded-full`).                                      |
| shadow          | `String \| Boolean`                                                                                          | `false`     | Adds a colored drop shadow. Pass a monochrome gradient color or `true` to infer from `gradient`. |
| size            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                      | `'md'`      | Controls padding and font size.                                                      |
| square          | `Boolean`                                                                                                    | `false`     | Equal padding on all sides — intended for icon-only buttons.                         |
| tag             | `String`                                                                                                     | `'a'`       | Custom element/component used when `href` is set (e.g. `'router-link'`).             |
| to              | `String \| Object`                                                                                           | `undefined` | Renders as `router-link` with this `to` value. Takes priority over `href`.           |

### FwbButton Slots

| Name    | Description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| default | Button label content.                                                                     |
| prefix  | Content rendered before the label. Replaced by the spinner when `loading` is `true`.     |
| suffix  | Content rendered after the label. Replaced by the spinner when `loading-position="suffix"`. |
