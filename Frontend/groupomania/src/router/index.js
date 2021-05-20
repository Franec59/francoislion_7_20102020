import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Forum from '../views/Forum.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta : {
      title : "Se connecter"
    }

  },
  
  {
    path: '/forum',
    name: 'Forum',
    //component: () => import('../views/Forum.vue'),
    component: Forum,
    meta : {
      title : "Forum"
    }
    
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta : {
      title : "S'inscrire"
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue'),
    meta : {
      title : "Mon compte"
    }
  },
  {
    path: '/publier',
    name: 'Publier',
    component: () => import('../views/Publier.vue'),
    meta : {
      title : "Publier"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to) => {
  document.title = to.meta.title
});

export default router
