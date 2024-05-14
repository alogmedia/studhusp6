import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import EventView from '../views/EventView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: LandingView
    },
    {
      path: '/events',
      name: 'EventView',
      component: EventView
    }
  ]
})

export default router
