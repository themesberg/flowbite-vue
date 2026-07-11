import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import FwbFileInput from '../FwbFileInput.vue'

describe('FwbFileInput', () => {
  describe('label/input linkage', () => {
    it('links label for to input id', () => {
      const wrapper = mount(FwbFileInput, { props: { label: 'Upload' } })
      const labelFor = wrapper.find('label').attributes('for')
      const inputId = wrapper.find('input[type="file"]').attributes('id')
      expect(labelFor).toBeDefined()
      expect(labelFor).toBe(inputId)
    })

    it('uses a user-provided id for both the input and the label', () => {
      const wrapper = mount(FwbFileInput, { props: { label: 'Upload' }, attrs: { id: 'custom-id' } })
      expect(wrapper.find('input[type="file"]').attributes('id')).toBe('custom-id')
      expect(wrapper.find('label').attributes('for')).toBe('custom-id')
    })

    it('renders no label when label prop is empty', () => {
      const wrapper = mount(FwbFileInput)
      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('native attribute passthrough', () => {
    it('disabled prop reaches the input', () => {
      const wrapper = mount(FwbFileInput, { props: { disabled: true } })
      expect(wrapper.find('input[type="file"]').attributes('disabled')).toBeDefined()
    })

    it('multiple prop reaches the input', () => {
      const wrapper = mount(FwbFileInput, { props: { multiple: true } })
      expect(wrapper.find('input[type="file"]').attributes('multiple')).toBeDefined()
    })

    it('accept prop reaches the input', () => {
      const wrapper = mount(FwbFileInput, { props: { accept: 'image/*' } })
      expect(wrapper.find('input[type="file"]').attributes('accept')).toBe('image/*')
    })

    it('extra attrs land on the input, not on the root wrapper', () => {
      const wrapper = mount(FwbFileInput, { attrs: { name: 'avatar', form: 'my-form' } })
      const input = wrapper.find('input[type="file"]')
      expect(input.attributes('name')).toBe('avatar')
      expect(input.attributes('form')).toBe('my-form')
      expect(wrapper.element.getAttribute('name')).toBeNull()
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbFileInput, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input[type="file"]').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbFileInput, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input[type="file"]').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbFileInput)
      expect(wrapper.find('input[type="file"]').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no helper or validationMessage slot is provided', () => {
      const wrapper = mount(FwbFileInput)
      expect(wrapper.find('input[type="file"]').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbFileInput, { slots: { helper: 'Max 5MB' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('input[type="file"]').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbFileInput, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'File is required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="file"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbFileInput, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Max 5MB' },
      })
      const describedby = wrapper.find('input[type="file"]').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with slot IDs', () => {
      const wrapper = mount(FwbFileInput, {
        attrs: { 'aria-describedby': 'external-id' },
        slots: { helper: 'Max 5MB' },
      })
      const ids = (wrapper.find('input[type="file"]').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-id')
      expect(ids).toHaveLength(2)
    })
  })

  describe('validationMessage prop', () => {
    it('renders the prop text when no validationMessage slot is provided', () => {
      const wrapper = mount(FwbFileInput, {
        props: { validationStatus: 'error', validationMessage: 'File is required' },
      })
      expect(wrapper.find('p').text()).toBe('File is required')
    })

    it('is overridden by the validationMessage slot when both are provided', () => {
      const wrapper = mount(FwbFileInput, {
        props: { validationStatus: 'error', validationMessage: 'Prop message' },
        slots: { validationMessage: 'Slot message' },
      })
      expect(wrapper.find('p').text()).toBe('Slot message')
    })

    it('points aria-describedby to the validation paragraph when only the prop is set', () => {
      const wrapper = mount(FwbFileInput, {
        props: { validationStatus: 'error', validationMessage: 'File is required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input[type="file"]').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })
  })

  describe('size classes', () => {
    it('sm and xl apply different padding to the input', () => {
      const sm = mount(FwbFileInput, { props: { size: 'sm' } })
      const xl = mount(FwbFileInput, { props: { size: 'xl' } })
      expect(sm.find('input[type="file"]').classes()).toContain('file:pr-2.5')
      expect(xl.find('input[type="file"]').classes()).toContain('file:pr-4')
    })
  })

  describe('file selector button styling', () => {
    it('rounds the left corners of the file selector button to match the input', () => {
      const wrapper = mount(FwbFileInput)
      const classes = wrapper.find('input[type="file"]').classes()
      expect(classes).toContain('file:rounded-l-lg')
      expect(classes).not.toContain('file:rounded-none')
    })
  })

  describe('validation status classes', () => {
    it('error state adds rose-colored classes to the input', () => {
      const wrapper = mount(FwbFileInput, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input[type="file"]').classes()).toContain('bg-rose-50')
    })

    it('success state adds emerald-colored classes to the input', () => {
      const wrapper = mount(FwbFileInput, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input[type="file"]').classes()).toContain('bg-emerald-50')
    })
  })

  describe('disabled dropzone', () => {
    it('calls preventDefault on dragover even when disabled', () => {
      const wrapper = mount(FwbFileInput, { props: { dropzone: true, disabled: true } })
      const event = new Event('dragover', { bubbles: true, cancelable: true })
      const spy = vi.spyOn(event, 'preventDefault')
      wrapper.element.dispatchEvent(event)
      expect(spy).toHaveBeenCalled()
    })

    it('calls preventDefault on drop even when disabled', () => {
      const wrapper = mount(FwbFileInput, { props: { dropzone: true, disabled: true } })
      const event = new Event('drop', { bubbles: true, cancelable: true })
      const spy = vi.spyOn(event, 'preventDefault')
      wrapper.element.dispatchEvent(event)
      expect(spy).toHaveBeenCalled()
    })

    it('does not update model on drop when disabled', async () => {
      const wrapper = mount(FwbFileInput, { props: { dropzone: true, disabled: true } })
      const event = new Event('drop', { bubbles: true, cancelable: true })
      wrapper.element.dispatchEvent(event)
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })
})
