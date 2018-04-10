import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../views/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
      children: [
        {
          path: '/login',
          // component: Login
          component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
        }
      ]
    }, {
      path: '/getting-started',
      component: () => import(/* webpackChunkName: "gettingstarted" */ '../views/GettingStarted.vue')
    }, {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
    }, {
      path: '/game',
      component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
    }
  ]
})
