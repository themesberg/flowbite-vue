<script setup>
import FwbRadioExample from './radio/examples/FwbRadioExample.vue'
import FwbRadioExampleBordered from './radio/examples/FwbRadioExampleBordered.vue'
import FwbRadioExampleDisabled from './radio/examples/FwbRadioExampleDisabled.vue'
import FwbRadioExampleGroup from './radio/examples/FwbRadioExampleGroup.vue'
import FwbRadioExampleHelper from './radio/examples/FwbRadioExampleHelper.vue'
import FwbRadioExampleInline from './radio/examples/FwbRadioExampleInline.vue'
import FwbRadioExampleLink from './radio/examples/FwbRadioExampleLink.vue'
import FwbRadioExampleList from './radio/examples/FwbRadioExampleList.vue'
import FwbRadioExampleListHorizontal from './radio/examples/FwbRadioExampleListHorizontal.vue'
import FwbRadioExampleStyling from './radio/examples/FwbRadioExampleStyling.vue'
import FwbRadioExampleValidation from './radio/examples/FwbRadioExampleValidation.vue'
</script>

# Radio - Flowbite Vue

#### Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors

---

:::tip Radio - Flowbite
Original reference: [https://flowbite.com/docs/forms/radio/](https://flowbite.com/docs/forms/radio/)
:::

The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

## Default Radio

Use `FwbRadio` with `v-model` and a `value` prop to let the user select a single option. Pass `name` directly on each radio when used standalone, or use `FwbRadioGroup` to share it automatically across child radios.

<fwb-radio-example />
```vue
<template>
  <fwb-radio v-model="picked" name="radio" label="Radio 1" value="one" />
  <fwb-radio v-model="picked" name="radio" label="Radio 2" value="two" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref()
</script>

```

## Disabled State

Set the `disabled` prop to prevent the user from selecting the radio. Disabled styling is applied automatically to both the input and the label text.

<fwb-radio-example-disabled />
```vue
<template>
  <fwb-radio v-model="picked" disabled label="Disabled radio" name="radio-disabled" value="one" />
  <fwb-radio v-model="picked" disabled label="Disabled checked" name="radio-disabled" value="two" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('two')
</script>
```

## Radio Group

Use `FwbRadioGroup` to wrap related radio buttons. The `name` prop on the group is shared across all child radios automatically, so you don't need to repeat it on each one.

<fwb-radio-example-group />

```vue
<template>
  <fwb-radio-group name="fruit" label="Pick a fruit">
    <fwb-radio
      v-for="fruit in fruits"
      :key="fruit.value"
      v-model="picked"
      :label="fruit.label"
      :value="fruit.value"
    />
  </fwb-radio-group>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio, FwbRadioGroup } from 'flowbite-vue'

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

const picked = ref('banana')
</script>
```

## Inline Radio

Place multiple `FwbRadio` components inside a flex wrapper to lay them out horizontally side by side.

<fwb-radio-example-inline />
```vue
<template>
  <div class="flex gap-2">
    <fwb-radio v-model="picked" label="Inline 1" name="inline-radio" value="first" />
    <fwb-radio v-model="picked" label="Inline 2" name="inline-radio" value="second" />
    <fwb-radio v-model="picked" label="Inline 3" name="inline-radio" value="third" />
    <fwb-radio v-model="picked" label="Inline 4" name="inline-radio" value="fourth" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('first')
</script>

```

## Radio with a Link

Use the default slot instead of the `label` prop when the label contains rich content such as links.

<fwb-radio-example-link />
```vue
<template>
  <fwb-radio v-model="picked" name="with-link" value="first">
    I agree with the
    <fwb-a class="ml-1" href="#">terms and conditions</fwb-a>.
  </fwb-radio>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbRadio } from 'flowbite-vue'

const picked = ref()
</script>

```

## Radio List Group

Use `FwbListGroup` and `FwbListGroupItem` to display radio buttons inside a vertical grouped list.

<fwb-radio-example-list />
```vue
<template>
  <fwb-list-group>
    <fwb-list-group-item v-for="option in options" :key="option.value">
      <fwb-radio
        v-model="picked"
        :label="option.label"
        name="list-radio"
        :value="option.value"
        wrapper-class="-mx-4 -my-2 w-full px-4 py-2"
      />
    </fwb-list-group-item>
  </fwb-list-group>
</template>

<script setup>
import { ref } from 'vue'
import { FwbListGroup, FwbListGroupItem, FwbRadio } from 'flowbite-vue'

const options = [
  { label: 'Angular', value: 'Angular' },
  { label: 'React', value: 'React' },
  { label: 'Svelte', value: 'Svelte' },
  { label: 'Vue JS', value: 'Vue JS' },
]

const picked = ref('Vue JS')
</script>

```

## Horizontal List Group

Nest `FwbRadio` components inside a horizontal `<ul>` to create a full-width inline list selection.

<fwb-radio-example-list-horizontal />
```vue
<template>
  <ul class="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
    <li
      v-for="option in options"
      :key="option.value"
      class="flex w-full border-b border-gray-200 last:border-b-0 dark:border-gray-600 sm:border-b-0 sm:border-r sm:last:border-r-0"
    >
      <fwb-radio
        v-model="picked"
        :label="option.label"
        name="radio-horizontal"
        :value="option.value"
        wrapper-class="w-full py-2 pl-3"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const options = [
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue JS', value: 'vue' },
]

const picked = ref('vue')
</script>

```

## Bordered radio

Apply border styling directly to `FwbRadio` via `wrapper-class` to create a card-style selection option — no external wrapper element is needed.

<fwb-radio-example-bordered />
```vue
<template>
  <div class="grid grid-cols-2 gap-6">
    <fwb-radio
      v-model="picked"
      label="Radio 1"
      name="radio-bordered"
      value="one"
      wrapper-class="rounded border border-gray-200 p-2 dark:border-gray-700"
    />
    <fwb-radio
      v-model="picked"
      label="Radio 2"
      name="radio-bordered"
      value="two"
      wrapper-class="rounded border border-gray-200 p-2 dark:border-gray-700"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio } from 'flowbite-vue'

const picked = ref('one')
</script>

```

## Validation

Use `validationStatus` on `FwbRadioGroup` together with the `validationMessage` slot to show success or error feedback below the group.

<fwb-radio-example-validation />
```vue
<template>
  <div class="space-y-6">
    <fwb-radio-group name="fruit-success" label="Pick a fruit (success)" validation-status="success">
      <fwb-radio v-model="picked1" label="Apple" value="apple" />
      <fwb-radio v-model="picked1" label="Banana" value="banana" />
      <template #validationMessage>
        <span class="font-medium">Great!</span> You selected a fruit.
      </template>
    </fwb-radio-group>

    <fwb-radio-group name="fruit-error" label="Pick a fruit (error)" validation-status="error">
      <fwb-radio v-model="picked2" label="Apple" value="apple" />
      <fwb-radio v-model="picked2" label="Banana" value="banana" />
      <template #validationMessage>
        <span class="font-medium">Required!</span> Please select a fruit to continue.
      </template>
    </fwb-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio, FwbRadioGroup } from 'flowbite-vue'

const picked1 = ref('banana')
const picked2 = ref('')
</script>

```

## Helper text

Use the `helper` slot on `FwbRadioGroup` to show a hint below the group.

<fwb-radio-example-helper />
```vue
<template>
  <fwb-radio-group name="shipping" label="Shipping method">
    <fwb-radio v-model="picked" label="Standard (3–5 days)" value="standard" />
    <fwb-radio v-model="picked" label="Express (1–2 days)" value="express" />
    <template #helper>
      Delivery times are estimates and may vary during peak seasons.
    </template>
  </fwb-radio-group>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio, FwbRadioGroup } from 'flowbite-vue'

const picked = ref('standard')
</script>

```

## Styling

Use dedicated props to pass classes to individual elements.

<fwb-radio-example-styling />
```vue
<template>
  <fwb-radio-group
    name="styled"
    label="Custom styled group"
    wrapper-class="bg-amber-300 dark:bg-green-800 p-3 pt-2 border-2 border-amber-700 dark:border-green-400 rounded-lg"
    legend-class="mb-0 px-2 font-bold text-amber-900 dark:text-green-200"
  >
    <fwb-radio
      v-model="picked"
      label="Option A"
      value="a"
      class="text-amber-600 dark:text-green-500 focus:ring-amber-500 dark:focus:ring-green-400"
      label-class="text-amber-900 dark:text-green-200"
    />
    <fwb-radio
      v-model="picked"
      label="Option B"
      value="b"
      class="text-amber-600 dark:text-green-500 focus:ring-amber-500 dark:focus:ring-green-400"
      label-class="text-amber-900 dark:text-green-200"
    />
  </fwb-radio-group>
</template>

<script setup>
import { ref } from 'vue'
import { FwbRadio, FwbRadioGroup } from 'flowbite-vue'

const picked = ref('a')
</script>

```

## Radio component API

### FwbRadio Props

:::tip Native attribute passthrough
`FwbRadio` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `form`, `aria-label`) directly to the `<input type="radio">` element. When using radios outside a `FwbRadioGroup`, pass `name` as either a prop or an attribute.
:::

