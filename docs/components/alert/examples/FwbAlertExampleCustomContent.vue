<template>
  <div class="vp-raw">
    <fwb-alert type="info">
      <template #icon>
        <svg
          class="mr-2 size-4 shrink-0"
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
        <div class="mb-4 mt-2 text-sm">
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
                <path
                  d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                />
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
  </div>
</template>

<script lang="ts" setup>
import { FwbAlert, FwbButton } from '../../../../src/index'
</script>
