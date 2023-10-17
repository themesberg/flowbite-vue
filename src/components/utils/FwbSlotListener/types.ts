export type SlotListenerTrigger = 'click' | 'focus' | 'hover'

export type TriggerEventHandlers = {
  onClick: (e: MouseEvent) => void
  onMouseenter: (e: MouseEvent) => void
  onMouseleave: (e: MouseEvent) => void
  onFocus: (e: FocusEvent) => void
  onBlur: (e: FocusEvent) => void
}
