import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import { authGuard } from '@bcwdev/auth0-vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "main-page" */ '../views/MainPage.vue')
    },
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  routes
})

export default router
