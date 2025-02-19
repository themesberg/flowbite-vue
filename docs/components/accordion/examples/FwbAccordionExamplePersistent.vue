<template>
  <div class="vp-raw">
    <fwb-accordion persistent>
      <fwb-accordion-panel>
        <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >Flowbite Pro</a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >Tailwind UI</a>
            </li>
          </ul>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </div>
</template>

<script lang="ts" setup>
import { FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from '../../../../src/index'
</script>
