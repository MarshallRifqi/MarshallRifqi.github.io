import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailTeslaView from '../views/DetailTeslaView.vue'
import AboutView from '../views/AboutView.vue'
import NavbarView from '@/views/NavbarView.vue'
import DetailAiView from '@/views/DetailAiView.vue'
import DetailSeblakView from '@/views/DetailSeblakView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
     path: '/detail-tesla',
     name: 'detail-tesla',
     component: DetailTeslaView
    },
    {
     path: '/detail-seblak',
     name: 'detail-seblak',
     component: DetailSeblakView
    },
    {
     path: '/detail-ai',
     name: 'detail-ai',
     component: DetailAiView
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
