import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import math from './views/Math.vue'
import ela from './views/ELA.vue'
import ss from './views/SS.vue'
import science from './views/Science.vue'
import rocketUp from './views/rocketUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/math',
      name: 'math',
      component: math
    },
    {
      path: '/ela',
      name: 'ela',
      component: ela
    },
    {
      path: '/ss',
      name: 'ss',
      component: ss
    },
    {
      path: '/science',
      name: 'science',
      component: science
    },
    {
      path: '/rocketUp',
      name: 'rocketup',
      component: rocketUp
    }
  ]
})
