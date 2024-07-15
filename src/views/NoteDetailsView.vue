<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EditionNote from '@/components/EditionNote.vue'
import { useNoteStore } from '@/stores/notes'

const route = useRoute()
const router = useRouter()
const noteStore = useNoteStore()

const noteId = route.params.id as string
const note = noteStore.findNote(noteId)

const noteContent = ref(note?.content || '')

function editNote() {
  noteStore.editNote(noteId as string, noteContent.value)
  router.push('/')
}

function cancel() {
  router.push('/')
}
</script>

<template>
  <EditionNote
    v-if="note"
    v-model="noteContent"
    label="Edit note"
    placeholder="Edit the note..."
  >
    <template #buttons>
      <button
        class="button is-link is-light mr-2"
        @click.prevent="cancel"
      >
        Cancel
      </button>

      <button
        :disabled="!noteContent"
        class="button is-link has-background-success"
        @click.prevent="editNote"
      >
        Save
      </button>
    </template>
  </EditionNote>

  <h1 v-else>Note not found</h1>
</template>
