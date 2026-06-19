import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbToggle from '../FwbToggle.vue'

describe('FwbToggle', () => {
  describe('label/checkbox structure', () => {
    it('checkbox is inside the label element', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('label').find('input[type="checkbox"]').exists()).toBe(true)
    })

    it('checkbox has a stable generated id', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBeDefined()
    })

    it('uses a user-provided id on the checkbox', () => {
      const wrapper = mount(FwbToggle, { attrs: { id: 'my-toggle' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe('my-toggle')
    })

    it('renders label text when label prop is provided', () => {
      const wrapper = mount(FwbToggle, { props: { label: 'Enable' } })
      expect(wrapper.find('label').text()).toBe('Enable')
    })

    it('renders no label text span when label prop is empty', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('label').text()).toBe('')
    })
  })

  describe('native attribute passthrough', () => {
    it('passes extra attrs to the checkbox, not the root wrapper', () => {
      const wrapper = mount(FwbToggle, { attrs: { name: 'notifications', form: 'settings' } })
      const checkbox = wrapper.find('input[type="checkbox"]')
      expect(checkbox.attributes('name')).toBe('notifications')
      expect(checkbox.attributes('form')).toBe('settings')
      expect(wrapper.element.getAttribute('name')).toBeNull()
    })

    it('disabled prop reaches the checkbox', () => {
      const wrapper = mount(FwbToggle, { props: { disabled: true } })
      expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBeDefined()
    })
  })

  describe('size classes', () => {
    it('sm applies a smaller track than xl', () => {
      const sm = mount(FwbToggle, { props: { size: 'sm' } })
      const xl = mount(FwbToggle, { props: { size: 'xl' } })
      expect(sm.find('label span').classes()).toContain('w-9')
      expect(xl.find('label span').classes()).toContain('w-16')
    })
  })

  describe('color classes', () => {
    it('applies color-specific checked background', () => {
      const wrapper = mount(FwbToggle, { props: { color: 'red' } })
      expect(wrapper.find('label span').classes().join(' ')).toContain('peer-checked:bg-red-600')
    })

    it('applies no color override when color is not set', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('label span').classes().join(' ')).not.toContain('peer-checked:bg-red-600')
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbToggle, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbToggle, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no slots are provided', () => {
      const wrapper = mount(FwbToggle)
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbToggle, { slots: { helper: 'Toggle this on or off' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbToggle, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="checkbox"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbToggle, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Toggle to accept terms' },
      })
      const describedby = wrapper.find('input[type="checkbox"]').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with slot IDs', () => {
      const wrapper = mount(FwbToggle, {
        attrs: { 'aria-describedby': 'external-hint' },
        slots: { helper: 'Toggle to accept terms' },
      })
      const ids = (wrapper.find('input[type="checkbox"]').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-hint')
      expect(ids).toHaveLength(2)
    })
  })

  describe('validation label text colors', () => {
    it('applies error color to label text when validationStatus is "error"', () => {
      const wrapper = mount(FwbToggle, { props: { label: 'Notifications', validationStatus: 'error' } })
      expect(wrapper.find('label > span + span').classes()).toContain('text-red-700')
    })

    it('applies success color to label text when validationStatus is "success"', () => {
      const wrapper = mount(FwbToggle, { props: { label: 'Notifications', validationStatus: 'success' } })
      expect(wrapper.find('label > span + span').classes()).toContain('text-green-700')
    })

    it('applies neutral color to label text when validationStatus is not set', () => {
      const wrapper = mount(FwbToggle, { props: { label: 'Notifications' } })
      expect(wrapper.find('label > span + span').classes()).toContain('text-gray-900')
    })
  })

  describe('styling props', () => {
    it('applies class prop to the toggle background span', () => {
      const wrapper = mount(FwbToggle, { props: { class: 'border-2' } })
      expect(wrapper.find('label span').classes()).toContain('border-2')
    })

    it('applies wrapperClass prop to the root wrapper element', () => {
      const wrapper = mount(FwbToggle, { props: { wrapperClass: 'p-4' } })
      expect(wrapper.element.classList).toContain('p-4')
    })

    it('applies labelClass prop to the label text span', () => {
      const wrapper = mount(FwbToggle, { props: { label: 'Enable', labelClass: 'font-bold' } })
      expect(wrapper.find('label > span + span').classes()).toContain('font-bold')
    })
  })
})
