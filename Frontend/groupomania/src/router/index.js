import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Forum',
    name: 'LoginForum',
    component: () => import('../views/Forum.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  },
  {
    path: '/publier',
    name: 'Publier',
    component: () => import('../views/Publier.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
