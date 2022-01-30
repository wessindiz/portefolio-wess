import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/competences',
    name: 'Competences',
    component: () => import(/* webpackChunkName: "about" */ '../views/Competences.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/Projet1',
    name: 'Projet1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projet1.vue')
  },
  {
    path: '/Projet2',
    name: 'Projet2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projet2.vue')
  },
  {
    path: '/Projet3',
    name: 'Projet3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projet3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
