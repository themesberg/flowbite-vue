import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultWrapperClasses = ''
const defaultLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'
const defaultInputClasses = 'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg w-full text-gray-900 dark:text-white cursor-pointer shadow-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
const defaultFileButtonClasses = 'file:cursor-pointer file:border-0 file:border-r file:border-gray-300 file:rounded-l-lg file:bg-gray-200 file:text-gray-900 file:transition-colors file:duration-150 enabled:hover:file:bg-gray-100 dark:file:bg-gray-700 dark:file:border-gray-600 dark:file:text-white dark:enabled:hover:file:bg-gray-600 dark:enabled:hover:file:border-gray-500'
const defaultHelperClasses = 'mt-2 text-gray-500 dark:text-gray-400 text-sm'

const disabledInputClasses = 'cursor-not-allowed opacity-50'

const inputSizeClasses: Record<FormElementSize, string> = {
  sm: 'p-0 text-sm file:mr-2.5 file:pl-6.5 file:pr-2.5 file:py-2 file:text-sm',
  md: 'p-0 text-sm file:mr-3 file:pl-7 file:pr-3 file:py-2.5 file:text-sm',
  lg: 'p-0 text-base file:mr-3.5 file:pl-7.5 file:pr-3.5 file:py-3 file:text-base',
  xl: 'p-0 text-base file:mr-4 file:pl-8 file:pr-4 file:py-3.5 file:text-base',
}

const errorInputClasses = 'bg-rose-50 border-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:ring-rose-500 text-rose-900 dark:text-rose-500'
const errorTextClasses = 'text-rose-900 dark:text-rose-500'
const successInputClasses = 'bg-emerald-50 border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500 dark:border-emerald-500 dark:focus:ring-emerald-500 text-emerald-900 dark:text-emerald-500'
const successTextClasses = 'text-emerald-900 dark:text-emerald-500'

const dropzoneLabelBaseClasses = 'flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg w-full h-64'
const dropzoneLabelInteractiveClasses = 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-500 cursor-pointer'
const dropzoneLabelDisabledClasses = 'cursor-not-allowed opacity-50'
const dropzoneWrapDefaultClasses = 'flex flex-col justify-center items-center pt-5 pb-6'
const dropzoneTextDefaultClasses = '!-mb-2 text-gray-500 dark:text-gray-400 text-sm'

export type UseFileInputClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useFileInputClasses (props: UseFileInputClassesProps) {
  const wrapperClass = computed(() => useMergeClasses([
    defaultWrapperClasses,
    props.wrapperClass.value,
  ]))

  const labelClass = computed(() => useMergeClasses([
    defaultLabelClasses,
    props.labelClass.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const inputClass = computed(() => useMergeClasses([
    defaultInputClasses,
    defaultFileButtonClasses,
    inputSizeClasses[props.size.value],
    props.validationStatus.value === validationStatusMap.Success
      ? successInputClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorInputClasses : '',
    props.class.value,
    props.disabled.value ? disabledInputClasses : '',
  ]))

  const validationMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  const dropzoneLabelClass = computed(() => useMergeClasses([
    dropzoneLabelBaseClasses,
    props.disabled.value ? dropzoneLabelDisabledClasses : dropzoneLabelInteractiveClasses,
  ]))
  const dropzoneWrapClass = computed(() => dropzoneWrapDefaultClasses)
  const dropzoneTextClass = computed(() => dropzoneTextDefaultClasses)

  return {
    dropzoneLabelClass,
    dropzoneTextClass,
    dropzoneWrapClass,
    helperMessageClass,
    inputClass,
    labelClass,
    validationMessageClass,
    wrapperClass,
  }
}
