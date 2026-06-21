<script setup>
import FwbCheckboxExample from './checkbox/examples/FwbCheckboxExample.vue'
import FwbCheckboxExampleDisabled from './checkbox/examples/FwbCheckboxExampleDisabled.vue'
import FwbCheckboxExampleGroup from './checkbox/examples/FwbCheckboxExampleGroup.vue'
import FwbCheckboxExampleHelper from './checkbox/examples/FwbCheckboxExampleHelper.vue'
import FwbCheckboxExampleLink from './checkbox/examples/FwbCheckboxExampleLink.vue'
import FwbCheckboxExampleStyling from './checkbox/examples/FwbCheckboxExampleStyling.vue'
import FwbCheckboxExampleValidation from './checkbox/examples/FwbCheckboxExampleValidation.vue'
</script>

# Checkbox - Flowbite Vue

#### Use the checkbox component to allow users to select one or more options from a set, with support for validation, helper text, and accessible label linking

---

:::tip Checkbox - Flowbite
Original reference: [https://flowbite.com/docs/forms/checkbox/](https://flowbite.com/docs/forms/checkbox/)
:::

The checkbox component can be used to allow users to select one or more options in the form of a square box. It supports helper text, validation feedback, rich label content via a slot, and attribute passthrough to the native `<input>` element.

## Default Checkbox

Use `v-model` to bind the checked state and the `label` prop to set the visible label text.

<fwb-checkbox-example />

```vue
<template>
  <fwb-checkbox v-model="check" label="Default checkbox" />
  <fwb-checkbox v-model="checked" label="Checked state" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
const checked = ref(true)
</script>
```

## Disabled State

Add the `disabled` prop to prevent the user from interacting with the checkbox.

<fwb-checkbox-example-disabled />

```vue
<template>
  <fwb-checkbox v-model="check" disabled label="Disabled checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Checkbox with Link

Use the default slot instead of the `label` prop when the label contains rich content such as links.

<fwb-checkbox-example-link />

```vue
<template>
  <fwb-checkbox v-model="check">
    I agree with the
    <fwb-a class="text-blue-600 hover:underline" href="#">terms and conditions.</fwb-a>
  </fwb-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbCheckbox } from 'flowbite-vue'

const check = ref(false)
</script>
```

## Checkbox Group

When using `v-model` with an array, pass the `:value` attribute on each checkbox. Selected values are added to or removed from the array automatically.

<fwb-checkbox-example-group />

```vue
<template>
  <div class="space-y-2">
    <fwb-checkbox
      v-for="(fruit, i) in fruits"
      :key="i"
      v-model="selectedFruits"
      :label="fruit"
      :value="fruit"
      name="fruits"
    />
    <p class="text-sm text-gray-500">Selected: {{ selectedFruits }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbCheckbox } from 'flowbite-vue'

const selectedFruits = ref(['Banana'])
const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']
</script>
```

## Validation

Use `validationStatus` together with the `validationMessage` slot to show success or error feedback below the checkbox.

<fwb-checkbox-example-validation />

```vue
<template>
  <fwb-checkbox v-model="check1" label="Terms accepted (success)" validation-status="success">
    <template #validationMessage>
      <span class="font-medium">Great!</span> You have accepted the terms.
    </template>
  </fwb-checkbox>
  <fwb-checkbox v-model="check2" label="Terms not accepted (error)" validation-status="error">
    <template #validationMessage>
      <span class="font-medium">Required!</span> You must accept the terms to continue.
    </template>
  </fwb-checkbox>
</template>
```

## Helper Text

Use the `helper` slot to show a hint below the checkbox.

<fwb-checkbox-example-helper />

```vue
<template>
  <fwb-checkbox v-model="check" label="Free shipping via Flowbite">
    <template #helper>
      For orders shipped from $25 in books or $29 in other categories.
    </template>
  </fwb-checkbox>
</template>
```

## Styling

Use dedicated props to pass classes to individual elements inside the checkbox.

<fwb-checkbox-example-styling />

```vue
<template>
  <fwb-checkbox
    v-model="check"
    label="Custom styled checkbox"
    class="text-amber-600 dark:text-green-500 bg-amber-50 dark:bg-green-900 border-amber-400 dark:border-green-600 focus:ring-amber-500 dark:focus:ring-green-400"
    label-class="font-bold text-amber-900 dark:text-green-200"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
  />
</template>
```

## Checkbox component API

### FwbCheckbox Props

:::tip Native attribute passthrough
`FwbCheckbox` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `name`, `value`, `form`, `aria-label`) directly to the `<input type="checkbox">` element. Pass `:value` and `name` as regular attributes when using the checkbox in a group.
:::

| Name             | Type                   | Default     | Description                                                                      |
| ---------------- | ---------------------- | ----------- | -------------------------------------------------------------------------------- |
| class            | `String \| Object`     | `''`        | Added to the checkbox input element.                                             |
| disabled         | `Boolean`              | `false`     | Disables the checkbox.                                                           |
| label            | `String`               | `''`        | Label text rendered next to the checkbox. Ignored when the default slot is used. |
| labelClass       | `String \| Object`     | `''`        | Added to the label text element.                                                 |
| modelValue       | `Boolean \| Array`     | `false`     | The current value (use with `v-model`). Pass an array for group checkboxes.      |
| validationStatus | `'success' \| 'error'` | `undefined` | Applies success or error colour styles to the label text.                        |
| wrapperClass     | `String \| Object`     | `''`        | Added to the outer root `<div>`.                                                 |

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native checkbox when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute. When no `label` prop or default slot is provided, pass `aria-label` as an attribute to maintain an accessible name — it is forwarded directly to the `<input>`.
:::

### FwbCheckbox Slots

| Name              | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| default           | Rich label content rendered next to the checkbox (takes priority over `label` prop). |
| helper            | Helper text rendered below the checkbox.                                             |
| validationMessage | Validation feedback rendered below the checkbox (styled by `validationStatus`).      |
