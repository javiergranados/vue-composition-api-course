import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostListView from '../views/PostListView.vue'
import ModalView from '../views/ModalView.vue'
import PostDetails from '../views/PostDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/post-list',
      name: 'posts',
      component: PostListView
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalView
    },
    {
      path: '/post-list/:id',
      name: 'post',
      component: PostDetails
    }
  ]
})

export default router
