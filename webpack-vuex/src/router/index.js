import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('@/pages/Women.vue')
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('@/pages/Men.vue')
    },
    {
      path: '/sale',
      name: 'sale',
      component: () => import('@/pages/Sale.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
