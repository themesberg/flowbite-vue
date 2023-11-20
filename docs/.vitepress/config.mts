import { defineConfig } from 'vitepress'

function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Quickstart', link: '/pages/getting-started' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [...getComponents()],
    },
    {
      text: 'Form',
      collapsible: true,
      items: [...getFormComponents()],
    },
    {
      text: 'Typography',
      collapsible: true,
      items: [
        ...getTypography(),
      ]
    },
    {
      text: 'Utils',
      collapsible: true,
      items: [...getUtils()],
    },
  ]
}

function getComponents() {
  return [
    { text: 'Accordion', link: '/components/accordion' },
    { text: 'Alert', link: '/components/alert' },
    { text: 'Avatar', link: '/components/avatar' },
    { text: 'Badge', link: '/components/badge' },
    { text: 'Breadcrumb', link: '/components/breadcrumb' },
    { text: 'Button', link: '/components/button' },
    { text: 'Button Group', link: '/components/button-group' },
    { text: 'Card', link: '/components/card.md' },
    { text: 'Carousel', link: '/components/carousel' },
    { text: 'Dropdown', link: '/components/dropdown' },
    { text: 'Jumbotron', link: '/components/jumbotron' },
    { text: 'ListGroup', link: '/components/list-group' },
    { text: 'Pagination', link: '/components/pagination' },
    { text: 'Progress', link: '/components/progress' },
    { text: 'Rating', link: '/components/rating' },
    { text: 'Spinner', link: '/components/spinner' },
    { text: 'Table', link: '/components/table' },
    { text: 'Tabs', link: '/components/tabs' },
    { text: 'Timeline', link: '/components/timeline' },
    { text: 'Toast', link: '/components/toast' },
    { text: 'Tooltip', link: '/components/tooltip' },
    { text: 'Modal', link: '/components/modal' },
    { text: 'Navbar', link: '/components/navbar' },
    { text: 'Footer', link: '/components/footer' },
    { text: 'Sidebar', link: '/components/sidebar' },
  ]
}

function getFormComponents() {
  return [
    { text: 'Input', link: '/components/input' },
    { text: 'File Input', link: '/components/fileInput' },
    { text: 'Select', link: '/components/select' },
    { text: 'Textarea', link: '/components/textarea' },
    { text: 'Checkbox', link: '/components/checkbox' },
    { text: 'Radio', link: '/components/radio' },
    { text: 'Toggle', link: '/components/toggle' },
    { text: 'Range', link: '/components/range' },
  ]
}

function getUtils() {
  return [
    { text: 'Flowbite Themable', link: '/components/flowbiteThemable/flowbiteThemable.md' },
    { text: 'Toast Provider', link: '/components/toastProvider/toastProvider.md' },
  ]
}

function getTypography() {
  return [
    { text: 'Heading', link: '/components/heading' },
    { text: 'Paragraph', link: '/components/paragraph' },
    { text: 'Image', link: '/components/image' },
    { text: 'Link', link: '/components/link' }
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
  title: 'Flowbite Vue 3',
  cleanUrls: 'without-subfolders',
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: '/assets/logo.svg' }],
    [
      'script',
      {},
      `
      // Fathom - beautiful, simple website analytics
      (function(f, a, t, h, o, m) {
        a[h] =
          a[h] ||
          function() {
            (a[h].q = a[h].q || []).push(arguments);
          };
        (o = f.createElement("script")),
          (m = f.getElementsByTagName("script")[0]);
        o.async = 1;
        o.src = t;
        o.id = "fathom-script";
        m.parentNode.insertBefore(o, m);
      })(document, window, "https://cdn.usefathom.com/tracker.js", "fathom");
      fathom("set", "siteId", "MPNTKCVJ");
      fathom("trackPageview");
      // / Fathom
      `,
    ],
  ],
  themeConfig: {
    sidebar: buildSidebar(),
    logo: '/assets/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/themesberg/flowbite-vue' },
      { icon: 'discord', link: 'https://discord.gg/4eeurUVvTy' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Flowbite™',
    },
  },
})