| Name         | Type               | Default | Description                                                                   |
| ------------ | ------------------ | ------- | ----------------------------------------------------------------------------- |
| class        | `String \| Object` | `''`    | Added to the radio input element.                                             |
| disabled     | `Boolean`          | `false` | Disables the radio.                                                           |
| label        | `String`           | `''`    | Label text rendered next to the radio. Ignored when the default slot is used. |
| labelClass   | `String \| Object` | `''`    | Added to the label text element.                                              |
| modelValue   | `Any`              | —       | The current value (use with `v-model`).                                       |
| name         | `String`           | `''`    | Groups radio buttons together. Inherited from `FwbRadioGroup` when omitted.   |
| value        | `String`           | `''`    | The value this radio represents.                                              |
| wrapperClass | `String \| Object` | `''`    | Added to the outer `<label>` element.                                         |

:::tip Accessibility
When a `FwbRadio` is inside a `FwbRadioGroup` with `validationStatus="error"`, `aria-invalid="true"` is set automatically on the input — you do not need to set it manually on individual radios. `aria-describedby` is managed at the fieldset level by `FwbRadioGroup`. For radios without a visible label, pass `aria-label` as an attribute — it is forwarded directly to the `<input type="radio">`.
:::

### FwbRadio Slots

| Name    | Description                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| default | Rich label content rendered next to the radio (takes priority over `label` prop). |

