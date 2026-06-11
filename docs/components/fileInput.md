<script setup>
import FwbFileInputExample from './fileInput/examples/FwbFileInputExample.vue'
import FwbFileInputExampleHelper from './fileInput/examples/FwbFileInputExampleHelper.vue'
import FwbFileInputExampleMultiple from './fileInput/examples/FwbFileInputExampleMultiple.vue'
import FwbFileInputExampleSize from './fileInput/examples/FwbFileInputExampleSize.vue'
import FwbFileInputExampleStyling from './fileInput/examples/FwbFileInputExampleStyling.vue'
import FwbFileInputExampleDisabled from './fileInput/examples/FwbFileInputExampleDisabled.vue'
import FwbFileInputExampleValidation from './fileInput/examples/FwbFileInputExampleValidation.vue'
import FwbFileInputExampleDropZone from './fileInput/examples/FwbFileInputExampleDropZone.vue'
import FwbFileInputExampleDropZonePlaceholder from './fileInput/examples/FwbFileInputExampleDropZonePlaceholder.vue'
import FwbFileInputExampleDropZoneMultiple from './fileInput/examples/FwbFileInputExampleDropZoneMultiple.vue'
</script>

# Vue FileInput - Flowbite

#### Get started with the file input component to let users upload one or more files from their device storage based on multiple styles and sizes

---

:::tip FileInput - Flowbite
Original reference: [https://flowbite.com/docs/forms/file-input/](https://flowbite.com/docs/forms/file-input/)
:::

The file input component can be used to upload one or more files from a device, with multiple sizes, styles, and variants built using the utility-first classes from Tailwind CSS including support for dark mode.

## File upload example

Get started with a simple file input component to let users upload a single file.

<fwb-file-input-example />

```vue
<template>
  <fwb-file-input v-model="file" label="Upload file" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Sizes

Choose from the small, default, large, and extra large file input sizing options.

<fwb-file-input-example-size />

```vue
<template>
  <div class="grid gap-2">
    <fwb-file-input v-model="file" size="sm" label="Small size" />
    <fwb-file-input v-model="file" size="md" label="Default size" />
    <fwb-file-input v-model="file" size="lg" label="Large size" />
    <fwb-file-input v-model="file" size="xl" label="Extra large size" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Disabled

<fwb-file-input-example-disabled />

```vue
<template>
  <fwb-file-input v-model="file" label="Upload file" disabled />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Multiple files

Apply the `multiple` prop to allow more files to be selected at once.

<fwb-file-input-example-multiple />

```vue
<template>
  <fwb-file-input v-model="files" label="Upload files" multiple />
  <div v-if="files.length" class="mt-4 border border-gray-300 dark:border-gray-600 p-2 rounded-md">
    <div v-for="file in files" :key="`${file.name}-${file.size}-${file.lastModified}`">{{ file.name }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const files = ref([])
</script>
```

## Slot - Helper

Add a descriptive helper text to inform users about the allowed extensions and sizes of the files.

<fwb-file-input-example-helper />

```vue
<template>
  <fwb-file-input v-model="file" label="Upload file">
    <template #helper>
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </template>
  </fwb-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Validation

Set `validation-status` to `'success'` or `'error'` and use the `validationMessage` slot to display contextual feedback.

<fwb-file-input-example-validation />

```vue
<template>
  <div class="flex flex-col gap-4">
    <fwb-file-input
      v-model="file"
      validation-status="error"
      label="Upload file"
    >
      <template #validationMessage>
        Please select a valid file.
      </template>
    </fwb-file-input>
    <fwb-file-input
      v-model="file"
      validation-status="success"
      label="Upload file"
    >
      <template #validationMessage>
        File looks good!
      </template>
    </fwb-file-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Dropzone

The dropzone file input component can be used to upload one or more files by clicking anywhere in the area or by dragging and dropping.

<fwb-file-input-example-drop-zone />

```vue
<template>
  <fwb-file-input v-model="file" dropzone />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Dropzone with custom placeholder

Use the `dropzonePlaceholder` slot to customize the upload prompt text inside the dropzone.

<fwb-file-input-example-drop-zone-placeholder />

```vue
<template>
  <fwb-file-input v-model="file" dropzone>
    <template #dropzonePlaceholder>
      <span class="font-semibold">Choose your file</span>
      or drop it here
    </template>
  </fwb-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Dropzone multiple

<fwb-file-input-example-drop-zone-multiple />

```vue
<template>
  <fwb-file-input v-model="files" dropzone multiple />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const files = ref([])
</script>
```

## Styling File Inputs

Use dedicated props to pass classes to individual elements. Use `file:` variants inside `class` to style the file selector button.

<fwb-file-input-example-styling />

```vue
<template>
  <fwb-file-input
    v-model="file"
    label="Your portrait"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
    label-class="text-xl font-bold text-amber-900 dark:text-green-200"
    class="bg-amber-100 hover:file:bg-amber-600 dark:bg-green-900 dark:hover:file:bg-green-500 dark:file:bg-green-700 file:bg-amber-400 border-2 border-amber-500 focus:border-amber-900 dark:border-green-600 dark:focus:border-green-400 dark:file:border-green-600 file:border-amber-500 focus:ring-amber-300 dark:focus:ring-green-800 dark:file:text-green-100 file:text-amber-900"
    :class="file ? 'text-amber-900 dark:text-green-100' : 'text-amber-500 dark:text-green-500'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## FileInput component API

### FwbFileInput Props

:::tip Native attribute passthrough
`FwbFileInput` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `capture`, `form`, `name`) directly to the `<input type="file">` element.
:::

| Name             | Type                                  | Default     | Description                                                                                     |
| ---------------- | ------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| accept           | `String`                              | `''`        | Sets the accepted file types (e.g. `image/*`, `.pdf`).                                          |
| class            | `String \| Object`                    | `''`        | Added to the `<input type="file">` element. Use `file:` variants to style the selector button.  |
| disabled         | `Boolean`                             | `false`     | Disables the file input.                                                                        |
| dropzone         | `Boolean`                             | `false`     | Renders a drag-and-drop dropzone instead of the default file input.                             |
| label            | `String`                              | `''`        | Label text rendered above the input.                                                            |
| labelClass       | `String \| Object`                    | `''`        | Added to the label element (`<label>` in default mode, `<span>` in dropzone mode).              |
| multiple         | `Boolean`                             | `false`     | Allows selecting multiple files.                                                                |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'`        | `'md'`      | Controls the padding and font size of the file selector button.                                 |
| validationStatus | `'success' \| 'error'`                | `undefined` | Sets the validation state of the input.                                                         |
| wrapperClass     | `String \| Object`                    | `''`        | Added to the outermost wrapper `<div>`.                                                         |

:::warning Dropzone mode limitations
`class` and `size` have no effect in dropzone mode. `validationStatus` changes the label color only — input styling and validation messages are not rendered. `helper` and `validationMessage` slots are not rendered in dropzone mode.
:::

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native input when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute. These apply to the default (non-dropzone) rendering only.
:::

### FwbFileInput Slots

| Name                | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| helper              | Helper text shown below the input. Linked via `aria-describedby`.                   |
| validationMessage   | Validation feedback shown below the input. Linked via `aria-describedby`.           |
| dropzonePlaceholder | Custom content for the dropzone upload prompt (replaces default "Click to upload"). |
