<template>
  <div class="minhas-series">
    <h1>Minhas Séries</h1>
    <b-button @click="createSerieModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar suas Séries no momento!</p>
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
import MinhaSerieEditor from "@/components/MinhaSerieEditor";
export default {
  name: "MinhaSerie",
  components: {
    MinhaSerieEditor
  },
  data() {
    return {
      series: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite sua serie",
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
            console.log("Criado com sucesso!", response.data);
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
      this.editModal.title = 'Edite a Série "' + serie.titulo + '"';
      this.editModal.content = serie;
      //Callback para editar a série via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/catalogo-series", data.serie_model)
          .then(response => {
            console.log("Editado com sucesso!", response.data);
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
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/catalogo-series")
      .then(response => {
        response.data.forEach(item => {
          let endKeys = Object.keys(item.categoria);
          let categoriaConcat = "";
          categoriaConcat = endKeys.reduce((acc, key, index) => {
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
        console.log("Error fetching in 'MinhasSéries' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
.minhas-series h1 {
  display: inline;
}
.minhas-series button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>