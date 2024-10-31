import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuscribeteView from '../views/Suscribete.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/suscribete',
      name: 'suscribete',
      component: SuscribeteView,
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UserView,
    }
  ],
})

export default router
