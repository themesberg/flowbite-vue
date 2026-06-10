import { computed, type Ref } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type FormElementSize, type ValidationStatus, validationStatusMap } from '@/types/form'

const defaultWrapperClasses = ''
const defaultLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'
const defaultTextareaWrapperClasses = 'relative bg-gray-50 dark:bg-gray-700 shadow-xs border border-gray-300 has-[textarea:focus]:border-blue-500 dark:border-gray-600 dark:has-[textarea:focus]:border-blue-500 rounded-lg has-[textarea:focus]:ring-1 has-[textarea:focus]:ring-blue-500 dark:has-[textarea:focus]:ring-blue-500 text-gray-900 dark:text-white'
const defaultTextareaClasses = 'block bg-transparent border-0 focus:border-0 focus:outline-none dark:focus:outline-none ring-0 focus:ring-0 dark:focus:ring-0 w-full text-inherit dark:placeholder:text-gray-400 placeholder:text-gray-400'
const defaultFooterClasses = 'px-3.5 py-2 border-gray-300 dark:border-gray-600 border-t'
const defaultHelperClasses = 'mt-2 text-gray-500 dark:text-gray-400 text-sm'

const disabledTextareaWrapperClasses = 'bg-gray-100'
const disabledTextareaClasses = 'cursor-not-allowed'

const textareaSizeClasses: Record<FormElementSize, string> = {
  sm: 'px-2.5 py-2 text-sm',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-3.5 py-3 text-base',
  xl: 'px-4 py-3.5 text-base',
}

const errorTextareaWrapperClasses = 'bg-rose-50 border-rose-200 has-[textarea:focus]:border-rose-500 dark:border-rose-500 has-[textarea:focus]:ring-rose-500 text-rose-900 dark:text-rose-500'
const errorTextClasses = 'text-rose-900 dark:text-rose-500'
const successTextareaWrapperClasses = 'bg-emerald-50 border-emerald-200 has-[textarea:focus]:border-emerald-500 dark:border-emerald-500 has-[textarea:focus]:ring-emerald-500 text-emerald-900 dark:text-emerald-400'
const successTextClasses = 'text-emerald-900 dark:text-emerald-500'
const errorTextareaClasses = 'text-rose-900 placeholder:text-rose-900 dark:placeholder:text-rose-500'
const successTextareaClasses = 'text-emerald-900 dark:text-emerald-400 placeholder:text-emerald-900 dark:placeholder:text-emerald-500'

export type UseTextareaClassesProps = {
  class: Ref<string | Record<string, boolean>>
  disabled: Ref<boolean>
  footerClass: Ref<string | Record<string, boolean>>
  labelClass: Ref<string | Record<string, boolean>>
  size: Ref<FormElementSize>
  textareaClass: Ref<string | Record<string, boolean>>
  validationStatus: Ref<ValidationStatus | undefined>
  wrapperClass: Ref<string | Record<string, boolean>>
}

export function useTextareaClasses (props: UseTextareaClassesProps) {
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

  const textareaWrapperClass = computed(() => useMergeClasses([
    defaultTextareaWrapperClasses,
    props.class.value,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextareaWrapperClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextareaWrapperClasses : '',
    props.disabled.value ? disabledTextareaWrapperClasses : '',
  ]))

  const textareaClass = computed(() => useMergeClasses([
    defaultTextareaClasses,
    textareaSizeClasses[props.size.value],
    props.validationStatus.value === validationStatusMap.Success
      ? successTextareaClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextareaClasses : '',
    props.textareaClass.value,
    props.disabled.value ? disabledTextareaClasses : '',
  ]))

  const validationMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
    props.validationStatus.value === validationStatusMap.Success
      ? successTextClasses
      : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
  ]))

  const footerClass = computed(() => useMergeClasses([
    defaultFooterClasses,
    props.footerClass.value,
  ]))

  const helperMessageClass = computed(() => useMergeClasses([
    defaultHelperClasses,
  ]))

  return {
    footerClass,
    helperMessageClass,
    labelClass,
    textareaClass,
    textareaWrapperClass,
    validationMessageClass,
    wrapperClass,
  }
}
