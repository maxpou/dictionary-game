import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/views/Hello'
import Admin from '@/views/Admin'
import Game from '@/views/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
