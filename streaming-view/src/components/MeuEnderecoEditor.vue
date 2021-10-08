<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Logradouro do endereço:" label-for="endereco-logradouro">
        <b-form-input
          id="endereco-logradouro"
          v-model="endereco_model.logradouro"
          :placeholder="endereco_model.logradouro"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Número do endereço:" label-for="endereco-numero">
        <b-form-input
          id="endereco-numero"
          v-model="endereco_model.numero"
          :placeholder="endereco_model.numero"
        ></b-form-input>
      </b-form-group>

      
      <b-form-group label="Bairro:" label-for="endereco-bairro">
        <b-form-input
          id="endereco-bairro"
          v-model="endereco_model.bairro"
          :placeholder="endereco_model.bairro"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="CEP:" label-for="endereco-cep">
        <b-form-input
          id="endereco-cep"
          v-model="endereco_model.cep"
          :placeholder="endereco_model.cep"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    enderecoToEdit: {
        logradouro: String,
        numero: Number,
        bairro: String,
        cep: String   
    },
    callback: Function
  },

  data() {
    return {
      endereco_model: {
        logradouro: "Logradouro do endereço: ",
        numero: 20,
        bairro: "bairro",
        cep: "CEP",
      },
    };
  },
  mounted(){
      if(this.enderecoToEdit){
          this.endereco_model.logradouro = this.enderecoToEdit.logradouro;
          this.endereco_model.numero = this.enderecoToEdit.numero;
          this.endereco_model.bairro = this.enderecoToEdit.bairro;
          this.endereco_model.cep = this.enderecoToEdit.cep;

      }
  },
  methods: {
    onSubmit() {
        this.callback({
            id: this.enderecoToEdit, 
            data: this.endereco_model});
    },
  },
};
</script>
<style>
</style>