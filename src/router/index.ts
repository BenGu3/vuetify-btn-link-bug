// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/Empty.vue'),
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('@/Empty.vue'),
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('@/Empty.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
