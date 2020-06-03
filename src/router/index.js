import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/public/Home.vue'
import Login from '../views/public/Login.vue'
import Register from '../views/public/Register.vue'

import CreateCourse from '../views/admins/CreateCourse.vue'
import EditCourse from '../views/admins/EditCourse.vue'
import LecturePanel from '../views/admins/LecturePanel.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/create-course',
    name: 'CreateCourse',
    component: CreateCourse
  },
  {
    path: '/edit-course/:title',
    name: 'EditCourse',
    component: EditCourse
  },
  {
    path: '/lecture-panel/:courseTitle',
    name: 'LecturePanel',
    component: LecturePanel
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/public/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
