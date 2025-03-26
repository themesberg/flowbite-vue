<template>
    <div class="vp-raw">
      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">Error Messages Examples</h3>
      
      <!-- Direct error message prop -->
      <div class="mb-4">
        <fwb-input
          v-model="username"
          label="Username"
          placeholder="Enter your username"
          validation-status="error"
          error-message="This username is already taken"
        />
      </div>
      
      <!-- Direct success message prop -->
      <div class="mb-4">
        <fwb-input
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          validation-status="success"
          success-message="Email format is valid"
        />
      </div>
      
      <!-- Form validation example -->
      <div class="mb-4">
        <fwb-input
          v-model="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          :validation-status="passwordValidation.status"
          :error-message="passwordValidation.message"
        />
      </div>
      
      <!-- Toggle hideDetails demo -->
      <div class="mb-4 flex items-center">
        <fwb-checkbox
          v-model="hideDetails"
          label="Hide error details"
        />
      </div>
      
      <!-- Example with hideDetails -->
      <div class="mb-4">
        <fwb-input
          v-model="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          validation-status="error"
          error-message="Please enter a valid phone number"
          :hide-details="hideDetails"
        />
      </div>
      
      <!-- Comparison: prop vs slot approach -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">Using error-message prop</h4>
          <fwb-input
            v-model="address"
            label="Address"
            placeholder="Enter your address"
            validation-status="error"
            error-message="Please enter your full address"
          />
        </div>
        
        <div>
          <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">Using validation slot</h4>
          <fwb-input
            v-model="address"
            label="Address"
            placeholder="Enter your address"
            validation-status="error"
          >
            <template #validationMessage>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                Please enter your full address
              </div>
            </template>
          </fwb-input>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from 'vue'
  
  import { FwbCheckbox, FwbInput } from '../../../../src/index'
  import { validationStatusMap } from '../../../../src/components/FwbInput/types'
  
  // Form values
  const username = ref('')
  const email = ref('')
  const password = ref('')
  const phone = ref('')
  const address = ref('')
  
  // UI state
  const hideDetails = ref(false)
  
  // Form validation
  const passwordValidation = computed(() => {
    if (!password.value) {
      return {
        status: validationStatusMap.Error,
        message: 'Password is required'
      }
    }
    
    if (password.value.length < 8) {
      return {
        status: validationStatusMap.Error,
        message: 'Password must be at least 8 characters'
      }
    }
    
    return {
      status: validationStatusMap.Success,
      message: 'Password meets requirements'
    }
  })
  </script>