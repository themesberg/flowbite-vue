<script setup>
import FwbTextareaExample from './textarea/examples/FwbTextareaExample.vue'
import FwbTextareaExampleComment from './textarea/examples/FwbTextareaExampleComment.vue'
import FwbTextareaExampleConstraints from './textarea/examples/FwbTextareaExampleConstraints.vue'
import FwbTextareaExampleDisabled from './textarea/examples/FwbTextareaExampleDisabled.vue'
import FwbTextareaExampleSize from './textarea/examples/FwbTextareaExampleSize.vue'
import FwbTextareaExampleStyling from './textarea/examples/FwbTextareaExampleStyling.vue'
import FwbTextareaExampleValidation from './textarea/examples/FwbTextareaExampleValidation.vue'
</script>

# Textarea - Flowbite Vue

#### Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

---

:::tip Textarea - Flowbite
Original reference: [https://flowbite.com/docs/forms/textarea/](https://flowbite.com/docs/forms/textarea/)
:::

The textarea component is a multi-line text field that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Default

Use `FwbTextarea` with `v-model` to bind a multi-line text value. Add `label` for an accessible label above the field and `placeholder` for hint text inside.

<fwb-textarea-example />

```vue
<template>
  <fwb-textarea
    v-model="message"
    label="Your message"
    placeholder="Write your message..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Sizes

Use the `size` prop to control the padding and font size of the textarea.

<fwb-textarea-example-size />

```vue
<template>
  <div class="flex flex-col gap-4">
    <fwb-textarea v-model="message" size="sm" label="Small" placeholder="Small textarea..." />
    <fwb-textarea v-model="message" size="md" label="Medium (default)" placeholder="Medium textarea..." />
    <fwb-textarea v-model="message" size="lg" label="Large" placeholder="Large textarea..." />
    <fwb-textarea v-model="message" size="xl" label="Extra large" placeholder="Extra large textarea..." />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Disabled / Readonly

Use the `disabled` prop to prevent the user from editing the textarea entirely, or pass `readonly` as a native attribute to allow reading but not editing.

<fwb-textarea-example-disabled />

```vue
<template>
  <div class="flex flex-col gap-4">
    <fwb-textarea
      v-model="message"
      label="Disabled textarea"
      placeholder="Cannot be edited"
      disabled
    />
    <fwb-textarea
      v-model="message"
      label="Readonly textarea"
      placeholder="Cannot be edited"
      readonly
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('Some content')
</script>
```

## Validation

Set `validation-status` to `'success'` or `'error'` and use the `validationMessage` slot (rich content), the `validationMessage` prop (plain string), or the `helper` slot to display contextual feedback. The slot takes priority over the prop when both are given.

<fwb-textarea-example-validation />

```vue
<template>
  <div class="flex flex-col gap-4">
    <fwb-textarea
      v-model="message"
      validation-status="error"
      validation-message="This field is required."
      label="Your message"
      placeholder="Write your message..."
    />
    <fwb-textarea
      v-model="message"
      validation-status="success"
      label="Your message"
      placeholder="Write your message..."
    >
      <template #helper>
        Looks good!
      </template>
    </fwb-textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Native Constraints

Use `required`, `minlength`, and `maxlength` as native attributes. Pair them with `validation-status` to surface feedback using the component's styled states.

<fwb-textarea-example-constraints />

```vue
<template>
  <form class="flex flex-col gap-4" @submit.prevent="submitted = true">
    <fwb-textarea
      v-model="message"
      :validation-status="validationStatus"
      label="Message (10–15 characters)"
      minlength="10"
      maxlength="15"
      required
    >
      <template v-if="validationStatus === 'error'" #validationMessage>
        {{ message.length === 0 ? 'This field is required.' : `Too short — ${message.length}/10 characters minimum.` }}
      </template>
      <template v-if="validationStatus === 'success'" #helper>
        Looks good!
      </template>
    </fwb-textarea>
    <fwb-button class="self-start" type="submit">Validate</fwb-button>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { FwbButton, FwbTextarea } from 'flowbite-vue'

const message = ref('')
const submitted = ref(false)

const validationStatus = computed(() => {
  if (!submitted.value) return undefined
  return message.value.length >= 10 ? 'success' : 'error'
})
</script>
```

## Slot - Footer

Use the `footer` slot to render actions or metadata below the textarea content — commonly used for submit buttons in comment forms.

<fwb-textarea-example-comment />

```vue
<template>
  <form>
    <fwb-textarea
      v-model="message"
      :rows="3"
      label="Your message"
      placeholder="Write your message..."
    >
      <template #footer>
        <div class="flex items-center justify-between">
          <fwb-button type="submit">
            Post comment
          </fwb-button>
        </div>
      </template>
    </fwb-textarea>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { FwbButton, FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Styling Textareas

Use dedicated props to pass classes to individual elements.

<fwb-textarea-example-styling />

```vue
<template>
  <fwb-textarea
    v-model="message"
    label="Your story"
    placeholder="Start typing something..."
    class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[textarea:focus]:border-amber-900 dark:border-green-600 dark:has-[textarea:focus]:border-green-400 has-[textarea:focus]:ring-amber-300 dark:has-[textarea:focus]:ring-green-800"
    label-class="text-xl font-bold text-amber-900 dark:text-green-200"
    :rows="3"
    textarea-class="text-amber-900 dark:text-green-100 placeholder:text-amber-500 dark:placeholder:text-green-500"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Textarea component API

### FwbTextarea Props

:::tip Native attribute passthrough
`FwbTextarea` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `placeholder`, `readonly`, `minlength`, `maxlength`) directly to the `<textarea>` element.
:::

| Name             | Type                                  | Default     | Description                                           |
| ---------------- | ------------------------------------- | ----------- | ----------------------------------------------------- |
| autocomplete     | `String \| Autocomplete`              | `'off'`     | Sets the autocomplete attribute on the textarea.      |
| class            | `String \| Object`                    | `''`        | Added to the wrapper `<div>` around the `<textarea>`. |
| disabled         | `Boolean`                             | `false`     | Disables the textarea.                                |
| footerClass      | `String \| Object`                    | `''`        | Added to the footer slot container.                   |
| label            | `String`                              | `''`        | Label text rendered above the textarea.               |
| labelClass       | `String \| Object`                    | `''`        | Added to the `<label>` element.                       |
| required         | `Boolean`                             | `false`     | Marks the textarea as required.                       |
| rows             | `Number`                              | `4`         | Number of visible text rows.                          |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'`        | `'md'`      | Controls padding and font size.                       |
| textareaClass    | `String \| Object`                    | `''`        | Added to the `<textarea>` element.                    |
| validationMessage | `String`                             | `undefined` | Validation feedback text; fallback for the `validationMessage` slot. |
| validationStatus | `'success' \| 'error'`                | `undefined` | Sets the validation state of the textarea.            |
| wrapperClass     | `String \| Object`                    | `''`        | Added to the outermost wrapper `<div>`.               |

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native textarea when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` (slot or prop) and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute.
:::

### FwbTextarea Slots

| Name              | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| footer            | Content rendered inside the textarea wrapper below the text area (e.g. submit button). |
| validationMessage | Validation feedback shown below the wrapper. Linked via `aria-describedby`. Takes priority over the `validationMessage` prop. |
| helper            | Helper text shown below the wrapper. Linked via `aria-describedby`.                    |
