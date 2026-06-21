<script setup>
import FwbAlertExampleBorder from './alert/examples/FwbAlertExampleBorder.vue'
import FwbAlertExampleBorderAccent from './alert/examples/FwbAlertExampleBorderAccent.vue'
import FwbAlertExampleCustomContent from './alert/examples/FwbAlertExampleCustomContent.vue'
import FwbAlertExampleDismissable from './alert/examples/FwbAlertExampleDismissable.vue'
import FwbAlertExampleIcon from './alert/examples/FwbAlertExampleIcon.vue'
import FwbAlertExampleList from './alert/examples/FwbAlertExampleList.vue'
import FwbAlertExampleType from './alert/examples/FwbAlertExampleType.vue'
</script>

# Alert - Flowbite Vue

#### Show contextual information to your users using alert elements based on Tailwind CSS

---

:::tip Alert - Flowbite
Original reference: [https://flowbite.com/docs/components/alerts/](https://flowbite.com/docs/components/alerts/)
:::

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

## Default Alert

Use the `type` prop to set the alert color and intent. Available types are `info`, `warning`, `danger`, `dark`, and `success`.

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

## Alerts with Icon

Add the `icon` prop to include a contextual icon that matches the alert type alongside the message.

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

## Bordered Alerts

Add the `border` prop to apply a border accent to the alert instead of a plain background fill.

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

## Border Accent

Use Tailwind's `border-t-4` and `rounded-none` utility classes via the `class` prop to add a top border accent for additional visual distinction.

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
      Danger alert! Change a few things up and try submitting again.
    </fwb-alert>
    <fwb-alert class="border-t-4 rounded-none" icon type="dark">
      Dark alert! Change a few things up and try submitting again.
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

## Alerts with List

Use the default slot to place structured content such as a heading and a list inside the alert component.

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

Add the `closable` prop to render a close button on the alert. Clicking it emits a `close` event that you can use to remove the alert from the DOM.

<fwb-alert-example-dismissable />

```vue
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

## Additional Content

Use the `icon`, `title`, and default slots together to build a richer alert layout with a heading, extended body text, and action buttons. The default slot exposes an `onCloseClick` handler for wiring up a dismiss button.

<fwb-alert-example-custom-content />

```vue
<template>
  <fwb-alert type="info">
    <template #icon>
      <svg
        class="shrink-0 w-4 h-4 mr-2"
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
        <fwb-button
          color="blue"
          size="sm"
          class="mr-2 inline-flex items-center"
        >
          <template #prefix>
            <svg
              class="size-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </template>
          View more
        </fwb-button>
        <fwb-button
          size="sm"
          outline
          data-dismiss-target="#alert-additional-content-1"
          aria-label="Close"
          @click="onCloseClick"
        >
          Dismiss
        </fwb-button>
      </div>
    </template>
  </fwb-alert>
</template>

<script setup>
import { FwbAlert, FwbButton } from 'flowbite-vue'
</script>
```

## Alert component API

### FwbAlert Props

| Name     | Type                                                      | Default  | Description                                          |
| -------- | --------------------------------------------------------- | -------- | ---------------------------------------------------- |
| type     | `'info' \| 'danger' \| 'success' \| 'warning' \| 'dark'` | `'info'` | Sets the color scheme and semantic intent.           |
| closable | `Boolean`                                                 | `false`  | Renders a close button on the alert.                 |
| icon     | `Boolean`                                                 | `false`  | Renders a contextual icon matching the type.         |
| border   | `Boolean`                                                 | `false`  | Adds a border accent instead of a plain background.  |

### FwbAlert Events

| Name  | Description                               |
| ----- | ----------------------------------------- |
| close | Emitted when the close button is clicked. |

### FwbAlert Slots

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| default    | Alert body content. Exposes `onCloseClick` for wiring up a dismiss button.   |
| close-icon | Custom icon for the close button.                                            |
| icon       | Custom icon replacing the default type icon.                                 |
| title      | Title content rendered above the body.                                       |
