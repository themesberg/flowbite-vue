module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.md',
    './src/**/*.{js,ts,vue}',

  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
