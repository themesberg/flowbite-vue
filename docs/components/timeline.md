<script setup>
import FwbTimelineExample from './timeline/examples/FwbTimelineExample.vue'
import FwbTimelineExampleWithIcons from './timeline/examples/FwbTimelineExampleWithIcons.vue'
import FwbTimelineExampleHorizontal from './timeline/examples/FwbTimelineExampleHorizontal.vue'
</script>
# Vue Timeline - Flowbite

## Default timeline usage

<fwb-timeline-example />
```vue
<template>
  <fwb-timeline>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2020
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2020
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2020
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
  </fwb-timeline>
</template>

<script setup>
import {
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTime,
  FwbTimelineTitle,
} from 'flowbite-vue'
</script>
```

## Timeline with icons
You can add icons by passing svg icons as slot to `<fwb-timeline-point>` component

<fwb-timeline-example-with-icons />
```vue
<template>
  <fwb-timeline class="vp-raw">
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
  </fwb-timeline>
</template>

<script setup>
import {
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTime,
  FwbTimelineTitle,
} from 'flowbite-vue'
</script>
```
## Timeline with icons
`horizontal` prop makes timeline horizontal
<br>

<fwb-timeline-example-horizontal />
```vue
<template>
  <fwb-timeline horizontal>
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          fill-rule="evenodd"
        /></svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          fill-rule="evenodd"
        /></svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </fwb-timeline-point>
      <fwb-timeline-content>
        <fwb-timeline-time>
          February 2022
        </fwb-timeline-time>
        <fwb-timeline-title>
          Application UI code in Tailwind CSS
        </fwb-timeline-title>
        <fwb-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
  </fwb-timeline>
</template>

<script setup>
import {
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTime,
  FwbTimelineTitle,
} from 'flowbite-vue'
</script>
```
