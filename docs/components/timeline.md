<script setup>
import TimelineExample from './timeline/examples/TimelineExample.vue';
import TimelineWithIconsExample from './timeline/examples/TimelineWithIconsExample.vue';
import TimelineHorizontalExample from './timeline/examples/TimelineHorizontalExample.vue';
</script>
# Vue Timeline Component - Flowbite

## Default timeline usage

<TimelineExample />

```vue
<script setup>
import { Timeline, TimelineItem, TimelinePoint, TimelineTime, TimelineContent, TimelineTitle, TimelineButton } from 'flowbite-vue'
</script>
<template>
  <Timeline>
    <timeline-item>
      <timeline-point>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2020
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
        <timeline-button>
          Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </timeline-button>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2020
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2020
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
  </Timeline>
</template>

```
## Timeline with icons
You can add icons by passing svg icons as slot to `<timeline-point></timeline-point>`
<br>

<TimelineWithIconsExample />

```vue
<script setup>
import { Timeline, TimelineItem, TimelinePoint, TimelineTime, TimelineContent, TimelineTitle, TimelineButton } from 'flowbite-vue'
</script>
<template>
  <Timeline>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
        <timeline-button>
          Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </timeline-button>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
  </Timeline>
</template>

```
## Timeline with icons
`horizontal` prop makes timeline horizontal
<br>

<TimelineHorizontalExample />

```vue
<script setup>
import { Timeline, TimelineItem, TimelinePoint, TimelineTime, TimelineContent, TimelineTitle, TimelineButton } from 'flowbite-vue'
</script>
<template>
  <Timeline>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
        <timeline-button>
          Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </timeline-button>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
    <timeline-item>
      <timeline-point>
        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </timeline-point>
      <timeline-content>
        <timeline-time>
          February 2022
        </timeline-time>
        <timeline-title>
          Application UI code in Tailwind CSS
        </timeline-title>
        <timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </timeline-body>
      </timeline-content>
    </timeline-item>
  </Timeline>
</template>

```
