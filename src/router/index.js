import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MembrosView from '../views/MembrosView.vue'
import UnidadesHyper from '../views/UnidadesView.vue'
import SejaHyper from '../views/SejaHyperView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/membros',
      name: 'membros',
      component: MembrosView
    },    
    {
      path: '/unidades',
      name: 'unidades',
      component: UnidadesHyper
    },
    {
      path:'/sejaHYPER',
      name: 'sejaHyper',
      component: SejaHyper
    }
  ]
})

export default router
