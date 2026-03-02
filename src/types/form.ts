export type FormElementSize = 'sm' | 'md' | 'lg' | 'xl'

export type Autocomplete =
  | 'on' | 'off'
  // Name
  | 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname'
  // Credentials
  | 'username' | 'current-password' | 'new-password' | 'one-time-code' | 'webauthn'
  // Organization
  | 'organization' | 'organization-title'
  // Address
  | 'street-address' | 'address-line1' | 'address-line2' | 'address-line3'
  | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4'
  | 'country' | 'country-name' | 'postal-code'
  // Contact
  | 'email' | 'tel' | 'tel-country-code' | 'tel-national' | 'tel-area-code' | 'tel-local' | 'tel-extension' | 'impp' | 'url'
  // Credit card
  | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name'
  | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-csc' | 'cc-type'
  // Transaction
  | 'transaction-currency' | 'transaction-amount'
  // Personal
  | 'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'photo'
  | (string & {})

export const validationStatusMap = {
  Error: 'error',
  Success: 'success',
} as const

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap]
