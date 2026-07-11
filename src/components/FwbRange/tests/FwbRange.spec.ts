import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbRange from '../FwbRange.vue'

describe('FwbRange', () => {
  describe('label/input linkage', () => {
    it('links label for to input id', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume' } })
      const labelFor = wrapper.find('label').attributes('for')
      const inputId = wrapper.find('input[type="range"]').attributes('id')
      expect(labelFor).toBeDefined()
      expect(labelFor).toBe(inputId)
    })

    it('uses a user-provided id for both the input and the label', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume' }, attrs: { id: 'my-range' } })
      expect(wrapper.find('input[type="range"]').attributes('id')).toBe('my-range')
      expect(wrapper.find('label').attributes('for')).toBe('my-range')
    })

    it('renders no label element when label prop is empty', () => {
      const wrapper = mount(FwbRange)
      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('native attribute passthrough', () => {
    it('passes extra attrs to the input, not the root wrapper', () => {
      const wrapper = mount(FwbRange, { attrs: { name: 'brightness', form: 'settings' } })
      const input = wrapper.find('input[type="range"]')
      expect(input.attributes('name')).toBe('brightness')
      expect(input.attributes('form')).toBe('settings')
      expect(wrapper.element.getAttribute('name')).toBeNull()
    })

    it('disabled prop reaches the input', () => {
      const wrapper = mount(FwbRange, { props: { disabled: true } })
      expect(wrapper.find('input[type="range"]').attributes('disabled')).toBeDefined()
    })
  })

  describe('size classes', () => {
    it('sm applies a shorter track height than xl', () => {
      const sm = mount(FwbRange, { props: { size: 'sm' } })
      const xl = mount(FwbRange, { props: { size: 'xl' } })
      expect(sm.find('input').classes()).toContain('h-1')
      expect(xl.find('input').classes()).toContain('h-4')
    })

    it('sm applies smaller thumb size than xl', () => {
      const sm = mount(FwbRange, { props: { size: 'sm' } })
      const xl = mount(FwbRange, { props: { size: 'xl' } })
      expect(sm.find('input').classes().join(' ')).toContain('[&::-webkit-slider-thumb]:size-3')
      expect(xl.find('input').classes().join(' ')).toContain('[&::-webkit-slider-thumb]:size-6')
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbRange, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input[type="range"]').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbRange, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input[type="range"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbRange)
      expect(wrapper.find('input[type="range"]').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no slots are provided', () => {
      const wrapper = mount(FwbRange)
      expect(wrapper.find('input[type="range"]').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbRange, { slots: { helper: 'Adjust the value' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('input[type="range"]').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbRange, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Value is out of range' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="range"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbRange, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Too high', helper: 'Between 0 and 100' },
      })
      const describedby = wrapper.find('input[type="range"]').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with slot IDs', () => {
      const wrapper = mount(FwbRange, {
        attrs: { 'aria-describedby': 'external-hint' },
        slots: { helper: 'Between 0 and 100' },
      })
      const ids = (wrapper.find('input[type="range"]').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-hint')
      expect(ids).toHaveLength(2)
    })
  })

  describe('validationMessage prop', () => {
    it('renders the prop text when no validationMessage slot is provided', () => {
      const wrapper = mount(FwbRange, {
        props: { validationStatus: 'error', validationMessage: 'Value is out of range' },
      })
      expect(wrapper.find('p').text()).toBe('Value is out of range')
    })

    it('is overridden by the validationMessage slot when both are provided', () => {
      const wrapper = mount(FwbRange, {
        props: { validationStatus: 'error', validationMessage: 'Prop message' },
        slots: { validationMessage: 'Slot message' },
      })
      expect(wrapper.find('p').text()).toBe('Slot message')
    })

    it('points aria-describedby to the validation paragraph when only the prop is set', () => {
      const wrapper = mount(FwbRange, {
        props: { validationStatus: 'error', validationMessage: 'Value is out of range' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="range"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })
  })

  describe('styling props', () => {
    it('applies class prop classes to the input element', () => {
      const wrapper = mount(FwbRange, { props: { class: 'bg-amber-200' } })
      expect(wrapper.find('input[type="range"]').classes()).toContain('bg-amber-200')
    })

    it('applies wrapperClass prop classes to the root wrapper element', () => {
      const wrapper = mount(FwbRange, { props: { wrapperClass: 'border-2' } })
      expect(wrapper.element.classList).toContain('border-2')
    })

    it('applies labelClass prop classes to the label element', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume', labelClass: 'text-xl' } })
      expect(wrapper.find('label').classes()).toContain('text-xl')
    })
  })

  describe('validation label colors', () => {
    it('applies error color to label when validationStatus is "error"', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume', validationStatus: 'error' } })
      expect(wrapper.find('label').classes()).toContain('text-red-700')
    })

    it('applies success color to label when validationStatus is "success"', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume', validationStatus: 'success' } })
      expect(wrapper.find('label').classes()).toContain('text-green-700')
    })

    it('applies neutral color to label when validationStatus is not set', () => {
      const wrapper = mount(FwbRange, { props: { label: 'Volume' } })
      expect(wrapper.find('label').classes()).toContain('text-gray-900')
    })
  })
})
