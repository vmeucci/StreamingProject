<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título do filme:" label-for="filme-titulo">
        <b-form-input
          id="filme-titulo"
          v-model="filme_model.titulo"
          :placeholder="filme_model.titulo"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Subtítulo do filme:" label-for="filme-subtitulo">
        <b-form-input
          id="filme-subtitulo"
          v-model="filme_model.subttitulo"
          :placeholder="filme_model.subtitulo"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Duração em minutos:"
        label-for="filme-duracao"
      >
        <b-form-spinbutton
          id="filme-duracao"
          v-model="filme_model.duracao_min"
          :placeholder="filme_model.duracao_min"
          min="30"
          max="300"
        ></b-form-spinbutton>
      </b-form-group>

      <b-form-group label="Sinopse:" label-for="filme-sinopse">
        <b-form-textarea
          id="filme-sinopse"
          v-model="filme_model.sinopse"
          :placeholder="filme_model.sinopse"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        label="Classificação indicativa da filme:"
        label-for="filme-classificacaoIndicativa"
      >
        <b-form-input
          id="filme-classificacaoIndicativa"
          v-model="filme_model.classificacaoIndicativa"
          :placeholder="filme_model.classificacaoIndicativa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    filmeToEdit: {
        titulo: String,
        subtitulo: String,
        duracao_min: Number,
        sinopse: String,
        categoriaId: Number,
        classificacaoIndicativa: String
    },
    callback: Function
  },

  data() {
    return {
      filme_model: {
        titulo: "Título do filme",
        subtitulo: "Subtítulo do filme",
        duracao_min: 140,
        sinopse: "Sinopse do filme",
        classificacaoIndicativa: "Classificação indicativa"
      },
    };
  },
  mounted(){
      if(this.filmeToEdit){
          this.filme_model.titulo = this.filmeToEdit.titulo;
          this.filme_model.subtitulo = this.filmeToEdit.subtitulo;
          this.filme_model.duracao_min = this.filmeToEdit.duracao_min;
          this.filme_model.sinopse = this.filmeToEdit.sinopse;
          this.filme_model.classificacaoIndicativa = this.filmeToEdit.classificacaoIndicativa;

      }
  },
  methods: {
    onSubmit() {
        this.callback({
            id: this.filmeToEdit ? this.filmeToEdit.categoriaId : 0, 
            data: this.filme_model});
    },
  },
};
</script>

<style>
</style>