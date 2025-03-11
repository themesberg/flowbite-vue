<template>
  <div
    class="vp-raw"
  >
    <fwb-jumbotron
      class="px-4 text-start lg:py-8 "
      header-classes="text-left"
      sub-text-classes="lg:px-0"
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    >
      <a
        href="#"
        class="mb-8 inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
      >Read more about our app
        <svg
          class="ms-2 size-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      <div>
        <div class="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to Flowbite
          </h2>
          <form
            class="mt-8 space-y-6"
            action="#"
          >
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label>
              <input
                id="email"
                type="email"
                name="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@company.com"
                required
              >
            </div>
            <div>
              <label
                for="password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Your password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              >
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  class="size-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  required
                >
              </div>
              <div class="ms-3 text-sm">
                <label
                  for="remember"
                  class="font-medium text-gray-500 dark:text-gray-400"
                >Remember this device</label>
              </div>
              <a
                href="#"
                class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Lost Password?</a>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet? <a class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script lang="ts" setup>
import { FwbJumbotron } from '../../../../src/index'
</script>
