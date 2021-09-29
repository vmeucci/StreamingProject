<template>
  <div class="meus-filmes">
    <h1>Meus Filmes</h1>
    <b-button @click="createFilmeModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar seus filmes no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.filmeCreated"
        dismissible
        fade
        variant="success"
      >Filme salvo com sucesso!</b-alert>
      <b-alert
        :show="editModal.filmeEdited"
        dismissible
        fade
        variant="warning"
      >Film editado com sucesso!</b-alert>
      <b-alert
        :show="editModal.filmeError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Filme</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="filme" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editSerieModal(linha.item)">Editar Filme</b-button>
        </template>
      </b-table>

    </div>

    <!-- Edit modal -->
    <b-modal
      v-bind:id="editModal.id"
      size="xl"
      v-bind:title="editModal.title"
      v-on:hide="resetEditModal"
      ok-only
      ok-title="Cancelar"
    >
      <MeuFilmeEditor
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></MeuFilmeEditor>
    </b-modal>
  </div>
</template>


<script>

// import axios from "axios";
import MeuFilmeEditor from "@/components/MeuFilmeEditor";
export default {
  name: "CatalogoFilmes",
  components: {
    MeuFilmeEditor
  },
  data() {
    return {
      filmes: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite seu filme:",
        content: "",
        callback: "",
        filmeCreated: false,
        filmeEdited: false,
        filmeError: false
      },
      errored: false,
      loading: true
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    createFilmeModal() {
      this.editModal.title = "Crie um novo Filme";
      this.editModal.content = null;
      //Callback para enviar o filme via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/catalogo-filmes", data.filme_model)
          .then(response => {
            console.log("Criado com sucesso!", response.data);
            this.editModal.filmeCreated = true;
          
          })
          .catch(error => {
            console.log(error);
            this.editModal.filmeError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    editFilmeModal(filme) {
      this.editModal.title = 'Edite o filme "' + filme.titulo + '"';
      this.editModal.content = filme;
      //Callback para editar o filme via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/catalogo-filmes", data.filme_model)
          .then(response => {
            console.log("Editado com sucesso!", response.data);
            this.editModal.filmeEdited = true;
            
          })
          .catch(error => {
            console.log(error);
            this.editModal.filmeError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    resetEditModal() {
      this.editModal.content = "";
      this.editModal.filmeCreated = false;
      this.editModal.filmeEdited = false;
      this.editModal.callback = null;
      this.editModal.filmeError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/catalogo-filmes")
      .then(response => {
        response.data.forEach(item => {
          //Campos da categoria
          let catKeys = Object.keys(item.categoria);
          let categoriaConcat = "";
          //acumulador para retornar os campos da categoria concatenados
          categoriaConcat = catKeys.reduce((acc, key, index) => {
            let concatValue =
              index != 0 ? ", " + item.categoria[key] : item.categoria[key];
            return acc + concatValue;
          }, "");
          item.categoria = categoriaConcat;
          this.filmes.push(item);
        });
        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MeuFilme' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
.meus-eventos h1 {
  display: inline;
}
.meus-eventos button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>