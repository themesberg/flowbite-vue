import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbTextarea from '../FwbTextarea.vue'

describe('FwbTextarea', () => {
  describe('label/textarea linkage', () => {
    it('links label for to textarea id', () => {
      const wrapper = mount(FwbTextarea, { props: { label: 'Message' } })
      const labelFor = wrapper.find('label').attributes('for')
      const textareaId = wrapper.find('textarea').attributes('id')
      expect(labelFor).toBeDefined()
      expect(labelFor).toBe(textareaId)
    })

    it('uses a user-provided id for both the textarea and the label', () => {
      const wrapper = mount(FwbTextarea, { props: { label: 'Message' }, attrs: { id: 'custom-id' } })
      expect(wrapper.find('textarea').attributes('id')).toBe('custom-id')
      expect(wrapper.find('label').attributes('for')).toBe('custom-id')
    })

    it('renders no label when label prop is empty', () => {
      const wrapper = mount(FwbTextarea)
      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('native attribute passthrough', () => {
    it('disabled prop reaches the textarea', () => {
      const wrapper = mount(FwbTextarea, { props: { disabled: true } })
      expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
    })

    it('required prop reaches the textarea', () => {
      const wrapper = mount(FwbTextarea, { props: { required: true } })
      expect(wrapper.find('textarea').attributes('required')).toBeDefined()
    })

    it('rows prop reaches the textarea', () => {
      const wrapper = mount(FwbTextarea, { props: { rows: 8 } })
      expect(wrapper.find('textarea').attributes('rows')).toBe('8')
    })

    it('extra attrs land on the textarea, not on the root wrapper', () => {
      const wrapper = mount(FwbTextarea, {
        attrs: { placeholder: 'Write here...', maxlength: '200', readonly: '' },
      })
      const textarea = wrapper.find('textarea')
      expect(textarea.attributes('placeholder')).toBe('Write here...')
      expect(textarea.attributes('maxlength')).toBe('200')
      expect(textarea.attributes('readonly')).toBeDefined()
      expect(wrapper.element.getAttribute('placeholder')).toBeNull()
    })
  })

  describe('v-model', () => {
    it('reflects the model value in the textarea', () => {
      const wrapper = mount(FwbTextarea, {
        props: {
          'modelValue': 'hello',
          'onUpdate:modelValue': (v: string) => wrapper.setProps({ modelValue: v }),
        },
      })
      expect((wrapper.find('textarea').element as HTMLTextAreaElement).value).toBe('hello')
    })

    it('emits update:modelValue on user input', async () => {
      const wrapper = mount(FwbTextarea)
      await wrapper.find('textarea').setValue('typed value')
      expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe('typed value')
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbTextarea, { props: { validationStatus: 'error' } })
      expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbTextarea, { props: { validationStatus: 'success' } })
      expect(wrapper.find('textarea').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbTextarea)
      expect(wrapper.find('textarea').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no helper or validationMessage slot is provided', () => {
      const wrapper = mount(FwbTextarea)
      expect(wrapper.find('textarea').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbTextarea, { slots: { helper: 'Some help text' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('textarea').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbTextarea, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'This field is required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('textarea').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbTextarea, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Help text' },
      })
      const describedby = wrapper.find('textarea').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with the slot IDs', () => {
      const wrapper = mount(FwbTextarea, {
        attrs: { 'aria-describedby': 'external-id' },
        slots: { helper: 'Help text' },
      })
      const ids = (wrapper.find('textarea').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-id')
      expect(ids).toHaveLength(2)
    })
  })

  describe('validationMessage prop', () => {
    it('renders the prop text when no validationMessage slot is provided', () => {
      const wrapper = mount(FwbTextarea, {
        props: { validationStatus: 'error', validationMessage: 'This field is required' },
      })
      expect(wrapper.find('p').text()).toBe('This field is required')
    })

    it('is overridden by the validationMessage slot when both are provided', () => {
      const wrapper = mount(FwbTextarea, {
        props: { validationStatus: 'error', validationMessage: 'Prop message' },
        slots: { validationMessage: 'Slot message' },
      })
      expect(wrapper.find('p').text()).toBe('Slot message')
    })

    it('points aria-describedby to the validation paragraph when only the prop is set', () => {
      const wrapper = mount(FwbTextarea, {
        props: { validationStatus: 'error', validationMessage: 'This field is required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('textarea').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })
  })

  describe('size classes', () => {
    it('sm and xl apply different padding to the textarea', () => {
      const sm = mount(FwbTextarea, { props: { size: 'sm' } })
      const xl = mount(FwbTextarea, { props: { size: 'xl' } })
      const smPadding = sm.find('textarea').classes().filter(c => /^p[xy]-/.test(c))
      const xlPadding = xl.find('textarea').classes().filter(c => /^p[xy]-/.test(c))
      expect(smPadding).not.toEqual(xlPadding)
    })
  })

  describe('validation status classes', () => {
    it('error state adds rose-colored classes to the textarea wrapper', () => {
      const wrapper = mount(FwbTextarea, { props: { validationStatus: 'error' } })
      expect(wrapper.find('.relative').classes().join(' ')).toContain('rose')
    })

    it('success state adds emerald-colored classes to the textarea wrapper', () => {
      const wrapper = mount(FwbTextarea, { props: { validationStatus: 'success' } })
      expect(wrapper.find('.relative').classes().join(' ')).toContain('emerald')
    })

    it('no validation state adds neither rose nor emerald classes', () => {
      const wrapper = mount(FwbTextarea)
      const classes = wrapper.find('.relative').classes().join(' ')
      expect(classes).not.toContain('rose')
      expect(classes).not.toContain('emerald')
    })
  })
})
