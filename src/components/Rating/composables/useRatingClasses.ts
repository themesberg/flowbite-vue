import type { Ref } from 'vue'
import { computed } from 'vue'
import classNames from 'classnames'
import type { RatingSize } from '../types'

const ratingSizeClasses: Record<RatingSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10'
}

export function useRatingClasses(props: UseRatingClassesProps):{
  sizeClasses: Ref<string>
}{
  const sizeClasses = computed(() => {
    let sizeClass = ''
    sizeClass = ratingSizeClasses[props.size.value]
    return classNames(
      sizeClass
    )
  })


  return {
    sizeClasses
  }
}