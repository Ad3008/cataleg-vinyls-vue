import { createRouter, createWebHistory } from 'vue-router'
import IniciView from '../views/inici.vue'
import CatalegView from '../views/cataleg.vue'
import SobreView from '../views/sobreview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inici',
      component: IniciView
    },
    {
      path: '/cataleg',
      name: 'cataleg',
      component: CatalegView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    }
  ]
})

export default router