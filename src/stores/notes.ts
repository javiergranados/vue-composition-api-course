import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Note } from '@/lib/definitions'

export const useNoteStore = defineStore('notes', () => {
  const notes = ref<Note[]>([
    {
      id: 'id1',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime.',
    },
    {
      id: 'id2',
      content: 'This is a shorter note! Woo!',
    },
  ])

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
