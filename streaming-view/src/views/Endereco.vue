<template>
  <div class="meus-enderecos">
    <h1>Meus Endereços</h1>
    <b-button @click="createEnderecoModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar seus Endereços no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.enderecoCreated"
        dismissible
        fade
        variant="success"
      >Endereço salvo com sucesso!</b-alert>
      <b-alert
        :show="editModal.enderecoEdited"
        dismissible
        fade
        variant="warning"
      >Endereço editado com sucesso!</b-alert>
      <b-alert
        :show="editModal.enderecoError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Endereço</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="enderecos" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editEnderecoModal(linha.item)">Editar Endereço</b-button>
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
      <MeuEnderecoEditor
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></MeuEnderecoEditor>
    </b-modal>
  </div>
</template>

<script>
// import axios from "axios";
import MeuEnderecoEditor from "@/components/MeuEnderecoEditor";
export default {
  name: "MeuEndereco",
  components: {
    MeuEnderecoEditor
  },
  data() {
    return {
      enderecos: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite seu endereço",
        content: "",
        callback: "",
        enderecoCreated: false,
        enderecoEdited: false,
        enderecoError: false
      },
      errored: false,
      loading: true
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    createEnderecoModal() {
      this.editModal.title = "Crie um novo endereço";
      this.editModal.content = null;
      //Callback para enviar o endereço via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/endereco", data.endereco_model)
          .then(response => {
            console.log("Criado com sucesso!", response.data);
            this.editModal.enderecoCreated = true;
          })
          .catch(error => {
            console.log(error);
            this.editModal.enderecoError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    editEnderecoModal(endereco) {
      this.editModal.title = 'Edite o endereço"' + endereco.logradouro + endereco.numero + '"';
      this.editModal.content = endereco;
      //Callback para editar o endereço via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/endereco", data.endereco_model)
          .then(response => {
            console.log("Editado com sucesso!", response.data);
            this.editModal.enderecoEdited = true;
          })
          .catch(error => {
            console.log(error);
            this.editModal.enderecoError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    resetEditModal() {
      this.editModal.content = "";
      this.editModal.enderecoCreated = false;
      this.editModal.enderecoEdited = false;
      this.editModal.callback = null;
      this.editModal.enderecoError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/endereco")
      .then(response => {
        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MeusEndereços' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
.meus-enderecos h1 {
  display: inline;
}
.meus-enderecos button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>