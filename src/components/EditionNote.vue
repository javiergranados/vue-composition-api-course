<script setup lang="ts">
import { ref } from 'vue'

defineProps({
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
})

defineExpose({
  focusTextarea,
})

const noteRef = ref<HTMLInputElement | null>(null)

const model = defineModel({
  type: String,
  required: true,
})

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
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
