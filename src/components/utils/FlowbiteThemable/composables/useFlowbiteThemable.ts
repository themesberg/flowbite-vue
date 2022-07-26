import type { FlowbiteTheme } from '../types'
import type { Ref } from 'vue'
import { computed, inject, ref } from 'vue'
import { FLOWBITE_THEMABLE_INJECTION_KEY } from '../injection/config'

type UseFlowbiteThemableReturns = {
    textClasses: Ref<string>
    backgroundClasses: Ref<string>
    hoverClasses: Ref<string>
    disabledClasses: Ref<string>
    borderClasses: Ref<string>
    focusClasses: Ref<string>
    isActive: Ref<boolean>
    color: Ref<FlowbiteTheme | undefined>
}

type FlowbiteThemeMap = { background: string, disabled: string, hover: string, text: string, border: string, focus: string }
type FlowbiteThemes<T extends string = string> = Record<T, FlowbiteThemeMap>

const flowbiteThemesColors: FlowbiteTheme[] = ['blue', 'green', 'red', 'pink', 'purple']

const flowbiteThemeClasses: FlowbiteThemes<FlowbiteTheme> = {
    blue: {
        background: 'bg-blue-700 dark:bg-blue-600',
        disabled: '',
        hover: 'hover:bg-blue-800 dark:hover:bg-blue-700',
        text: 'text-blue-600 dark:text-blue-500',
        border: 'border-blue-600 dark:border-blue-500',
        focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
    },
    green: {
        background: 'bg-green-700 dark:bg-green-600',
        disabled: '',
        hover: 'hover:bg-green-800 dark:hover:bg-green-700',
        text: 'text-green-600 dark:text-green-500',
        border: 'border-green-600 dark:border-green-500',
        focus: 'focus:ring-green-300 dark:focus:ring-green-800',
    },
    pink: {
        background: 'bg-pink-700 dark:bg-pink-600',
        disabled: '',
        hover: 'hover:bg-pink-800 dark:hover:bg-pink-700',
        text: 'text-pink-600 dark:text-pink-500',
        border: 'border-pink-600 dark:border-pink-500',
        focus: 'focus:ring-pink-300 dark:focus:ring-pink-900',
    },
    purple: {
        background: 'bg-purple-700 dark:bg-purple-600',
        disabled: '',
        hover: 'hover:bg-purple-800 dark:hover:bg-purple-700',
        text: 'text-purple-600 dark:text-purple-500',
        border: 'border-purple-600 dark:border-purple-500',
        focus: 'focus:ring-purple-300 dark:focus:ring-purple-900',
    },
    red: {
        background: 'bg-red-700 dark:bg-red-600',
        disabled: '',
        hover: 'hover:bg-red-800 dark:hover:bg-red-700',
        text: 'text-red-600 dark:text-red-500',
        border: 'border-red-600 dark:border-red-500',
        focus: 'focus:ring-red-300 dark:focus:ring-red-900',
    },

}

export function useFlowbiteThemable(_theme?: FlowbiteTheme): UseFlowbiteThemableReturns {

    const theme = inject<Ref<FlowbiteTheme | null>>(FLOWBITE_THEMABLE_INJECTION_KEY, ref(null))

    const isActive = computed(() => !!theme?.value)
    const color = computed(() => theme?.value || undefined)

    const themeName = computed(() => {
        return _theme || theme.value
    })

    const backgroundClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].background
    })

    const disabledClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].disabled
    })

    const hoverClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].hover
    })

    const textClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].text
    })

    const borderClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].border
    })

    const focusClasses = computed(() => {
        if(!themeName.value) return ''
        return flowbiteThemeClasses[themeName.value].focus
    })

    return {
        backgroundClasses,
        disabledClasses,
        hoverClasses,
        textClasses,
        borderClasses,
        focusClasses,
        isActive,
        color,
    }
}
