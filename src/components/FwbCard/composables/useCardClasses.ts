import { computed, type Ref } from 'vue'
import type { CardsVariant } from '../types'

export type UseCardsClassesProps = {
  variant: Ref<CardsVariant>
  href?: Ref<string>
}

export function useCardsClasses (props: UseCardsClassesProps): {
  cardClasses: Ref<string>,
  horizontalImageClasses: Ref<string>
} {
  const cardClasses = computed(() => {
    let classes = ''
    if (props.variant.value === 'image') {
      classes = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
    }

    if (props.variant.value === 'default') {
      classes = 'block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '
    } else if (props.variant.value === 'horizontal') {
      classes = 'flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800'
    }

    if (props.href?.value) {
      classes += ' hover:bg-gray-100 dark:hover:bg-gray-700'
    }

    return classes
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
