import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue')
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/RegisterComponent.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginComponent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
