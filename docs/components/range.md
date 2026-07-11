<script setup>
import FwbRangeExample from './range/examples/FwbRangeExample.vue'
import FwbRangeExampleDisabled from './range/examples/FwbRangeExampleDisabled.vue'
import FwbRangeExampleHelper from './range/examples/FwbRangeExampleHelper.vue'
import FwbRangeExampleMinMax from './range/examples/FwbRangeExampleMinMax.vue'
import FwbRangeExampleSize from './range/examples/FwbRangeExampleSize.vue'
import FwbRangeExampleSteps from './range/examples/FwbRangeExampleSteps.vue'
import FwbRangeExampleStyling from './range/examples/FwbRangeExampleStyling.vue'
import FwbRangeExampleValidation from './range/examples/FwbRangeExampleValidation.vue'
</script>

# Range - Flowbite Vue

#### Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options

---

:::tip Range - Flowbite
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/range/)
:::

The range component can be used to let the user select a numeric value by dragging a slider handle. It supports custom min/max bounds, step increments, sizes, validation feedback, and helper text, all styled with Tailwind CSS utility classes.

## Default

Use `FwbRange` with `v-model.number` to bind a numeric value to the slider.

<fwb-range-example />
```vue
<template>
  <fwb-range v-model.number="value" />
  <pre>Current value: {{ value }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRange } from 'flowbite-vue'

const value = ref(50)
</script>

```

## Disabled State

Set the `disabled` prop to prevent interaction with the slider.

<fwb-range-example-disabled />
```vue
<template>
  <fwb-range
    v-model.number="value"
    disabled
    label="Disabled range"
  />
</template>
```

## Min and Max

Use the `min` and `max` props to constrain the range of values the slider can return.

<fwb-range-example-min-max />
```vue
<template>
  <fwb-range
    v-model.number="value"
    :min="5"
    :max="15"
    label="Min-Max range"
  />
</template>
```

## Steps

Use the `steps` prop to set the increment between each selectable value on the slider track.

<fwb-range-example-steps />
```vue
<template>
  <fwb-range
    v-model.number="value"
    :steps="5"
    label="Steps range"
  />
</template>
```

## Sizes

Use the `size` prop to control the height of the slider track and thumb. Available sizes are `sm`, `md` (default), `lg`, and `xl`.

<fwb-range-example-size />
```vue
<template>
  <fwb-range v-model.number="value" label="Small" size="sm" />
  <fwb-range v-model.number="value" label="Medium" size="md" />
  <fwb-range v-model.number="value" label="Large" size="lg" />
  <fwb-range v-model.number="value" label="Extra Large" size="xl" />
</template>
```

## Validation

Use `validationStatus` together with the `validationMessage` slot (rich content) or the `validationMessage` prop (plain string) to show success or error feedback below the range. The slot takes priority when both are given.

<fwb-range-example-validation />
```vue
<template>
  <fwb-range v-model.number="value" label="Volume (success)" validation-status="success">
    <template #validationMessage>
      <span class="font-medium">Looks good!</span> Volume is set correctly.
    </template>
  </fwb-range>
  <fwb-range
    v-model.number="value"
    label="Volume (error)"
    validation-message="Too loud! Please lower the volume."
    validation-status="error"
  />
</template>
```

## Helper Text

Use the `helper` slot to show a hint below the range input.

<fwb-range-example-helper />
```vue
<template>
  <fwb-range v-model.number="value" label="Brightness">
    <template #helper>
      Adjust screen brightness between 0 and 100.
    </template>
  </fwb-range>
</template>
```

## Styling

Use dedicated props to pass classes to individual elements.

<fwb-range-example-styling />
```vue
<template>
  <fwb-range
    v-model.number="value"
    label="Volume"
    class="bg-amber-200 dark:bg-green-900"
    label-class="text-xl font-bold text-amber-900 dark:text-green-200"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3 [--fwb-range-thumb-color:var(--color-amber-600)] dark:[--fwb-range-thumb-color:var(--color-green-400)]"
  />
</template>
```

## Range component API

### FwbRange Props

:::tip Native attribute passthrough
`FwbRange` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `name`, `form`, `aria-label`) directly to the `<input type="range">` element.
:::

| Name             | Type                           | Default     | Description                                                                        |
| ---------------- | ------------------------------ | ----------- | ---------------------------------------------------------------------------------- |
| class            | `String \| Object`             | `''`        | Added to the `<input>` element.                                                    |
| disabled         | `Boolean`                      | `false`     | Disables the range input.                                                          |
| label            | `String`                       | `''`        | Label text rendered above the input. When empty, no `<label>` element is rendered. |
| labelClass       | `String \| Object`             | `''`        | Added to the `<label>` element.                                                    |
| max              | `Number`                       | `100`       | Maximum value.                                                                     |
| min              | `Number`                       | `0`         | Minimum value.                                                                     |
| modelValue       | `Number`                       | `50`        | The current value (use with `v-model`).                                            |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Controls track height and thumb size.                                              |
| steps            | `Number`                       | `1`         | Step increment between values.                                                     |
| validationMessage | `String`                      | `undefined` | Validation feedback text; fallback for the `validationMessage` slot.               |
| validationStatus | `'success' \| 'error'`         | `undefined` | Applies success or error colour styles to the label.                               |
| wrapperClass     | `String \| Object`             | `''`        | Added to the outer root `<div>`.                                                   |

:::tip Thumb colour
The thumb colour defaults to blue-500 and can be overridden by setting the `--fwb-range-thumb-color` CSS custom property on any ancestor element. With Tailwind v4, use an arbitrary class on `wrapperClass`:
`[--fwb-range-thumb-color:var(--color-amber-600)]`
:::

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native input when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` (slot or prop) and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute. When no `label` prop is provided, pass `aria-label` as an attribute to maintain an accessible name — it is forwarded directly to the `<input>`.
:::

### FwbRange Slots

| Name              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| helper            | Helper text rendered below the range input.                                  |
| validationMessage | Validation feedback rendered below the input (styled by `validationStatus`). Takes priority over the `validationMessage` prop. |
