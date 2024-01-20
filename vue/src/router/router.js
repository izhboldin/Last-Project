import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/components/Auth/AuthComponent.vue'),
      children: [
        {
          path: '/auth/register',
          name: 'register',
          component: () => import('@/components/Auth/RegisterComponent.vue')
        },
        {
          path: '/auth/login',
          name: 'login',
          component: () => import('@/components/Auth/LoginComponent.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
