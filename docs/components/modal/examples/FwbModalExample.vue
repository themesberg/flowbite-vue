<template>
  <div class="flex justify-start vp-raw">
    <fwb-button @click="showModal">
      {{ triggerText }}
    </fwb-button>
    <fwb-modal
      v-if="isShowModal"
      :not-escapable="notEscapable"
      :persistent="persistent"
      :size="size"
      :position="position"
      :focus-trap="focusTrap"
      @close="closeModal"
    >
      <template #header>
        <div class="flex items-center text-lg">
          Terms of Service
        </div>
      </template>
      <template #body>
        <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <fwb-button
            color="alternative"
            @click="closeModal"
          >
            Decline
          </fwb-button>
          <fwb-button
            color="green"
            @click="closeModal"
          >
            I accept
          </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { FwbButton, FwbModal } from '../../../../src/index'

import type { ModalPosition, ModalSize } from '../../../../src/components/FwbModal/types'

interface ModalProps {
  size?: ModalSize
  notEscapable?: boolean
  persistent?: boolean
  triggerText?: string
  position?: ModalPosition
  focusTrap?: boolean
}

withDefaults(defineProps<ModalProps>(), {
  size: '2xl',
  notEscapable: false,
  persistent: false,
  triggerText: 'Open Modal',
  position: 'center',
  focusTrap: false,
})

const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}

function showModal () {
  isShowModal.value = true
}
</script>
