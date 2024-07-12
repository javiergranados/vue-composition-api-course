<script setup lang="ts">
import { computed } from 'vue'
import { Note } from '@/lib/definitions'

const props = defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  (e: 'deleteNote', id: string): void
}>()

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

const handleDelete = () => {
  emit('deleteNote', props.note.id)
}
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a
        href="#"
        class="card-footer-item"
        >Edit</a
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="handleDelete"
        >Delete</a
      >
    </footer>
  </div>
</template>
