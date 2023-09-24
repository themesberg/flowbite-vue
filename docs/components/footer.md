<script setup>
import FwbFooterExample from './footer/examples/FwbFooterExample.vue'
import FwbFooterExampleSitemapLinks from './footer/examples/FwbFooterExampleSitemapLinks.vue'
import FwbFooterExampleSocialMediaIcons from './footer/examples/FwbFooterExampleSocialMediaIcons.vue'
import FwbFooterExampleSticky from './footer/examples/FwbFooterExampleSticky.vue'
import FwbFooterExampleWithLogo from './footer/examples/FwbFooterExampleWithLogo.vue'
</script>
# Vue Footer - Flowbite
#### Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo

The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven’t found the information they’ve been looking for inside the main content area.

## Default footer
Use this footer component to show a copyright notice and some helpful website links.

<fwb-footer-example />
```vue
<template>
  <fwb-footer>
    <fwb-footer-copyright
      by="Flowbite™"
      href="https://flowbite.com/"
      copyright-message="All Rights Reserved."
    />
    <fwb-footer-link-group>
      <fwb-footer-link href="#">
        About
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Privacy Policy
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Licensing
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Contact
      </fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Footer with logo
Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.

<fwb-footer-example-with-logo />
```vue
<template>
  <fwb-footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
        <fwb-footer-link-group class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <fwb-footer-link href="/">
            About
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Privacy Policy
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Licensing
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Contact
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <fwb-footer-copyright href="/" by="Flowbite™" />
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Social media icons
This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.

<fwb-footer-example-social-media-icons />
```vue
<template>
  <fwb-footer footer-type="socialmedia">
    <div class="md:flex md:justify-between">
      <fwb-footer-brand alt="Flowbite Logo" href="https://flowbite.com" name="Flowbite" src="https://flowbite.com/docs/images/logo.svg" />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">
              Flowbite
            </fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">
              Tailwind CSS
            </fwb-footer-link>
          </fwb-footer-link-group>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Follow us
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">
              GitHub
            </fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">
              Discord
            </fwb-footer-link>
          </fwb-footer-link-group>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Legal
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">
              Privacy Policy
            </fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">
              Terms & Conditions
            </fwb-footer-link>
          </fwb-footer-link-group>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <fwb-footer-copyright by="Flowbite™" href="/" />
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <fwb-footer-icon href="/">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Sitemap links
If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.

<fwb-footer-example-sitemap-links />
```vue
<template>
  <fwb-footer footer-type="sitemap">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
          Company
        </h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">
            About
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Careers
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Brand Center
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Blog
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Download
        </h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">
            Discord Server
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Twitter
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Facebook
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Contact Us
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Legal
        </h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">
            Privacy Policy
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Licensing
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Terms & Conditions
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
          Download
        </h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">
            iOS
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Android
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            Windows
          </fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">
            MacOS
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
    </div>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
      <fwb-footer-copyright by="Flowbite™" class="text-sm text-gray-300 sm:text-center" href="/" />
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <fwb-footer-icon href="/" sr-text="Facebook page">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 8 19" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/" sr-text="Discord community">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/" sr-text="Twitter page">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/" sr-text="GitHub account">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
        <fwb-footer-icon href="/" sr-text="Dribbble account">
          <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" fill-rule="evenodd" />
          </svg>
        </fwb-footer-icon>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Sticky footer
Use this example to set create a sticky footer by using a fixed position to the bottom of the document page as the user scrolls up or down the main content area.

<fwb-footer-example-sticky />
```vue
<template>
  <fwb-footer sticky>
    <fwb-footer-copyright
      by="Flowbite™"
      href="https://flowbite.com/"
      copyright-message="All Rights Reserved."
    />
    <fwb-footer-link-group>
      <fwb-footer-link href="#">
        About
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Privacy Policy
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Licensing
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Contact
      </fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```
