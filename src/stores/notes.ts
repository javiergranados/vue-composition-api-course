import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Note } from '@/lib/definitions'

export const useNoteStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])

  function addNote(note: Note) {
    notes.value.unshift(note)
  }

  function deleteNote(idToDelete: string) {
    notes.value = notes.value.filter((note) => {
      return note.id !== idToDelete
    })
  }

  return { notes, addNote, deleteNote }
})
