import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CatalogoFilmes from "../views/CatalogoFilmes.vue";
import CatalogoSeries from "../views/CatalogoSeries.vue";
import Categoria from "../views/Categoria.vue";
import Endereco from "../views/Endereco.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { notRenderMenu: true },
    children: [{ path: "login", meta: { notRenderMenu: true } }],
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalogo-series",
    name: "CatalogoSeries",
    component: CatalogoSeries,
  },
  {
    path: "/catalogo-filmes",
    name: "CatalogoFilmes",
    component: CatalogoFilmes,
  },
  {
    path: "/endereco",
    name: "Endereco",
    component: Endereco,
  },
  {
    path: "/categoria",
    name: "Categoria",
    component: Categoria,
  },
];

const router = new VueRouter({
  routes,
});

export default router;