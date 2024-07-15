<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import EditionNote from '@ui/EditionNote.vue'
import Note from '@ui/Note.vue'
import { useNoteStore } from '@/stores/notes'

const noteStore = useNoteStore()

const noteContent = ref('')
const editionNoteRef = ref<typeof EditionNote | null>(null)

const addNote = () => {
  noteStore.addNote({
    id: uuidv4(),
    content: noteContent.value,
  })

  noteContent.value = ''
  editionNoteRef.value?.focusTextarea()
}
</script>

<template>
  <EditionNote
    ref="editionNoteRef"
    v-model="noteContent"
    :max-length="150"
  >
    <template #buttons="{ maxLengthReached }">
      <button
        :disabled="!noteContent || maxLengthReached"
        class="button is-link has-background-success"
        @click.prevent="addNote"
      >
        Add
      </button>
    </template>
  </EditionNote>
  <Note
    v-for="n in noteStore.notes"
    :key="n.id"
    :note="n"
  />
</template>
