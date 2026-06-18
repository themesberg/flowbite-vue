import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbSelect from '../FwbSelect.vue'

const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
]

describe('FwbSelect', () => {
  describe('label/select linkage', () => {
    it('links label for to select id', () => {
      const wrapper = mount(FwbSelect, { props: { label: 'Country', options: countries } })
      const labelFor = wrapper.find('label').attributes('for')
      const selectId = wrapper.find('select').attributes('id')
      expect(labelFor).toBeDefined()
      expect(labelFor).toBe(selectId)
    })

    it('uses a user-provided id for both the select and the label', () => {
      const wrapper = mount(FwbSelect, {
        props: { label: 'Country', options: countries },
        attrs: { id: 'custom-id' },
      })
      expect(wrapper.find('select').attributes('id')).toBe('custom-id')
      expect(wrapper.find('label').attributes('for')).toBe('custom-id')
    })

    it('renders no label when label prop is empty', () => {
      const wrapper = mount(FwbSelect)
      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('native attribute passthrough', () => {
    it('disabled prop reaches the select', () => {
      const wrapper = mount(FwbSelect, { props: { disabled: true } })
      expect(wrapper.find('select').attributes('disabled')).toBeDefined()
    })

    it('required prop reaches the select', () => {
      const wrapper = mount(FwbSelect, { props: { required: true } })
      expect(wrapper.find('select').attributes('required')).toBeDefined()
    })

    it('extra attrs land on the select, not on the root wrapper', () => {
      const wrapper = mount(FwbSelect, { attrs: { name: 'country', form: 'my-form' } })
      expect(wrapper.find('select').attributes('name')).toBe('country')
      expect(wrapper.find('select').attributes('form')).toBe('my-form')
      expect(wrapper.element.getAttribute('name')).toBeNull()
    })
  })

  describe('options', () => {
    it('renders all options from the options prop plus the placeholder', () => {
      const wrapper = mount(FwbSelect, { props: { options: countries } })
      expect(wrapper.findAll('option')).toHaveLength(3)
      expect(wrapper.find('option[value="us"]').text()).toBe('United States')
      expect(wrapper.find('option[value="ca"]').text()).toBe('Canada')
    })
  })

  describe('v-model', () => {
    it('reflects the model value in the select', () => {
      const wrapper = mount(FwbSelect, {
        props: {
          'modelValue': 'ca',
          'onUpdate:modelValue': (v: string) => wrapper.setProps({ modelValue: v }),
          'options': countries,
        },
      })
      expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('ca')
    })

    it('emits update:modelValue on change', async () => {
      const wrapper = mount(FwbSelect, { props: { options: countries } })
      await wrapper.find('select').setValue('us')
      expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe('us')
    })
  })

  describe('clearable', () => {
    it('placeholder option is disabled and hidden by default', () => {
      const wrapper = mount(FwbSelect)
      const placeholder = wrapper.find('option[value=""]')
      expect(placeholder.attributes('disabled')).toBeDefined()
      expect(placeholder.attributes('hidden')).toBeDefined()
    })

    it('placeholder option is enabled and visible when clearable', () => {
      const wrapper = mount(FwbSelect, { props: { clearable: true } })
      const placeholder = wrapper.find('option[value=""]')
      expect(placeholder.attributes('disabled')).toBeUndefined()
      expect(placeholder.attributes('hidden')).toBeUndefined()
    })
  })

  describe('aria-invalid', () => {
    it('is "true" when validationStatus is "error"', () => {
      const wrapper = mount(FwbSelect, { props: { validationStatus: 'error' } })
      expect(wrapper.find('select').attributes('aria-invalid')).toBe('true')
    })

    it('is absent when validationStatus is "success"', () => {
      const wrapper = mount(FwbSelect, { props: { validationStatus: 'success' } })
      expect(wrapper.find('select').attributes('aria-invalid')).toBeUndefined()
    })

    it('is absent when validationStatus is not set', () => {
      const wrapper = mount(FwbSelect)
      expect(wrapper.find('select').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no helper or validationMessage slot is provided', () => {
      const wrapper = mount(FwbSelect)
      expect(wrapper.find('select').attributes('aria-describedby')).toBeUndefined()
    })

    it('points to the helper paragraph id when the helper slot is provided', () => {
      const wrapper = mount(FwbSelect, { slots: { helper: 'Some help text' } })
      const helperP = wrapper.find('p')
      expect(wrapper.find('select').attributes('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbSelect, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Please select a country' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.find('select').attributes('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs space-joined when both slots are rendered', () => {
      const wrapper = mount(FwbSelect, {
        props: { validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Help text' },
      })
      const describedby = wrapper.find('select').attributes('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach(id => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })

    it('merges a user-passed aria-describedby with the slot IDs', () => {
      const wrapper = mount(FwbSelect, {
        attrs: { 'aria-describedby': 'external-id' },
        slots: { helper: 'Help text' },
      })
      const ids = (wrapper.find('select').attributes('aria-describedby') ?? '').split(' ')
      expect(ids).toContain('external-id')
      expect(ids).toHaveLength(2)
    })
  })

  describe('size classes', () => {
    it('sm and xl apply different padding to the select', () => {
      const sm = mount(FwbSelect, { props: { size: 'sm' } })
      const xl = mount(FwbSelect, { props: { size: 'xl' } })
      const smPadding = sm.find('select').classes().filter(c => /^p[xy]-/.test(c))
      const xlPadding = xl.find('select').classes().filter(c => /^p[xy]-/.test(c))
      expect(smPadding).not.toEqual(xlPadding)
    })
  })

  describe('validation status classes', () => {
    it('error state adds rose-colored classes to the select', () => {
      const wrapper = mount(FwbSelect, { props: { validationStatus: 'error' } })
      expect(wrapper.find('select').classes().join(' ')).toContain('rose')
    })

    it('success state adds emerald-colored classes to the select', () => {
      const wrapper = mount(FwbSelect, { props: { validationStatus: 'success' } })
      expect(wrapper.find('select').classes().join(' ')).toContain('emerald')
    })

    it('no validation state adds neither rose nor emerald classes to the select', () => {
      const wrapper = mount(FwbSelect)
      const classes = wrapper.find('select').classes().join(' ')
      expect(classes).not.toContain('rose')
      expect(classes).not.toContain('emerald')
    })
  })

  describe('class passthrough props', () => {
    it('wrapperClass is applied to the root div', () => {
      const wrapper = mount(FwbSelect, { props: { wrapperClass: 'my-wrapper' } })
      expect(wrapper.classes()).toContain('my-wrapper')
    })

    it('labelClass is applied to the label element', () => {
      const wrapper = mount(FwbSelect, { props: { label: 'Country', labelClass: 'my-label' } })
      expect(wrapper.find('label').classes()).toContain('my-label')
    })

    it('class is applied to the select element', () => {
      const wrapper = mount(FwbSelect, { props: { class: 'my-select' } })
      expect(wrapper.find('select').classes()).toContain('my-select')
    })

    it('chevronClass is applied to the chevron container', () => {
      const wrapper = mount(FwbSelect, { props: { chevronClass: 'my-chevron' } })
      expect(wrapper.find('.pointer-events-none').classes()).toContain('my-chevron')
    })
  })

  describe('chevron slot', () => {
    it('renders the default SVG chevron when no slot is provided', () => {
      const wrapper = mount(FwbSelect)
      expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('replaces the default chevron when the slot is filled', () => {
      const wrapper = mount(FwbSelect, {
        slots: { chevron: '<span data-testid="custom-chevron" />' },
      })
      expect(wrapper.find('[data-testid="custom-chevron"]').exists()).toBe(true)
      expect(wrapper.find('path[d="m1 1 4 4 4-4"]').exists()).toBe(false)
    })
  })
})
