/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.{js,ts,vue,md}',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin(),
  ],
}
