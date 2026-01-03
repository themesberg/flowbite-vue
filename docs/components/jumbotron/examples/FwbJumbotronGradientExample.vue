<template>
  <div
    class="vp-raw"
  >
    <fwb-jumbotron
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
      class="relative bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]"
    >
      <form class="mx-auto w-full max-w-md">
        <label
          for="default-email"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email sign-up</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0">
            <svg
              class="size-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            id="default-email"
            type="email"
            class="block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your email here..."
            required
          >
          <button
            type="submit"
            class="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </div>
      </form>
      <div class="absolute left-0 top-0 z-0 size-full bg-linear-to-b from-blue-50 to-transparent dark:from-blue-900" />
    </fwb-jumbotron>
  </div>
</template>

<script lang="ts" setup>
import { FwbJumbotron } from '../../../../src/index'
</script>
