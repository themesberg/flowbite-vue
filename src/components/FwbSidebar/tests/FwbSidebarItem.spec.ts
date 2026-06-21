import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbSidebarItem from '../FwbSidebarItem.vue'

describe('FwbSidebarItem', () => {
  describe('default rendering', () => {
    it('renders an <a> element by default', () => {
      const wrapper = mount(FwbSidebarItem)
      expect(wrapper.element.tagName).toBe('A')
    })

    it('sets href="/" by default', () => {
      const wrapper = mount(FwbSidebarItem)
      expect(wrapper.attributes('href')).toBe('/')
    })
  })

  describe('link prop', () => {
    it('passes a string link as href when tag is "a"', () => {
      const wrapper = mount(FwbSidebarItem, { props: { link: '/dashboard' } })
      expect(wrapper.attributes('href')).toBe('/dashboard')
    })

    it('falls back to href="/" when link is a route object and tag is "a"', () => {
      const wrapper = mount(FwbSidebarItem, { props: { link: { name: 'home' } } })
      expect(wrapper.attributes('href')).toBe('/')
    })
  })

  describe('tag prop', () => {
    it('uses the "to" attribute instead of "href" when tag is not "a"', () => {
      const wrapper = mount(FwbSidebarItem, {
        props: { tag: 'router-link', link: '/home' },
        global: { stubs: { 'router-link': true } },
      })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('to')).toBe('/home')
    })

    it('passes a route object as "to" when tag is not "a"', () => {
      const wrapper = mount(FwbSidebarItem, {
        props: { tag: 'router-link', link: { name: 'home', params: { id: '1' } } },
        global: { stubs: { 'router-link': true } },
      })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('to')).toBeDefined()
    })
  })
})
