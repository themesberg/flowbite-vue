<template>
  <div class="vp-raw">
    <fwb-table>
      <fwb-table-head>
        <fwb-table-head-cell>Key</fwb-table-head-cell>
        <fwb-table-head-cell>Description</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row>
          <fwb-table-cell>
            <fwb-kbd>Shift</fwb-kbd> or <fwb-kbd>Tab</fwb-kbd>
          </fwb-table-cell>
          <fwb-table-cell>Navigate to interactive elements</fwb-table-cell>
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>
            <fwb-kbd>Enter</fwb-kbd> or <fwb-kbd>Spacebar</fwb-kbd>
          </fwb-table-cell>
          <fwb-table-cell>Ensure elements with ARIA role="button" can be activated with both key commands</fwb-table-cell>
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>
            <span class="inline-flex gap-1">
              <fwb-kbd>
                <template #icon>
                  <svg
                    aria-hidden="true"
                    class="mx-1 h-2.5 w-2.5 -rotate-90"
                    fill="none"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </template>
                <span class="sr-only">Up</span>
              </fwb-kbd>
              <fwb-kbd>
                <template #icon>
                  <svg
                    aria-hidden="true"
                    class="mx-1 h-2.5 w-2.5 rotate-90"
                    fill="none"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </template>
                <span class="sr-only">Down</span>
              </fwb-kbd>
            </span>
            or
            <span class="inline-flex gap-1">
              <fwb-kbd>
                <template #icon>
                  <svg
                    aria-hidden="true"
                    class="mx-1 h-2.5 w-2.5 rotate-180"
                    fill="none"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </template>
                <span class="sr-only">Left</span>
              </fwb-kbd>
              <fwb-kbd>
                <template #icon>
                  <svg
                    aria-hidden="true"
                    class="mx-1 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </template>
                <span class="sr-only">Right</span>
              </fwb-kbd>
            </span>
          </fwb-table-cell>
          <fwb-table-cell>Choose and activate previous/next tab</fwb-table-cell>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </div>
</template>

<script lang="ts" setup>
import {
  FwbKbd,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from '../../../../src/index'
</script>
