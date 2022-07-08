import { computed, nextTick, ref, watch } from 'vue'
import type { Ref } from 'vue'
import classNames from 'classnames'
import type { DropdownPlacement } from '../types'

const defaultDropdownClasses = 'absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700'

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
    bottom(rect: DOMRect): string {
        return `bottom: -${rect.height}px;`
    },
    left(rect: DOMRect): string {
        return `left: -${rect.width}px;`
    },
    right(rect: DOMRect): string {
        return `right: -${rect.width}px;`
    },
    top(rect: DOMRect): string {
        return `top: -${rect.height}px;`
    },

}

export function useDropdownClasses(props: UseDropdownClassesProps): {
    contentClasses: Ref<string>
    contentStyles: Ref<string>
} {

    watch(props.visible, (value: boolean) => {
        if(value) nextTick(() => calculatePlacementClasses())
    })

    const placementStyles = ref('')

    const calculatePlacementClasses = () => {
        const boundingRect = props.contentRef.value?.getBoundingClientRect()
        if(!boundingRect) return placementStyles.value = ''
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