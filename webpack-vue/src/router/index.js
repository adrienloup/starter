import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/components/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/components/Page2.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
