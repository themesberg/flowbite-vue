import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbKbd from '../FwbKbd.vue'

describe('FwbKbd', () => {
  describe('default rendering', () => {
    it('renders a <kbd> tag', () => {
      const wrapper = mount(FwbKbd, { slots: { default: 'Shift' } })
      expect(wrapper.element.tagName).toBe('KBD')
    })

    it('renders default slot content', () => {
      const wrapper = mount(FwbKbd, { slots: { default: 'Ctrl' } })
      expect(wrapper.text()).toBe('Ctrl')
    })
  })

  describe('icon slot', () => {
    it('renders icon slot content', () => {
      const wrapper = mount(FwbKbd, { slots: { icon: '<svg data-test="arrow-icon" />' } })
      expect(wrapper.find('[data-test="arrow-icon"]').exists()).toBe(true)
    })

    it('applies inline-flex classes when the icon slot is used', () => {
      const wrapper = mount(FwbKbd, { slots: { icon: '<svg />' } })
      expect(wrapper.classes()).toContain('inline-flex')
      expect(wrapper.classes()).toContain('items-center')
    })

    it('does not apply inline-flex classes without an icon slot', () => {
      const wrapper = mount(FwbKbd, { slots: { default: 'K' } })
      expect(wrapper.classes()).not.toContain('inline-flex')
    })
  })

  describe('custom class', () => {
    it('merges a custom class', () => {
      const wrapper = mount(FwbKbd, {
        attrs: { class: 'custom-class' },
        slots: { default: 'K' },
      })
      expect(wrapper.classes()).toContain('custom-class')
    })
  })
})
