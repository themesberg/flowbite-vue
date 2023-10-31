<script setup>
import FwbTextareaExample from './textarea/examples/FwbTextareaExample.vue'
import FwbTextareaExampleComment from './textarea/examples/FwbTextareaExampleComment.vue'
import FwbTextareaExampleDisabled from './textarea/examples/FwbTextareaExampleDisabled.vue'
import FwbTextareaExampleFormId from './textarea/examples/FwbTextareaExampleFormId.vue'
</script>

# Vue Textarea - Flowbite

#### Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/textarea/](https://flowbite.com/docs/forms/textarea/)
:::

## Textarea example

Get started with the default example of a textarea component below.

<fwb-textarea-example />
```vue
<template>
  <fwb-textarea
    v-model="message"
    :rows="4"
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

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

<fwb-textarea-example-comment />
```vue
<template>
  <div>
    <form>
      <fwb-textarea
        v-model="message"
        :rows="3"
        custom
        label="Your message"
        placeholder="Write your message..."
      >
        <template #footer>
          <div class="flex items-center justify-between">
            <fwb-button type="submit">
              Post comment
            </fwb-button>
            <div class="flex">
              <fwb-button class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" color square>
                <svg class="w-6 h-6" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </fwb-button>
              <fwb-button class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" color="" square >
                <svg class="w-6 h-6" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </fwb-button>
              <fwb-button class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" color="" square>
                <svg class="w-6 h-6" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </fwb-button>
            </div>
          </div>
        </template>
      </Textarea>
    </form>
    <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
      Remember, contributions to this topic should follow our
      <fwb-a href="#">Community Guidelines</fwb-a>.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbA, FwbButton, FwbTextarea } from 'flowbite-vue'

const message = ref('')
</script>
```

## Disabled / Readonly Textarea

<fwb-textarea-example-disabled />
```vue
<template>
  <div>
    <fwb-textarea
      v-model="message"
      label="Your message"
      placeholder="Write your message..."
      disabled
    />
    <fwb-textarea
      v-model="message"
      label="Your message"
      placeholder="Write your message..."
      readonly
    />
  </div>
</template>
```

## Textarea with form ID

<fwb-textarea-example-form-id />
```vue
<template>
  <div>
    <form id="my-form" @submit.prevent="handleSubmit">
      <!-- Inside the form -->
      <fwb-textarea
        v-model="message"
        label="Your message"
        placeholder="Write your message..."
      />
      <fwb-button type="submit">
        Submit
      </fwb-button>
    </form>

    <!-- Outside the form -->
    <fwb-textarea
      v-model="message"
      label="Your message"
      placeholder="Write your message..."
      form="my-form"
      required
    />
  </div>
</template>
```
