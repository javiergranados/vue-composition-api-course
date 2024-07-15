<script setup lang="ts">
import { ref } from 'vue'
import { useWatchCharacters } from '@/directives/useWatchCharacters'

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Write a new note...',
  },
  maxLength: {
    type: Number,
    required: false,
    default: 100,
  },
})

defineExpose({
  focusTextarea,
})

const noteRef = ref<HTMLInputElement | null>(null)

const model = defineModel({
  type: String,
  required: true,
})

const maxLengthReached = useWatchCharacters(model, props.maxLength)

function focusTextarea() {
  noteRef.value?.focus()
}
</script>

<template>
  <div class="card has-background-success-on-scheme p-4 mb-5">
    <label
      v-if="label"
      class="label has-text-white"
    >
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          ref="noteRef"
          v-model="model"
          class="textarea"
          :placeholder="placeholder"
        />
      </div>
    </div>
    <label
      v-if="maxLengthReached"
      class="label has-text-danger"
    >
      Only {{ maxLength }} characters are allowed
    </label>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot
          name="buttons"
          :max-length-reached="maxLengthReached"
        />
      </div>
    </div>
  </div>
</template>
