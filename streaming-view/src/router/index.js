import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Catalogo from '../views/Catalogo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
  },
]

const router = new VueRouter({
  routes
})

export default router
