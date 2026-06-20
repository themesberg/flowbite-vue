import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbRadio from '../FwbRadio.vue'

describe('FwbRadio', () => {
  describe('label/radio structure', () => {
    it('radio is inside the label element', () => {
      const wrapper = mount(FwbRadio)
      expect(wrapper.element.tagName).toBe('LABEL')
      expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
    })

    it('has a stable generated id on the radio input', () => {
      const wrapper = mount(FwbRadio)
      expect(wrapper.find('input[type="radio"]').attributes('id')).toBeDefined()
    })

    it('uses a user-provided id on the radio input', () => {
      const wrapper = mount(FwbRadio, { attrs: { id: 'my-radio' } })
      expect(wrapper.find('input[type="radio"]').attributes('id')).toBe('my-radio')
    })

    it('renders label text when label prop is provided', () => {
      const wrapper = mount(FwbRadio, { props: { label: 'Option A' } })
      expect(wrapper.find('label span').text()).toBe('Option A')
    })

    it('renders no label span when neither label prop nor default slot is provided', () => {
      const wrapper = mount(FwbRadio)
      expect(wrapper.find('label span').exists()).toBe(false)
    })

    it('renders slot content when default slot is provided', () => {
      const wrapper = mount(FwbRadio, { slots: { default: 'I agree' } })
      expect(wrapper.find('label span').text()).toBe('I agree')
    })

    it('slot content takes priority over label prop', () => {
      const wrapper = mount(FwbRadio, {
        props: { label: 'prop label' },
        slots: { default: 'slot label' },
      })
      expect(wrapper.find('label span').text()).toBe('slot label')
    })
  })

  describe('native attribute passthrough', () => {
    it('passes extra attrs to the radio input, not the root label', () => {
      const wrapper = mount(FwbRadio, { attrs: { form: 'signup', 'data-test': 'x' } })
      const radio = wrapper.find('input[type="radio"]')
      expect(radio.attributes('form')).toBe('signup')
      expect(radio.attributes('data-test')).toBe('x')
      expect(wrapper.element.getAttribute('form')).toBeNull()
    })

    it('forwards value attr to the radio', () => {
      const wrapper = mount(FwbRadio, { props: { value: 'banana' } })
      expect(wrapper.find('input[type="radio"]').attributes('value')).toBe('banana')
    })

    it('disabled prop reaches the radio input', () => {
      const wrapper = mount(FwbRadio, { props: { disabled: true } })
      expect(wrapper.find('input[type="radio"]').attributes('disabled')).toBeDefined()
    })

    it('name prop is set on the radio input', () => {
      const wrapper = mount(FwbRadio, { props: { name: 'flavour' } })
      expect(wrapper.find('input[type="radio"]').attributes('name')).toBe('flavour')
    })
  })

  describe('aria-invalid', () => {
    it('is absent when used standalone with no group', () => {
      const wrapper = mount(FwbRadio)
      expect(wrapper.find('input[type="radio"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('preserves a user-provided aria-invalid when no group is present', () => {
      const wrapper = mount(FwbRadio, { attrs: { 'aria-invalid': 'grammar' } })
      expect(wrapper.find('input[type="radio"]').attributes('aria-invalid')).toBe('grammar')
    })
  })

  describe('styling props', () => {
    it('applies class prop to the radio input', () => {
      const wrapper = mount(FwbRadio, { props: { class: 'text-red-500' } })
      expect(wrapper.find('input[type="radio"]').classes()).toContain('text-red-500')
    })

    it('applies wrapperClass to the root label element', () => {
      const wrapper = mount(FwbRadio, { props: { wrapperClass: 'p-4' } })
      expect(wrapper.element.classList).toContain('p-4')
    })

    it('applies labelClass to the label text span', () => {
      const wrapper = mount(FwbRadio, { props: { label: 'Option', labelClass: 'font-bold' } })
      expect(wrapper.find('label span').classes()).toContain('font-bold')
    })
  })
})
