<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Nome da categoria:" label-for="categoria-nome">
        <b-form-input
          id="categoria-nome"
          v-model="categoria_model.nome"
          :placeholder="categoria_model.nome"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    categoriaToEdit: {
        nome: String,   
    },
    callback: Function
  },

  data() {
    return {
      categoria_model: {
        nome: "Nome da categoria: ",
      },
    };
  },
  mounted(){
      if(this.categoriaToEdit){
          this.categoria_model.nome = this.categoriaToEdit.nome;

      }
  },
  methods: {
    onSubmit() {
        this.callback({
            id: this.categoriaToEdit, 
            data: this.categoria_model});
    },
  },
};
</script>
<style>
</style>