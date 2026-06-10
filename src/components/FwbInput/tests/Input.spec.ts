import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbInput from '../FwbInput.vue'

describe('FwbInput', () => {
  describe('label/input linkage', () => {
    it('links label for to input id', () => {
      const wrapper = mount(FwbInput, { props: { label: 'Email' } })
      const labelFor = wrapper.find('label').attributes('for')
      const inputId = wrapper.find('input').attributes('id')
      expect(labelFor).toBeDefined()
      expect(labelFor).toBe(inputId)
    })

    it('renders no label when label prop is empty', () => {
      const wrapper = mount(FwbInput)
      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('native attribute passthrough', () => {
    it('disabled prop reaches the input', () => {
      const wrapper = mount(FwbInput, { props: { disabled: true } })
      expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    })

    it('required prop reaches the input', () => {
      const wrapper = mount(FwbInput, { props: { required: true } })
      expect(wrapper.find('input').attributes('required')).toBeDefined()
    })

    it('type prop reaches the input', () => {
      const wrapper = mount(FwbInput, { props: { type: 'email' } })
      expect(wrapper.find('input').attributes('type')).toBe('email')
    })

    it('extra attrs land on the input, not on the root wrapper', () => {
      const wrapper = mount(FwbInput, {
        attrs: { placeholder: 'Search...', step: '0.5', readonly: '' },
      })
      const input = wrapper.find('input')
      expect(input.attributes('placeholder')).toBe('Search...')
      expect(input.attributes('step')).toBe('0.5')
      expect(input.attributes('readonly')).toBeDefined()
      expect(wrapper.element.getAttribute('placeholder')).toBeNull()
    })
  })

  describe('v-model', () => {
    it('reflects the model value in the input', () => {
      const wrapper = mount(FwbInput, {
        props: {
          'modelValue': 'hello',
          'onUpdate:modelValue': (v: string | number) => wrapper.setProps({ modelValue: String(v) }),
        },
      })
      expect((wrapper.find('input').element as HTMLInputElement).value).toBe('hello')
    })

    it('emits update:modelValue on user input', async () => {
      const wrapper = mount(FwbInput)
      await wrapper.find('input').setValue('typed value')
      expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe('typed value')
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbInput, { props: { validationStatus: 'error' } })
      expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbInput, { props: { validationStatus: 'success' } })
      expect(wrapper.find('input').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbInput)
      expect(wrapper.find('input').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no helper or validationMessage slot is provided', () => {
      const wrapper = mount(FwbInput)
      expect(wrapper.find('input').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbInput, { slots: { helper: 'Some help text' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('input').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbInput, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Field is required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('input').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbInput, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Help text' },
      })
      const describedby = wrapper.find('input').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with the slot IDs', () => {
      const wrapper = mount(FwbInput, {
        attrs: { 'aria-describedby': 'external-id' },
        slots: { helper: 'Help text' },
      })
      const ids = (wrapper.find('input').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-id')
      expect(ids).toHaveLength(2)
    })
  })

  describe('size classes', () => {
    it('sm and xl apply different padding to the input', () => {
      const sm = mount(FwbInput, { props: { size: 'sm' } })
      const xl = mount(FwbInput, { props: { size: 'xl' } })
      const smPadding = sm.find('input').classes().filter(c => /^p[xy]-/.test(c))
      const xlPadding = xl.find('input').classes().filter(c => /^p[xy]-/.test(c))
      expect(smPadding).not.toEqual(xlPadding)
    })
  })

  describe('validation status classes', () => {
    it('error state adds rose-colored classes to the input wrapper', () => {
      const wrapper = mount(FwbInput, { props: { validationStatus: 'error' } })
      expect(wrapper.find('.relative').classes().join(' ')).toContain('rose')
    })

    it('success state adds emerald-colored classes to the input wrapper', () => {
      const wrapper = mount(FwbInput, { props: { validationStatus: 'success' } })
      expect(wrapper.find('.relative').classes().join(' ')).toContain('emerald')
    })

    it('no validation state adds neither rose nor emerald classes', () => {
      const wrapper = mount(FwbInput)
      const classes = wrapper.find('.relative').classes().join(' ')
      expect(classes).not.toContain('rose')
      expect(classes).not.toContain('emerald')
    })
  })

  describe('prefix/suffix addon detection', () => {
    it('text prefix gets a border-r divider', () => {
      const wrapper = mount(FwbInput, { slots: { prefix: 'https://' } })
      expect(wrapper.find('.border-r').exists()).toBe(true)
    })

    it('element prefix gets icon-spacing (ms-2) without a border divider', () => {
      const wrapper = mount(FwbInput, {
        slots: { prefix: '<svg aria-hidden="true" />' },
      })
      expect(wrapper.find('.ms-2').exists()).toBe(true)
      expect(wrapper.find('.border-r').exists()).toBe(false)
    })

    it('text suffix gets a border-l divider', () => {
      const wrapper = mount(FwbInput, { slots: { suffix: '%' } })
      expect(wrapper.find('.border-l').exists()).toBe(true)
    })

    it('element suffix gets icon-spacing (me-2) without a border divider', () => {
      const wrapper = mount(FwbInput, {
        slots: { suffix: '<button>Go</button>' },
      })
      expect(wrapper.find('.me-2').exists()).toBe(true)
      expect(wrapper.find('.border-l').exists()).toBe(false)
    })
  })
})
