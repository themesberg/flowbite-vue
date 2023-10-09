<template>
  <div>
    <form>
      <textarea
        v-model="message"
        custom
        rows="3"
        placeholder="Write you message..."
        label="Your message"
      >
        <template #footer>
          <div class="flex items-center justify-between">
            <Button type="submit">Post comment</Button>
            <div class="flex">
              <Button color="" class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" square><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" /></svg></Button>
              <Button color="" class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" square><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></Button>
              <Button color="" class="rounded-lg hover:bg-gray-200 hover:dark:bg-gray-600" square><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg></Button>
            </div>
          </div>
        </template>
      </textarea>
    </form>
    <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
      Remember, contributions to this topic should follow our <a
        href="/"
        class="text-primary-600 dark:text-primary-500 hover:underline"
      >Community Guidelines</a>.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from '../../../../src/components/Textarea/Textarea.vue'
import Button from '../../../../src/components/Button/Button.vue'

const message = ref('')
</script>
