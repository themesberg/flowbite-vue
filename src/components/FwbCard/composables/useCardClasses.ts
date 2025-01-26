import { computed, type Ref } from 'vue'

import type { CardsVariant } from '../types'

export type UseCardsClassesProps = {
  variant: Ref<CardsVariant>
  href?: Ref<string>
}

export function useCardsClasses (props: UseCardsClassesProps): {
  cardClasses: Ref<string>
  horizontalImageClasses: Ref<string>
} {
  const cardClasses = computed(() => {
    let computedClasses = ''
    if (props.variant.value === 'image') {
      computedClasses = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
    }

    if (props.variant.value === 'default') {
      computedClasses = 'block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '
    } else if (props.variant.value === 'horizontal') {
      computedClasses = 'flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800'
    }

    if (props.href?.value) {
      computedClasses += ' hover:bg-gray-100 dark:hover:bg-gray-700'
    }

    return computedClasses
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
