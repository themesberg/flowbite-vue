import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbSidebarLogo from '../FwbSidebarLogo.vue'

describe('FwbSidebarLogo', () => {
  describe('default rendering', () => {
    it('renders an <a> element by default', () => {
      const wrapper = mount(FwbSidebarLogo)
      expect(wrapper.element.tagName).toBe('A')
    })

    it('sets href="/" by default', () => {
      const wrapper = mount(FwbSidebarLogo)
      expect(wrapper.attributes('href')).toBe('/')
    })
  })

  describe('alt prop', () => {
    it('falls back to name as img alt text when alt is omitted', () => {
      const wrapper = mount(FwbSidebarLogo, { props: { name: 'Flowbite', logo: '/logo.svg' } })
      expect(wrapper.find('img').attributes('alt')).toBe('Flowbite')
    })

    it('uses the alt prop when explicitly provided', () => {
      const wrapper = mount(FwbSidebarLogo, { props: { name: 'Flowbite', logo: '/logo.svg', alt: 'Company logo' } })
      expect(wrapper.find('img').attributes('alt')).toBe('Company logo')
    })
  })

  describe('link prop', () => {
    it('passes a string link as href when tag is "a"', () => {
      const wrapper = mount(FwbSidebarLogo, { props: { link: 'https://flowbite.com' } })
      expect(wrapper.attributes('href')).toBe('https://flowbite.com')
    })

    it('falls back to href="/" when link is a route object and tag is "a"', () => {
      const wrapper = mount(FwbSidebarLogo, { props: { link: { name: 'home' } } })
      expect(wrapper.attributes('href')).toBe('/')
    })
  })

  describe('tag prop', () => {
    it('uses the "to" attribute instead of "href" when tag is not "a"', () => {
      const wrapper = mount(FwbSidebarLogo, {
        props: { tag: 'router-link', link: '/home' },
        global: { stubs: { 'router-link': true } },
      })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('to')).toBe('/home')
    })

    it('passes a route object as "to" when tag is not "a"', () => {
      const wrapper = mount(FwbSidebarLogo, {
        props: { tag: 'router-link', link: { name: 'home' } },
        global: { stubs: { 'router-link': true } },
      })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('to')).toBeDefined()
    })
  })
})
