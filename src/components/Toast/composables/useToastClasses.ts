import type { Ref } from 'vue'
import { computed } from 'vue'
import type { ToastPreset } from '@/components/Toast/types'

type UseToastClassesReturns = {
    typeClasses: Ref<string>
}

type UseToastClassesProps = {
    type: Ref<ToastPreset>
}

const typeClassesMap: Record<ToastPreset, string> = {
    danger: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    empty: '',
    success: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    warning: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
}

export function useToastClasses(props: UseToastClassesProps): UseToastClassesReturns {

    const typeClasses = computed(() => {
        return typeClassesMap[props.type.value]
    })

    return {
        typeClasses,
    }
}
