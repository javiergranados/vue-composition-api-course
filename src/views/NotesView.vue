<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import Note from '@ui/Note.vue'
import { useNoteStore } from '@/stores/notes'

const noteStore = useNoteStore()

const note = ref('')
const noteRef = ref<HTMLInputElement | null>(null)

const addNote = () => {
  noteStore.addNote({
    id: uuidv4(),
    content: note.value,
  })

  note.value = ''
  noteRef.value?.focus()
}

const deleteNote = (idToDelete: string) => {
  noteStore.deleteNote(idToDelete)
}
</script>

<template>
  <div class="card has-background-success-on-scheme p-4">
    <div class="field">
      <div class="control">
        <textarea
          ref="noteRef"
          v-model="note"
          class="textarea"
          placeholder="Write a new note..."
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          :disabled="!note"
          class="button is-link has-background-success"
          @click.prevent="addNote"
        >
          Add
        </button>
      </div>
    </div>
  </div>
  <Note
    v-for="n in noteStore.notes"
    :key="n.id"
    :note="n"
    @delete-note="deleteNote"
  />
</template>
