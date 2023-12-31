import { createRouter, createWebHistory } from 'vue-router'
import { auth, redirectIfAuthenticated } from '@/router/guard';
import { useAuth } from '@/store/auth';


const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,

    children: [{
      path: '',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }],
  },
   {
    path: '/cadastrar',
    component: () => import('@/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,

    children: [{
      path: '',
      name: 'cadastrar',
      component: () => import('@/views/Register.vue')
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

router.beforeEach((to, from, next) => {
  const authStore = useAuth()
  authStore.sanctum();
  next()
})

export default router
