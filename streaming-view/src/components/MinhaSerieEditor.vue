<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título da série:" label-for="serie-titulo">
        <b-form-input
          id="serie-titulo"
          v-model="serie_model.titulo"
          :placeholder="serie_model.titulo"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Subtítulo da série:" label-for="serie-subtitulo">
        <b-form-input
          id="serie-subtitulo"
          v-model="serie_model.subttitulo"
          :placeholder="serie_model.subtitulo"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Quantidades de episódios da série:"
        label-for="serie-episodios"
      >
        <b-form-spinbutton
          id="serie-episodios"
          v-model="serie_model.episodios"
          :placeholder="serie_model.episodios"
          min="1"
          max="100"
        ></b-form-spinbutton>
      </b-form-group>

      <b-form-group label="Sinopse:" label-for="serie-sinopse">
        <b-form-textarea
          id="serie-sinopse"
          v-model="serie_model.sinopse"
          :placeholder="serie_model.sinopse"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        label="Classificação indicativa da série:"
        label-for="serie-classificacaoIndicativa"
      >
        <b-form-input
          id="serie-classificacaoIndicativa"
          v-model="serie_model.classificacaoIndicativa"
          :placeholder="serie_model.classificacaoIndicativa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    serieToEdit: {
        titulo: String,
        subtitulo: String,
        episodios: Number,
        sinopse: String,
        categoriaId: Number,
        classificacaoIndicativa: String
    },
    callback: Function
  },

  data() {
    return {
      serie_model: {
        titulo: "Título da série",
        subtitulo: "Subtítulo da série",
        episodios: 10,
        sinopse: "Sinopse da série",
        classificacaoIndicativa: "Classificação indicativa da série"
      },
    };
  },
  mounted(){
      if(this.serieToEdit){
          this.serie_model.titulo = this.serieToEdit.titulo;
          this.serie_model.subtitulo = this.serieToEdit.subtitulo;
          this.serie_model.episodios = this.serieToEdit.episodios;
          this.serie_model.sinopse = this.serieToEdit.sinopse;
          this.serie_model.classificacaoIndicativa = this.serieToEdit.classificacaoIndicativa;

      }
  },
  methods: {
    onSubmit() {
        this.callback({
            id: this.serieToEdit ? this.serieToEdit.categoriaId : 0, 
            data: this.serie_model});
    },
  },
};
</script>

<style>
</style>