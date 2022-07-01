import type {ButtonGradient, ButtonSize, ButtonVariant} from './Button.vue'
import type {SpinnerColor, SpinnerSize} from '../Spinner/Spinner.vue'
import type {Ref} from 'vue'
import {computed} from 'vue'

export type UseButtonSpinnerProps = {
    outline: boolean
    size: ButtonSize
    color: ButtonVariant
    gradient: ButtonGradient | null
}

export function useButtonSpinner(props: UseButtonSpinnerProps): { size: Ref<SpinnerSize>, color: Ref<SpinnerColor> } {
    const btnSizeSpinnerSizeMap: Record<ButtonSize, SpinnerSize> = {
        lg: '5', md: '4', sm: '3', xl: '6', xs: '2.5',
    }
    const size = computed<SpinnerSize>(() => {
        return btnSizeSpinnerSizeMap[props.size]
    })
    const color = computed<SpinnerColor>(() => {

        if(!props.outline) return 'white'

        if(props.gradient) {
            if(props.gradient.includes('purple')) return 'purple'
            else if(props.gradient.includes('blue')) return 'blue'
            else if(props.gradient.includes('pink')) return 'pink'
            else if(props.gradient.includes('red')) return 'red'
            return 'white'
        }

        if(['alternative', 'dark', 'light'].includes(props.color)) {
            return 'white'
        } else if(props.color === 'default') {
            return 'blue'
        }
        return props.color as SpinnerColor
    })

    return {
        size,
        color,
    }
}