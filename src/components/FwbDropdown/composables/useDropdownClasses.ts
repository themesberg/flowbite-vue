import { computed, nextTick, ref, type Ref, watch } from 'vue'
import classNames from 'classnames'
import type { DropdownPlacement } from '../types'

const defaultDropdownClasses = 'absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700'

const defaultGapInPx = 8

const placementDropdownClasses: Record<DropdownPlacement, string> = {
  bottom: '',
  left: 'top-0',
  right: 'top-0',
  top: '',
}

export type UseDropdownClassesProps = {
  placement: Ref<DropdownPlacement>
  contentRef: Ref<HTMLDivElement | undefined>
  visible: Ref<boolean>
}

const placementCalculators: Record<DropdownPlacement, (rect: DOMRect) => string> = {
  bottom (rect: DOMRect): string {
    return `bottom: -${rect.height + defaultGapInPx}px;`
  },
  left (rect: DOMRect): string {
    return `left: -${rect.width + defaultGapInPx}px;`
  },
  right (rect: DOMRect): string {
    return `right: -${rect.width + defaultGapInPx}px;`
  },
  top (rect: DOMRect): string {
    return `top: -${rect.height + defaultGapInPx}px;`
  },
}

export function useDropdownClasses (props: UseDropdownClassesProps): {
    contentClasses: Ref<string>
    contentStyles: Ref<string>
} {
  watch(props.visible, (value: boolean) => {
    if (value) nextTick(() => calculatePlacementClasses())
  })

  const placementStyles = ref('')

  const calculatePlacementClasses = () => {
    const boundingRect = props.contentRef.value?.getBoundingClientRect()
    if (!boundingRect) {
      placementStyles.value = ''
      return
    }
    placementStyles.value = placementCalculators[props.placement.value](boundingRect)
  }

  const contentClasses = computed(() => {
    return classNames(
      defaultDropdownClasses,
      placementDropdownClasses[props.placement.value],
    )
  })

  return {
    contentClasses,
    contentStyles: placementStyles,
  }
}
