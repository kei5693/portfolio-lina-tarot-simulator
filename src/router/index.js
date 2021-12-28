import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'
import Tarot from '../views/Tarot.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/tarot',
    name: 'Tarot',
    component: Tarot
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
]

const router = new VueRouter({
  routes
})

export default router
