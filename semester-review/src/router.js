import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import math from './views/Math.vue'
import ela from './views/ELA.vue'
import ss from './views/SS.vue'
import science from './views/Science.vue'
import dev from './views/Dev.vue'

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
      path: '/dev',
      name: 'dev',
      component: dev
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
