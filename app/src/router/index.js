import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/store/auth';
import { auth, redirectIfAuthenticated } from '@/router/guard';


const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Login.vue'),
    beforeEnter: redirectIfAuthenticated,

    children: [{
      path: '',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }],
  },

  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
