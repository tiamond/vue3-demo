import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: () => import('../views/DirectiveView.vue')
    },
    {
      path: '/v-move',
      name: 'v-move',
      component: () => import('../views/VMoveView.vue')
    },
    {
      path: '/v-lazy',
      name: 'v-lazy',
      component: () => import('../views/VLazyView.vue')
    },
    {
      path: '/to-base64',
      name: 'to-base64',
      component: () => import('../views/ToBase64.vue')
    },
    {
      path: '/testScoped',
      name: 'testScoped',
      component: () => import('../views/testScoped.vue')
    }
  ]
})

export default router
