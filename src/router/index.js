import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import Game from '@/components/Game'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    }, {
      path: '/admin',
      component: Admin
    }, {
      path: '/game',
      component: Game
    }, {
      path: '/login',
      component: Login
    }
  ]
})
