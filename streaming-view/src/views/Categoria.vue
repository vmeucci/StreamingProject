<template>
  <div class="minhas-categorias">
    <h1>Minhas Categorias</h1>
    <b-button @click="createCategoriaModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar suas Categorias no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.categoriaCreated"
        dismissible
        fade
        variant="success"
      >Categoria salva com sucesso!</b-alert>
      <b-alert
        :show="editModal.categoriaEdited"
        dismissible
        fade
        variant="warning"
      >Categoria editada com sucesso!</b-alert>
      <b-alert
        :show="editModal.categoriaError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Categoria</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="categorias" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editCategoriaModal(linha.item)">Editar Categoria</b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      v-bind:id="editModal.id"
      size="xl"
      v-bind:title="editModal.title"
      v-on:hide="resetEditModal"
      ok-only
      ok-title="Cancelar"
    >
      <MinhaCategoriaEditor
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></MinhaCategoriaEditor>
    </b-modal>
  </div>
</template>

<script>
// import axios from "axios";
import MinhaCategoriaEditor from "@/components/MinhaCategoriaEditor";
export default {
  name: "MinhaCategoria",
  components: {
    MinhaCategoriaEditor
  },
  data() {
    return {
      categorias: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite sua categoria",
        content: "",
        callback: "",
        categoriaCreated: false,
        categoriaEdited: false,
        categoriaError: false
      },
      errored: false,
      loading: true
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    createCategoriaModal() {
      this.editModal.title = "Crie uma nova categoria";
      this.editModal.content = null;
      //Callback para enviar a categoria via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/categoria", data.categoria_model)
          .then(response => {
            console.log("Criado com sucesso!", response.data);
            this.editModal.categoriaCreated = true;
          })
          .catch(error => {
            console.log(error);
            this.editModal.categoriaError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    editCategoriaModal(categoria) {
      this.editModal.title = 'Edite a Categoria "' + categoria.nome + '"';
      this.editModal.content = categoria;
      //Callback para editar a categoria via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/categorias", data.categoria_model)
          .then(response => {
            console.log("Editado com sucesso!", response.data);
            this.editModal.categoriaEdited = true;
          })
          .catch(error => {
            console.log(error);
            this.editModal.categoriaError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    resetEditModal() {
      this.editModal.content = "";
      this.editModal.categoriaCreated = false;
      this.editModal.categoriaEdited = false;
      this.editModal.callback = null;
      this.editModal.categoriaError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/categoria")
      .then(response => {
        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MinhasCategorias' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
.minhas-categorias h1 {
  display: inline;
}
.minhas-categorias button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>