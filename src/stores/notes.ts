import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
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

  const totalNotesCount = computed(() => notes.value.length)

  const totalCharactersCount = computed(() =>
    notes.value.reduce((acc, note) => acc + note.content.length, 0)
  )

  function addNote(note: Note) {
    notes.value.unshift(note)
  }

  function deleteNote(idToDelete: string) {
    notes.value = notes.value.filter((note) => {
      return note.id !== idToDelete
    })
  }

  function findNote(id: string): Note | null {
    const note = notes.value.find((note) => note.id === id)
    return note || null
  }

  function editNote(id: string, content: string) {
    const note = findNote(id)
    if (note) {
      note.content = content
    }
  }

  return {
    notes,
    totalNotesCount,
    totalCharactersCount,
    addNote,
    deleteNote,
    findNote,
    editNote,
  }
})
