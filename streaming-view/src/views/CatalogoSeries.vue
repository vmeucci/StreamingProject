<template>
  <div class="minhas-series">
    <h1>Minhas Séries</h1>
    <b-button @click="createSerieModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar suas séries no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.serieCreated"
        dismissible
        fade
        variant="success"
      >Série salva com sucesso!</b-alert>
      <b-alert
        :show="editModal.serieEdited"
        dismissible
        fade
        variant="warning"
      >Série editada com sucesso!</b-alert>
      <b-alert
        :show="editModal.serieError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Série</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="series" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editSerieModal(linha.item)">Editar série</b-button>
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
      <MinhaSerieEditor
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></MinhaSerieEditor>
    </b-modal>
  </div>
</template>


<script>

// import axios from "axios";
import MinhaSerieEditor from "@/components/MinhaSerieEditor.vue";
export default {
  name: "CatalogoSeries",
  components: {
    MinhaSerieEditor
  },
  data() {
    return {
      userData: {
        id: "",
        nome: "",
      },
      series: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite sua série",
        content: "",
        callback: "",
        serieCreated: false,
        serieEdited: false,
        serieError: false
      },
      errored: false,
      loading: true
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    createSerieModal() {
      this.editModal.title = "Crie uma nova Série";
      this.editModal.content = null;
      //Callback para enviar a série via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/catalogo-series", data.serie_model)
          .then(response => {
            console.log("Criada com sucesso!", response.data);
            this.editModal.serieCreated = true;
          
          })
          .catch(error => {
            console.log(error);
            this.editModal.serieError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    editSerieModal(serie) {
      this.editModal.title = 'Edite a série "' + serie.titulo + '"';
      this.editModal.content = serie;
      //Callback para editar a série via PUT
      this.editModal.callback = (serie, data) => {
        this.$http
          .put("/catalogo-series", data.serie_model)
          .then(response => {
            console.log("Editada com sucesso!", response.data);
            this.editModal.serieEdited = true;
            
          })
          .catch(error => {
            console.log(error);
            this.editModal.serieError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    resetEditModal() {
      this.editModal.content = "";
      this.editModal.serieCreated = false;
      this.editModal.serieEdited = false;
      this.editModal.callback = null;
      this.editModal.serieError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    },
    getUserData(){
      this.$$http.get("/api/user")
      .then(response => {
        this.userData = response.data;
      }).error(error => {
        console.log("Erro ou falta de permissão para acessar a página!");
        console.log(error);
        this.$router.push("/");
      });
    }
  },
  mounted() {

    this.getUserData();
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/catalogo-series")
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
          this.series.push(item);
        });
        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MinhaSerie' page: ", error);
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