import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'

import FwbButton from '../FwbButton.vue'

import type { ButtonSize } from '../types'

const RouterLinkStub = defineComponent({
  name: 'RouterLink',
  props: { to: { type: [String, Object], required: true } },
  render () { return h('a', this.$slots.default?.()) },
})

describe('FwbButton', () => {
  describe('structure', () => {
    it('renders as a button element by default', () => {
      const wrapper = mount(FwbButton, { slots: { default: 'Click' } })
      expect(wrapper.element.tagName).toBe('BUTTON')
    })

    it('sets type="button" to prevent accidental form submission', () => {
      const wrapper = mount(FwbButton, { slots: { default: 'Click' } })
      expect(wrapper.attributes('type')).toBe('button')
    })

    it('renders slot content', () => {
      const wrapper = mount(FwbButton, { slots: { default: 'Hello' } })
      expect(wrapper.text()).toBe('Hello')
    })

    it('does not set href or to on a plain button', () => {
      const wrapper = mount(FwbButton, { slots: { default: 'Click' } })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('to')).toBeUndefined()
    })
  })

  describe('colors', () => {
    it('applies default (blue) color classes', () => {
      const wrapper = mount(FwbButton, { props: { color: 'default' } })
      expect(wrapper.classes()).toContain('bg-blue-700')
      expect(wrapper.classes()).toContain('text-white')
      expect(wrapper.classes()).toContain('hover:bg-blue-800')
    })

    it('applies green color classes', () => {
      const wrapper = mount(FwbButton, { props: { color: 'green' } })
      expect(wrapper.classes()).toContain('bg-green-700')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('applies red color classes', () => {
      const wrapper = mount(FwbButton, { props: { color: 'red' } })
      expect(wrapper.classes()).toContain('bg-red-700')
    })
  })

  describe('sizes', () => {
    const sizeClassMap: Record<ButtonSize, string[]> = {
      xs: ['text-xs', 'px-2', 'py-1'],
      sm: ['text-sm', 'px-3', 'py-1.5'],
      md: ['text-sm', 'px-4', 'py-2'],
      lg: ['text-base', 'px-5', 'py-2.5'],
      xl: ['text-base', 'px-6', 'py-3'],
    }

    for (const [size, expectedClasses] of Object.entries(sizeClassMap)) {
      it(`applies ${size} size classes`, () => {
        const wrapper = mount(FwbButton, { props: { size: size as ButtonSize } })
        expectedClasses.forEach(cls => expect(wrapper.classes()).toContain(cls))
      })
    }
  })

  describe('pill', () => {
    it('applies rounded-full when pill is true', () => {
      const wrapper = mount(FwbButton, { props: { pill: true } })
      expect(wrapper.attributes('class')).toContain('rounded-full')
    })
  })

  describe('square', () => {
    it('applies equal-padding size classes when square is true', () => {
      const wrapper = mount(FwbButton, { props: { square: true } })
      expect(wrapper.classes()).toContain('p-2')
      expect(wrapper.classes()).not.toContain('px-4')
    })
  })

  describe('outline', () => {
    it('applies border and text color when outline is true', () => {
      const wrapper = mount(FwbButton, { props: { outline: true } })
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-blue-700')
      expect(wrapper.classes()).toContain('text-blue-700')
    })
  })

  describe('gradient', () => {
    it('applies monochrome gradient classes', () => {
      const wrapper = mount(FwbButton, { props: { gradient: 'blue' } })
      expect(wrapper.attributes('class')).toContain('bg-linear-to-r')
      expect(wrapper.attributes('class')).toContain('from-blue-500')
    })

    it('applies duotone gradient classes', () => {
      const wrapper = mount(FwbButton, { props: { gradient: 'purple-blue' } })
      expect(wrapper.attributes('class')).toContain('from-purple-600')
      expect(wrapper.attributes('class')).toContain('to-blue-500')
    })
  })

  describe('shadow', () => {
    it('applies shadow classes for named shadow color', () => {
      const wrapper = mount(FwbButton, { props: { shadow: 'blue' } })
      expect(wrapper.attributes('class')).toContain('shadow-blue-500/50')
    })
  })

  describe('custom class', () => {
    it('applies a custom string class and it wins over defaults via twMerge', () => {
      const wrapper = mount(FwbButton, { props: { class: 'bg-red-500' } })
      expect(wrapper.classes()).toContain('bg-red-500')
      expect(wrapper.classes()).not.toContain('bg-blue-700')
    })

    it('applies truthy keys from an object class', () => {
      const wrapper = mount(FwbButton, {
        props: { class: { 'custom-class': true, 'other-class': false } },
      })
      expect(wrapper.classes()).toContain('custom-class')
      expect(wrapper.classes()).not.toContain('other-class')
    })
  })

  describe('disabled', () => {
    it('sets the disabled attribute on a button element', () => {
      const wrapper = mount(FwbButton, { props: { disabled: true } })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('applies opacity and cursor classes when disabled', () => {
      const wrapper = mount(FwbButton, { props: { disabled: true } })
      expect(wrapper.classes()).toContain('opacity-50')
      expect(wrapper.classes()).toContain('cursor-not-allowed')
    })

    it('does not set disabled attribute on an anchor element', () => {
      const wrapper = mount(FwbButton, { props: { href: '/link', disabled: true } })
      expect(wrapper.find('a').attributes('disabled')).toBeUndefined()
    })
  })

  describe('loading', () => {
    it('sets aria-busy="true" when loading', () => {
      const wrapper = mount(FwbButton, { props: { loading: true } })
      expect(wrapper.attributes('aria-busy')).toBe('true')
    })

    it('does not set aria-busy when not loading', () => {
      const wrapper = mount(FwbButton, { slots: { default: 'Click' } })
      expect(wrapper.attributes('aria-busy')).toBeUndefined()
    })

    it('shows spinner in prefix position by default', () => {
      const wrapper = mount(FwbButton, { props: { loading: true } })
      const firstDiv = wrapper.find('div:first-child')
      expect(firstDiv.findComponent({ name: 'FwbSpinner' }).exists()).toBe(true)
    })

    it('shows spinner in suffix position when loadingPosition is suffix', () => {
      const wrapper = mount(FwbButton, {
        props: { loading: true, loadingPosition: 'suffix' },
      })
      const lastDiv = wrapper.find('div:last-child')
      expect(lastDiv.findComponent({ name: 'FwbSpinner' }).exists()).toBe(true)
    })
  })

  describe('link / navigation', () => {
    it('renders as an anchor when href is provided', () => {
      const wrapper = mount(FwbButton, { props: { href: '/page' } })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.attributes('href')).toBe('/page')
    })

    it('does not set type attribute on an anchor', () => {
      const wrapper = mount(FwbButton, { props: { href: '/page' } })
      expect(wrapper.attributes('type')).toBeUndefined()
    })

    it('passes extra attributes (e.g. target) through to the anchor', () => {
      const wrapper = mount(FwbButton, {
        props: { href: 'https://example.com' },
        attrs: { target: '_blank', rel: 'noopener' },
      })
      expect(wrapper.attributes('target')).toBe('_blank')
      expect(wrapper.attributes('rel')).toBe('noopener')
    })

    it('renders as router-link when to prop is provided', () => {
      const wrapper = mount(FwbButton, {
        props: { to: '/dashboard' },
        global: { stubs: { 'router-link': RouterLinkStub } },
      })
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true)
      expect(wrapper.findComponent(RouterLinkStub).props('to')).toBe('/dashboard')
    })

    it('accepts a route object for the to prop', () => {
      const route = { name: 'user', params: { id: 42 } }
      const wrapper = mount(FwbButton, {
        props: { to: route },
        global: { stubs: { 'router-link': RouterLinkStub } },
      })
      expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual(route)
    })

    it('prioritises to over href', () => {
      const wrapper = mount(FwbButton, {
        props: { to: '/primary', href: '/fallback' },
        global: { stubs: { 'router-link': RouterLinkStub } },
      })
      expect(wrapper.findComponent(RouterLinkStub).props('to')).toBe('/primary')
    })

    it('uses a custom tag component when tag and href are both set', () => {
      const wrapper = mount(FwbButton, {
        props: { tag: 'router-link', href: '/custom' },
        global: { stubs: { 'router-link': RouterLinkStub } },
      })
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true)
    })
  })

  describe('slots', () => {
    it('renders prefix slot content', () => {
      const wrapper = mount(FwbButton, {
        slots: { default: 'Label', prefix: 'Pre' },
      })
      expect(wrapper.text()).toContain('Pre')
      expect(wrapper.text()).toContain('Label')
    })

    it('renders suffix slot content', () => {
      const wrapper = mount(FwbButton, {
        slots: { default: 'Label', suffix: 'Suf' },
      })
      expect(wrapper.text()).toContain('Label')
      expect(wrapper.text()).toContain('Suf')
    })

    it('places prefix and suffix inside spans for outline gradient buttons', () => {
      const wrapper = mount(FwbButton, {
        props: { outline: true, gradient: 'purple-blue' },
        slots: { default: 'Label', prefix: 'Pre', suffix: 'Suf' },
      })
      expect(wrapper.text()).toContain('Pre')
      expect(wrapper.text()).toContain('Label')
      expect(wrapper.text()).toContain('Suf')
      expect(wrapper.findAll('span').length).toBeGreaterThan(0)
    })
  })
})
