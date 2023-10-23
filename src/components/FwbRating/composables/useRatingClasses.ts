import { computed, type Ref } from 'vue'
import classNames from 'classnames'
import type { RatingSize } from '../types'

const ratingSizeClasses: Record<RatingSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
}

export type UseRatingClassesProps = {
  size: Ref<RatingSize>
}

export function useRatingClasses (props: UseRatingClassesProps):{
  sizeClasses: Ref<string>
} {
  const sizeClasses = computed(() => classNames(
    ratingSizeClasses[props.size.value] ?? '',
  ))

  return { sizeClasses }
}
