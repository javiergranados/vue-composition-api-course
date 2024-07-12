import { createRouter, createWebHistory } from 'vue-router'
import NoteDetailsView from '@views/NoteDetailsView.vue'
import NotesView from '@views/NotesView.vue'
import StatsView from '@views/StatsView.vue'

const routes = [
  { path: '/', redirect: '/notes' },
  { path: '/notes', name: 'notes', component: NotesView },
  { path: '/notes/:id', name: 'noteDetails', component: NoteDetailsView },
  { path: '/stats', name: 'stats', component: StatsView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
