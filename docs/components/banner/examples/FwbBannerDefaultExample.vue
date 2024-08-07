<template>
  <div class="vp-raw h-[25rem] overflow-y-scroll relative border border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-800">
    <fwb-banner class="sticky top-0 left-0">
      <div className="flex w-full justify-between bg-gray-50 p-4 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="[&_p]:inline">
              New brand identity has been launched for the&nbsp;
              <a
                href="https://flowbite.com"
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Flowbite Library
              </a>
            </span>
          </p>
        </div>
        <fwb-banner-collapse-button />
      </div>
    </fwb-banner>
    <div class="px-8 py-4">
      <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
        <h1
          id="content"
          class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Flowbite - Tailwind CSS component library
        </h1>
        <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
          Get started with the most popular
          open-source library of interactive UI components built with the utility classes from Tailwind
          CSS
        </p>
      </div>

      <h2 class="relative group text-xl font-semibold leading-8 mb-4 mt-8">
        Introduction
        <span
          id="introduction"
          class="absolute -top-[140px]"
        /> <a
          class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
          href="#introduction"
          aria-label="Link to this section: Introduction"
        >#</a>
      </h2>
      <p class="text-gray-700 text-opacity-100 text-base font-normal leading-6 mb-4 dark:text-gray-400">
        Flowbite is an open-source
        library of UI components based on the utility-first Tailwind CSS framework
        featuring dark mode support, a Figma design system, templates, and more.
      </p>
      <p class="text-gray-700 text-opacity-100 text-base font-normal leading-6 mb-4 dark:text-gray-400">
        It includes all of the
        commonly used components that a website requires, such as buttons, dropdowns,
        navigation bars, modals, but also some more advanced interactive elements such as datepickers.
      </p>
      <p class="text-gray-700 text-opacity-100 text-base font-normal leading-6 mb-4 dark:text-gray-400">
        All of the elements are built
        using the utility classes from Tailwind CSS and vanilla JavaScript with
        support for TypeScript.
      </p>
      <iframe
        width="100%"
        height="500px"
        class="my-8 rounded-lg shadow-lg yt-video"
        src="https://www.youtube.com/embed/KaLxCiilHns"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      />
    </div>
  </div>
</template>

<script setup>
import { FwbBanner, FwbBannerCollapseButton } from '../../../../src/index'
</script>
