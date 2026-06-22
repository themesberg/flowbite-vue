import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbBadge from '../FwbBadge.vue'

describe('FwbBadge', () => {
  describe('default rendering', () => {
    it('renders a <span> by default', () => {
      const wrapper = mount(FwbBadge, { slots: { default: 'Default' } })
      expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('renders an <a> when href is set', () => {
      const wrapper = mount(FwbBadge, { props: { href: '/link' }, slots: { default: 'Link' } })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.attributes('href')).toBe('/link')
    })
  })

  describe('pill prop', () => {
    it('applies rounded-full when pill is true', () => {
      const wrapper = mount(FwbBadge, { props: { pill: true }, slots: { default: 'Pill' } })
      expect(wrapper.classes()).toContain('rounded-full')
    })

    it('does not apply rounded-full by default', () => {
      const wrapper = mount(FwbBadge, { slots: { default: 'Default' } })
      expect(wrapper.classes()).not.toContain('rounded-full')
    })
  })

  describe('border prop', () => {
    it('applies a border class when border is true', () => {
      const wrapper = mount(FwbBadge, { props: { border: true }, slots: { default: 'Bordered' } })
      expect(wrapper.classes()).toContain('border')
    })

    it('does not apply border by default', () => {
      const wrapper = mount(FwbBadge, { slots: { default: 'Default' } })
      expect(wrapper.classes()).not.toContain('border')
    })
  })

  describe('dismissible prop', () => {
    it('renders a dismiss button when dismissible is true', () => {
      const wrapper = mount(FwbBadge, { props: { dismissible: true }, slots: { default: 'Tag' } })
      expect(wrapper.find('button').exists()).toBe(true)
    })

    it('does not render a dismiss button by default', () => {
      const wrapper = mount(FwbBadge, { slots: { default: 'Tag' } })
      expect(wrapper.find('button').exists()).toBe(false)
    })

    it('emits dismiss when the button is clicked', async () => {
      const wrapper = mount(FwbBadge, { props: { dismissible: true }, slots: { default: 'Tag' } })
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted('dismiss')).toHaveLength(1)
    })
  })

  describe('prop combinations', () => {
    it('applies border classes when both href and border are set', () => {
      const wrapper = mount(FwbBadge, { props: { href: '/link', border: true, type: 'green' }, slots: { default: 'Bordered Link' } })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('bg-green-100')
    })

    it('emits dismiss when href and dismissible are both set', async () => {
      const wrapper = mount(FwbBadge, { props: { href: '/link', dismissible: true }, slots: { default: 'Tag' } })
      expect(wrapper.find('button').exists()).toBe(true)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted('dismiss')).toHaveLength(1)
    })
  })

  describe('icon-only mode', () => {
    it('applies rounded-full for icon-only badges', () => {
      const wrapper = mount(FwbBadge, { slots: { icon: '<svg />' } })
      expect(wrapper.classes()).toContain('rounded-full')
    })

    it('applies type color classes for icon-only badges', () => {
      const wrapper = mount(FwbBadge, { slots: { icon: '<svg />' } })
      expect(wrapper.classes()).toContain('bg-blue-100')
    })

    it('applies type color classes for icon-only badges with a non-default type', () => {
      const wrapper = mount(FwbBadge, { props: { type: 'green' }, slots: { icon: '<svg />' } })
      expect(wrapper.classes()).toContain('bg-green-100')
    })
  })
})
