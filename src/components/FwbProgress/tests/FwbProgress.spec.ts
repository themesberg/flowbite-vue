import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbProgress from '../FwbProgress.vue'

describe('FwbProgress', () => {
  describe('default rendering', () => {
    it('renders a progressbar role with aria-value bounds', () => {
      const wrapper = mount(FwbProgress, { props: { progress: 45 } })
      const track = wrapper.find('[role="progressbar"]')
      expect(track.attributes('aria-valuemin')).toBe('0')
      expect(track.attributes('aria-valuemax')).toBe('100')
      expect(track.attributes('aria-valuenow')).toBe('45')
    })

    it('sets the inner bar width from the progress prop', () => {
      const wrapper = mount(FwbProgress, { props: { progress: 33 } })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.attributes('style')).toContain('width: 33%')
    })

    it('renders no label row when label is empty and showValue is false', () => {
      const wrapper = mount(FwbProgress)
      expect(wrapper.find('.mb-1').exists()).toBe(false)
    })

    it('renders the label row when label is set', () => {
      const wrapper = mount(FwbProgress, { props: { label: 'Uploading' } })
      expect(wrapper.text()).toContain('Uploading')
    })
  })

  describe('value display', () => {
    it('does not render a value when showValue is false', () => {
      const wrapper = mount(FwbProgress, { props: { progress: 50, valuePosition: 'inside' } })
      expect(wrapper.text()).not.toContain('50%')
    })

    it('renders the default N% value inside the bar', () => {
      const wrapper = mount(FwbProgress, {
        props: { progress: 50, showValue: true, valuePosition: 'inside' },
      })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.text()).toBe('50%')
    })

    it('renders the value outside the bar, next to the label', () => {
      const wrapper = mount(FwbProgress, {
        props: { progress: 42, label: 'Flowbite Vue', showValue: true, valuePosition: 'outside' },
      })
      const labelRow = wrapper.find('.mb-1')
      expect(labelRow.text()).toContain('Flowbite Vue')
      expect(labelRow.text()).toContain('42%')
    })

    it('does not render the value inside the bar when progress is exactly 0', () => {
      const wrapper = mount(FwbProgress, {
        props: { progress: 0, showValue: true, valuePosition: 'inside' },
      })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.text()).toBe('')
    })

    it('uses custom formatting from the value slot', () => {
      const wrapper = mount(FwbProgress, {
        props: { progress: 40, showValue: true, valuePosition: 'inside' },
        slots: {
          value: '<template #value="{ progress }">{{ progress }} of 100</template>',
        },
      })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.text()).toBe('40 of 100')
    })
  })

  describe('color classes', () => {
    it('applies the default blue fill', () => {
      const wrapper = mount(FwbProgress)
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.classes()).toContain('bg-blue-700')
    })

    it('applies a different fill for other color variants', () => {
      const wrapper = mount(FwbProgress, { props: { color: 'green' } })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.classes()).toContain('bg-green-700')
    })
  })

  describe('size classes', () => {
    it('sm and xl apply different track heights', () => {
      const sm = mount(FwbProgress, { props: { size: 'sm' } })
      const xl = mount(FwbProgress, { props: { size: 'xl' } })
      expect(sm.find('[role="progressbar"]').classes()).toContain('h-1.5')
      expect(xl.find('[role="progressbar"]').classes()).toContain('h-6')
    })
  })

  describe('indeterminate mode', () => {
    it('omits aria-valuenow', () => {
      const wrapper = mount(FwbProgress, { props: { indeterminate: true, progress: 50 } })
      expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBeUndefined()
    })

    it('does not set an inline width style', () => {
      const wrapper = mount(FwbProgress, { props: { indeterminate: true, progress: 50 } })
      const bar = wrapper.find('[role="progressbar"] > div')
      expect(bar.attributes('style')).toBeUndefined()
    })

    it('does not render a value even when showValue is set', () => {
      const wrapper = mount(FwbProgress, {
        props: { indeterminate: true, progress: 50, showValue: true, valuePosition: 'outside', label: 'Uploading' },
      })
      const labelRow = wrapper.find('.mb-1')
      expect(labelRow.text()).toBe('Uploading')
    })
  })

  describe('custom classes', () => {
    it('merges innerClasses, outerClasses and outsideLabelClasses onto their elements', () => {
      const wrapper = mount(FwbProgress, {
        props: {
          label: 'Custom',
          innerClasses: 'bg-teal-900',
          outerClasses: 'bg-teal-200',
          outsideLabelClasses: 'italic',
        },
      })
      expect(wrapper.find('[role="progressbar"] > div').classes()).toContain('bg-teal-900')
      expect(wrapper.find('[role="progressbar"]').classes()).toContain('bg-teal-200')
      expect(wrapper.find('.mb-1 span').classes()).toContain('italic')
    })
  })
})
