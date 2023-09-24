<script setup>
import FwbAlertExampleBorder from './alert/examples/FwbAlertExampleBorder.vue'
import FwbAlertExampleBorderAccent from './alert/examples/FwbAlertExampleBorderAccent.vue'
import FwbAlertExampleCustomContent from './alert/examples/FwbAlertExampleCustomContent.vue'
import FwbAlertExampleDismissable from './alert/examples/FwbAlertExampleDismissable.vue'
import FwbAlertExampleIcon from './alert/examples/FwbAlertExampleIcon.vue'
import FwbAlertExampleList from './alert/examples/FwbAlertExampleList.vue'
import FwbAlertExampleType from './alert/examples/FwbAlertExampleType.vue'
</script>

# Vue Alert - Flowbite

#### Show contextual information to your users using alert elements based on Tailwind CSS
The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

## Default alert
Use the following examples of alert components to show messages as feedback to your users.

<fwb-alert-example-type />
```vue
<template>
  <div class="grid gap-2">
    <fwb-alert type="info">
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert type="warning">
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert type="danger">
      Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert type="dark">
      Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert type="success">
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Alerts with icon
You can also include a descriptive icon to complement the message inside the alert component with the following example.

<fwb-alert-example-icon />
```vue
<template>
  <div class="grid gap-2">
    <fwb-alert icon type="info">
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert icon type="warning">
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert icon type="danger">
      Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert icon type="dark">
      Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert icon type="success">
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Bordered alerts
Use this example to add a border accent to the alert component instead of just a plain background.

<fwb-alert-example-border />
```vue
<template>
  <div class="grid gap-2">
    <fwb-alert border type="info">
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert border type="warning">
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert border type="danger">
      Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert border type="dark">
      Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert border type="success">
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Border accent
Use this example to add a border accent on top of the alert component for further visual distinction.

<fwb-alert-example-border-accent />
```vue
<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert class="border-t-4 rounded-none" icon type="info">
      Info alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert class="border-t-4 rounded-none" icon type="warning">
      Warning alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert class="border-t-4 rounded-none" icon type="danger">
      Info Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert class="border-t-4 rounded-none" icon type="dark">
      Info Dark alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert class="border-t-4 rounded-none" icon type="success">
      Success alert! Change a few things up and try submitting again.
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Alerts with list
Use this example to show a list and a description inside an alert component.

<fwb-alert-example-list />
```vue
<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert type="info">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </fwb-alert>
    <fwb-alert type="danger">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Dismissing
Use the following alert elements that are also dismissable.

<fwb-alert-example-dismissable />
```vue
<script setup>
import { Alert } from 'flowbite-vue'
</script>
<template>
  <div class="vp-raw grid gap-2">
    <fwb-alert closable icon type="info">
      Info
    </fwb-alert>
    <fwb-alert closable icon type="warning">
      Warning
    </fwb-alert>
    <fwb-alert closable icon type="danger">
      Danger
    </fwb-alert>
    <fwb-alert closable icon type="dark">
      Dark
    </fwb-alert>
    <fwb-alert closable icon type="success">
      Success
    </fwb-alert>
  </div>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## Additional content
The following alert components can be used if you wish to disclose more information inside the element.

<fwb-alert-example-custom-content />

```vue
<template>
  <fwb-alert type="info">
    <template #icon>
      <svg
        class="flex-shrink-0 w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
    </template>
    <template #title>
      <h3 class="text-lg font-medium">
        This is a info alert
      </h3>
    </template>
    <template #default="{ onCloseClick }">
      <div class="mt-2 mb-4 text-sm">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <button
          type="button"
          class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="-ml-0.5 mr-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          View more
        </button>
        <button
          type="button"
          class="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800"
          data-dismiss-target="#alert-additional-content-1"
          aria-label="Close"
          @click="onCloseClick"
        >
          Dismiss
        </button>
      </div>
    </template>
  </fwb-alert>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```

## API

### Props
| Name     | Values                                        | Default |
|----------|-----------------------------------------------|---------|
| type     | `info`, `danger`, `success`,`warning`, `dark` | `info`  |
| closable | `boolean`                                     | `false` |
| icon     | `boolean`                                     | `false` |
| border   | `boolean`                                     | `false` |

### Events
| Name  | Description          |
|-------|----------------------|
| close | Close button pressed |

### Slots
| Name       | Description       |
|------------|-------------------|
| default    | alert content     |
| close-icon | custom close icon |
| icon       | custom icon       |
| title      | title content     |
