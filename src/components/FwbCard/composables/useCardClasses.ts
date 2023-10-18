import { computed, type Ref } from 'vue'
import type { CardsVariant } from '../types'

export type UseCardsClassesProps = {
  variant: Ref<CardsVariant>
}

export function useCardsClasses (props: UseCardsClassesProps): {
  cardClasses: Ref<string>,
  horizontalImageClasses: Ref<string>
} {
  const cardClasses = computed(() => {
    if (props.variant.value === 'default') {
      return 'block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
    } else if (props.variant.value === 'image') {
      return 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
    } else if (props.variant.value === 'horizontal') {
      return 'flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    }

    return ''
  })

  const horizontalImageClasses = computed(() => (props.variant.value === 'horizontal')
    ? 'object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
    : '',
  )

  return {
    cardClasses,
    horizontalImageClasses,
  }
}