## RadioGroup component API

### FwbRadioGroup Props

:::tip Accessibility
`FwbRadioGroup` renders as a `<fieldset>` with a `<legend>`. `aria-invalid="true"` is set on every child `FwbRadio` when `validationStatus="error"`. `aria-describedby` on the fieldset is wired to the IDs of any rendered `validationMessage` and `helper` slots.
:::

| Name             | Type                   | Default     | Description                                                                     |
| ---------------- | ---------------------- | ----------- | ------------------------------------------------------------------------------- |
| label            | `String`               | `''`        | Legend text for the group. Ignored when the `legend` slot is used.              |
| legendClass      | `String \| Object`     | `''`        | Added to the `<legend>` element.                                                |
| name             | `String`               | —           | **Required.** Shared `name` attribute provided to all child `FwbRadio` inputs.  |
| validationStatus | `'success' \| 'error'` | `undefined` | Applies success or error colour styles and sets `aria-invalid` on child radios. |
| wrapperClass     | `String \| Object`     | `''`        | Added to the outer `<fieldset>` element.                                        |

### FwbRadioGroup Slots

| Name              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| default           | Container for `FwbRadio` instances.                                          |
| legend            | Rich legend content (takes priority over `label` prop).                      |
| helper            | Helper text rendered below the group.                                        |
| validationMessage | Validation feedback rendered below the group (styled by `validationStatus`). |
