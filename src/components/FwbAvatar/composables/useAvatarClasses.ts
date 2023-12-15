import { computed, type Ref } from 'vue'
import type {
  avatarDotIndicatorPositionClasses,
  AvatarSize,
  AvatarStatus,
  AvatarStatusPosition,
  AvatarType,
} from '@/components/FwbAvatar/types'
import { useMergeClasses } from '@/composables/useMergeClasses'

const avatarSizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-36 h-36',
}
const avatarTypeClasses: Record<AvatarType, string> = {
  default: 'rounded',
  rounded: 'rounded-full',
}
const avatarBorderedClasses = 'ring-2 ring-gray-300 dark:ring-gray-500 p-1'
const avatarStatusDotDefaultClasses = 'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800'
const avatarStatusDotClasses: Record<AvatarStatus, string> = {
  away: 'bg-gray-400',
  busy: 'bg-yellow-400',
  offline: 'bg-red-400',
  online: 'bg-green-400',
}
const avatarStatusDotPositionClasses: Record<avatarDotIndicatorPositionClasses, string> = {
  'top-right-rounded': 'top-0 -right-0.5',
  'top-right-default': '-top-1.5 -right-1.5',
  'top-left-rounded': 'top-0 left-0',
  'top-left-default': 'top-0 left-0 transform -translate-y-1/2 -translate-x-1/2',
  'bottom-right-rounded': 'bottom-0 -right-0.5',
  'bottom-right-default': 'bottom-0 -right-1.5 translate-y-1/2',
  'bottom-left-rounded': 'bottom-0 left-0',
  'bottom-left-default': '-bottom-1.5 left-0 transform -translate-x-1/2 ',
}

const avatarPlaceholderDefaultClasses = 'absolute w-auto h-auto text-gray-400'
const avatarPlaceholderWrapperDefaultClasses = 'flex overflow-hidden relative justify-center items-center'
const avatarPlaceholderWrapperBackgroundClasses = 'bg-gray-100 dark:bg-gray-600'
const avatarPlaceholderInitialsDefaultClasses = 'font-medium text-gray-600 dark:text-gray-300'
const avatarPlaceholderSizes = {
  xs: 'bottom-0',
  sm: 'bottom-0',
  md: '-bottom-1',
  lg: '-bottom-2',
  xl: '-bottom-4',
}

export type UseAvatarClassesProps = {
    status: Ref<AvatarStatus>
    bordered: Ref<boolean>
    img: Ref<string>
    alt: Ref<string>
    rounded: Ref<boolean>
    size: Ref<AvatarSize>
    stacked: Ref<boolean>
    statusPosition: Ref<AvatarStatusPosition>
}

export function useAvatarClasses (props: UseAvatarClassesProps): {
    avatarClasses: Ref<string>
    avatarDotClasses: Ref<string>
    avatarPlaceholderClasses: Ref<string>
    avatarPlaceholderWrapperClasses: Ref<string>
    avatarPlaceholderInitialsClasses: Ref<string>
} {
  const avatarClasses = computed<string>(() =>
    useMergeClasses([
      avatarSizeClasses[props.size.value],
      avatarTypeClasses[props.rounded.value ? 'rounded' : 'default'],
      props.bordered.value ? avatarBorderedClasses : '',
      props.stacked.value ? 'border-2 border-white dark:border-gray-800' : '',
    ]),
  )
  const avatarDotClasses = computed<string>(() => {
    const avatarType = `${props.statusPosition.value}-${props.rounded.value ? 'rounded' : 'default'}`
    return useMergeClasses([
      avatarStatusDotDefaultClasses,
      avatarStatusDotClasses[props.status.value],
      avatarStatusDotPositionClasses[avatarType as avatarDotIndicatorPositionClasses],
    ])
  })
  const avatarPlaceholderClasses = computed<string>(() =>
    useMergeClasses([
      avatarPlaceholderDefaultClasses,
      avatarPlaceholderSizes[props.size.value],
    ]),
  )
  const avatarPlaceholderWrapperClasses = computed<string>(() =>
    useMergeClasses([
      avatarPlaceholderWrapperDefaultClasses,
      avatarSizeClasses[props.size.value],
      avatarTypeClasses[props.rounded.value ? 'rounded' : 'default'],
      (props.img.value && props.bordered.value) ? '' : avatarPlaceholderWrapperBackgroundClasses,
      props.bordered.value ? ' overflow-visible' : '',
    ]),
  )
  const avatarPlaceholderInitialsClasses = computed<string>(() =>
    useMergeClasses([
      avatarPlaceholderInitialsDefaultClasses,
    ]),
  )

  return {
    avatarClasses,
    avatarDotClasses,
    avatarPlaceholderClasses,
    avatarPlaceholderInitialsClasses,
    avatarPlaceholderWrapperClasses,
  }
}
