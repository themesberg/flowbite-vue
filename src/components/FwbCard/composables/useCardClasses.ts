import { computed, type Ref } from 'vue'

import type { CardsVariant } from '../types'
import type { ClassInput } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

const variantClasses: Record<CardsVariant, string> = {
  default: 'block min-w-sm rounded-lg border border-gray-200 shadow-md dark:border-gray-700',
  image: 'min-w-sm rounded-lg border border-gray-200 shadow-md dark:border-gray-700',
  horizontal: 'flex flex-col items-center rounded-lg border shadow-md md:flex-row md:min-w-xl dark:border-gray-700',
}
const backgroundClasses = 'bg-white dark:bg-gray-800'
const hoverClasses = 'hover:bg-gray-100 dark:hover:bg-gray-700'

const defaultImageClasses = 'rounded-t-lg'
const horizontalImageClasses = 'object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'

export type UseCardsClassesProps = {
  variant: Ref<CardsVariant>
  href?: Ref<string>
  class?: Ref<ClassInput>
  imgClass?: Ref<ClassInput>
}

export function useCardsClasses (props: UseCardsClassesProps): {
  cardClasses: Ref<string>
  imageClasses: Ref<string>
} {
  const cardClasses = computed(() => {
    const customClasses = props.class?.value ?? ''
    // A custom background color drops the light and dark defaults together, so
    // a light-only custom color is not replaced by the default in dark mode.
    const hasCustomBackground = !useMergeClasses(['bg-white', customClasses]).split(' ').includes('bg-white')

    return useMergeClasses([
      variantClasses[props.variant.value],
      hasCustomBackground ? '' : backgroundClasses,
      props.href?.value && !hasCustomBackground ? hoverClasses : '',
      customClasses,
    ])
  })

  const imageClasses = computed(() => useMergeClasses([
    props.variant.value === 'horizontal' ? horizontalImageClasses : defaultImageClasses,
    props.imgClass?.value ?? '',
  ]))

  return {
    cardClasses,
    imageClasses,
  }
}
