<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import Note from '@ui/Note.vue'

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.',
  },
  {
    id: 'id2',
    content: 'This is a shorter note! Woo!',
  },
])

const newNote = ref('')
const newNoteRef = ref<HTMLInputElement | null>(null)

const addNote = () => {
  let note = {
    id: uuidv4(),
    content: newNote.value,
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value?.focus()
}

const deleteNote = (idToDelete: string) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete
  })
}
</script>

<template>
  <div class="card has-background-success-on-scheme p-4">
    <div class="field">
      <div class="control">
        <textarea
          ref="newNoteRef"
          v-model="newNote"
          class="textarea"
          placeholder="Write a new note..."
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          :disabled="!newNote"
          class="button is-link has-background-success"
          @click.prevent="addNote"
        >
          Add
        </button>
      </div>
    </div>
  </div>
  <Note
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @delete-note="deleteNote"
  />
</template>
