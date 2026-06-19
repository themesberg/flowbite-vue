import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbCheckbox from '../FwbCheckbox.vue'

describe('FwbCheckbox', () => {
  describe('label/checkbox structure', () => {
    it('checkbox is inside the label element', () => {
      const wrapper = mount(FwbCheckbox)
      expect(wrapper.find('label').find('input[type="checkbox"]').exists()).toBe(true)
    })

    it('checkbox has a stable generated id', () => {
      const wrapper = mount(FwbCheckbox)
      expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBeDefined()
    })

    it('uses a user-provided id on the checkbox', () => {
      const wrapper = mount(FwbCheckbox, { attrs: { id: 'my-checkbox' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe('my-checkbox')
    })

    it('renders label text when label prop is provided', () => {
      const wrapper = mount(FwbCheckbox, { props: { label: 'Accept terms' } })
      expect(wrapper.find('label span').text()).toBe('Accept terms')
    })

    it('renders no label span when neither label prop nor default slot is provided', () => {
      const wrapper = mount(FwbCheckbox)
      expect(wrapper.find('label span').exists()).toBe(false)
    })

    it('renders slot content when default slot is provided', () => {
      const wrapper = mount(FwbCheckbox, { slots: { default: 'I agree' } })
      expect(wrapper.find('label span').text()).toBe('I agree')
    })

    it('slot content takes priority over label prop', () => {
      const wrapper = mount(FwbCheckbox, {
        props: { label: 'prop label' },
        slots: { default: 'slot label' },
      })
      expect(wrapper.find('label span').text()).toBe('slot label')
    })
  })

  describe('native attribute passthrough', () => {
    it('passes extra attrs to the checkbox, not the root wrapper', () => {
      const wrapper = mount(FwbCheckbox, { attrs: { name: 'agreement', form: 'signup' } })
      const checkbox = wrapper.find('input[type="checkbox"]')
      expect(checkbox.attributes('name')).toBe('agreement')
      expect(checkbox.attributes('form')).toBe('signup')
      expect(wrapper.element.getAttribute('name')).toBeNull()
    })

    it('forwards value attr to the checkbox for group binding', () => {
      const wrapper = mount(FwbCheckbox, { attrs: { value: 'banana' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('value')).toBe('banana')
    })

    it('disabled prop reaches the checkbox', () => {
      const wrapper = mount(FwbCheckbox, { props: { disabled: true } })
      expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBeDefined()
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbCheckbox, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbCheckbox, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbCheckbox)
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('preserves a user-provided aria-invalid when validationStatus is not "error"', () => {
      const wrapper = mount(FwbCheckbox, { attrs: { 'aria-invalid': 'grammar' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBe('grammar')
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no slots are provided', () => {
      const wrapper = mount(FwbCheckbox)
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbCheckbox, { slots: { helper: 'Some hint' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbCheckbox, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbCheckbox, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Check this box to continue' },
      })
      const describedby = wrapper.find('input[type="checkbox"]').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with slot IDs', () => {
      const wrapper = mount(FwbCheckbox, {
        attrs: { 'aria-describedby': 'external-hint' },
        slots: { helper: 'Some hint' },
      })
      const ids = (wrapper.find('input[type="checkbox"]').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-hint')
      expect(ids).toHaveLength(2)
    })
  })

  describe('validation label text colors', () => {
    it('applies error color to label text when validationStatus is "error"', () => {
      const wrapper = mount(FwbCheckbox, { props: { label: 'Accept', validationStatus: 'error' } })
      expect(wrapper.find('label span').classes()).toContain('text-red-700')
    })

    it('applies success color to label text when validationStatus is "success"', () => {
      const wrapper = mount(FwbCheckbox, { props: { label: 'Accept', validationStatus: 'success' } })
      expect(wrapper.find('label span').classes()).toContain('text-green-700')
    })

    it('applies neutral color to label text when validationStatus is not set', () => {
      const wrapper = mount(FwbCheckbox, { props: { label: 'Accept' } })
      expect(wrapper.find('label span').classes()).toContain('text-gray-900')
    })
  })

  describe('styling props', () => {
    it('applies class prop to the checkbox input', () => {
      const wrapper = mount(FwbCheckbox, { props: { class: 'border-2' } })
      expect(wrapper.find('input[type="checkbox"]').classes()).toContain('border-2')
    })

    it('applies wrapperClass prop to the root wrapper element', () => {
      const wrapper = mount(FwbCheckbox, { props: { wrapperClass: 'p-4' } })
      expect(wrapper.element.classList).toContain('p-4')
    })

    it('applies labelClass prop to the label text span', () => {
      const wrapper = mount(FwbCheckbox, { props: { label: 'Accept', labelClass: 'font-bold' } })
      expect(wrapper.find('label span').classes()).toContain('font-bold')
    })
  })
})
