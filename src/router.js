import Vue from 'vue'
import Router from 'vue-router'

import Homepage from './views/Homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
      children: [
        {
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        }
      ]
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    }, {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue')
    }, {
      path: '/game',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue')
    }
  ]
})
