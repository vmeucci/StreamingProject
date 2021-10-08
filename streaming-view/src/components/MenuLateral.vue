<template>
  <div>
    <b-button v-b-toggle.menu>Abrir Opções</b-button>
    <b-sidebar id="menu" title="Menu" shadow>
      <div class="px-3 py-2">
        <b-nav vertical class>
          <b-nav-item
            v-for="item in itensMenu"
            :activate="item.name === 'Home'"
            :to="item.link"
            v-bind:key="item.name.toLowerCase() + '-nav-item'"
          >
            <b-icon v-bind:icon="item.icon"></b-icon>
            <span>{{ item.name }}</span>
          </b-nav-item>
          <a href="" @click="logout">Logout</a>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MenuLateral",
  data() {
    return {
      itensMenu: [
        { name: "Home", icon: "house-fill", link: "/" },
        {
          name: "Endereços",
          icon: "book-half",
          link: "/endereco",
        },
        { name: "Categorias", icon: "award-fill", link: "/categoria" },
        { name: "Login de usuário", icon: "award-fill", link: "/login" },
        {
          name: "Catálogo de Filmes",
          icon: "bookmarks",
          link: "/catalogo-filmes",
        },
        {
          name: "Catálogo de Séries",
          icon: "bookmarks",
          link: "/catalogo-series",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$http
        .get("/api/logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((errors) => console.error(errors));
    },
  },
};
</script>

<style></style>