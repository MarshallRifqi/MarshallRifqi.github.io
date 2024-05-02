import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AboutView from '../views/AboutView.vue'
import NavbarView from '@/views/NavbarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/detail',
     name: 'detail',
     component: DetailView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: NavbarView
    }
  ]
})

export default router
