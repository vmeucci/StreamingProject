import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CatalogoSeries from '../views/CatalogoSeries.vue'
import CatalogoFilmes from '../views/CatalogoFilmes.vue'

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
    meta: {notRenderMenu: true},
  },
  {
    path: '/catalogo-series',
    name: 'CatalogoSeries',
    component: CatalogoSeries,
  },
  {
    path: '/catalogo-filmes',
    name: 'CatalogoFilmes',
    component: CatalogoFilmes,
  },
]

const router = new VueRouter({
  routes
})

export default router
