<script setup lang="ts">
import { useNoteStore } from '@/stores/notes'

const noteStore = useNoteStore()
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ noteStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ noteStore.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
