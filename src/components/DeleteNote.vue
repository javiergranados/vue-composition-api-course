<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { useNoteStore } from '@/stores/notes'

const props = defineProps({
  noteId: {
    type: String,
    required: true,
  },
})

const model = defineModel({
  type: Boolean,
  required: true,
})

const noteStore = useNoteStore()

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

function closeModal() {
  model.value = false
}

function handleKeyboard(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

function handleDelete() {
  noteStore.deleteNote(props.noteId)
  closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>

<template>
  <div
    v-if="model"
    class="modal is-active p-2"
  >
    <div class="modal-background" />
    <div
      ref="modalCardRef"
      class="modal-card"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">The note will be deleted.</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        />
      </header>
      <section class="modal-card-body">Do you want to continue?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          class="button mr-2"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="button is-danger has-text-white"
          @click.prevent="handleDelete"
        >
          Yes, delete
        </button>
      </footer>
    </div>
  </div>
</template>
