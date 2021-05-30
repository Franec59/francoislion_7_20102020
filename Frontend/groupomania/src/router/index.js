import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Forum from '../views/Forum.vue'
import Publier from '../views/Publier.vue'
import Profil from '../views/Profil.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta : {
      title : "Se connecter"
    }, 
    beforeEnter: (to, from, next) => {
      const token = JSON.parse(localStorage.getItem('user-token'));
      if(token){
        next({name: 'Forum'})
      } else {
        next();
      }
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
    },
    beforeEnter: (to, from, next) => {
      const token = JSON.parse(localStorage.getItem('user-token'));
      if(token){
        next({name: 'Forum'})
      } else {
        next();
      }
    }
  },
  
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta : {
      title : "Mon compte"
    }
  },
  {
    path: '/publier',
    name: 'Publier',
    component : Publier,
    meta : {
      title : "Publier"
    }
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
