import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('/src/views/About.vue')
  },
  {
    path: '/StudentClubs',
    name: 'StudentClubs',
    component: () => import('/src/views/StudentClubs.vue')
  },
  {
    path: '/StudentActivities',
    name: 'StudentActivities',
    component: () => import('/src/views/StudentActivities.vue') 
  },
  {
    path: '/PsychologicalService',
    name: 'PsychologicalService',
    component: () => import('/src/views/PsychologicalService.vue') 
  },
  {
    path: '/CorruptionActivities',
    name: 'CorruptionActivities',
    component: () => import('/src/views/CorruptionActivities.vue') 
  },
  {
    path: '/Dormitory',
    name: 'Dormitory',
    component: () => import('/src/views/Dormitory.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    components: () => import('/src/views/Contacts.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('/src/views/Main.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
