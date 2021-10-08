<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Título da série:" label-for="serie-titulo">
        <b-form-input
          id="serie-titulo"
          v-model="editSerieData.serie_model.titulo"
          :placeholder="editSerieData.serie_model.titulo"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Subtítulo da série:" label-for="serie-subtitulo">
        <b-form-input
          id="serie-subtitulo"
          v-model="editSerieData.serie_model.subtitulo"
          :placeholder="editSerieData.serie_model.subtitulo"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Episódios:" label-for="serie-episodios">
        <b-form-spinbutton
          id="serie-episodios"
          v-model="serie_model.episodios"
          :placeholder="serie_model.episodios"
          min="1"
          max="1000"
        ></b-form-spinbutton>
      </b-form-group>
      <b-form-group label="Sinopse:" label-for="serie-sinopse">
        <b-form-textarea
          id="serie-sinopse"
          v-model="editSerieData.serie_model.sinopse"
          :placeholder="editSerieData.serie_model.sinopse"
          rows="3"
          max-rows="7"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Classificação indicativa:" label-for="serie-classificacaoIndicativa">
        <b-form-input
          id="serie-classificacaoIndicativa"
          v-model="serie_model.classificacaoIndicativa"
          :placeholder="serie_model.classificacaoIndicativa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "EditSerie",
  props: {
    serie: {
      titulo: String,
      subtitulo: String,
      episodios: Number,
      sinopse: String,
      //categoriaId: Object,
      classificacaoIndicativa: String,
    },
    modalTarget: String,
    callback: Function,
  },
  data() {
    return {
      editserieData: {
        serie_model: {
          titulo: "Título da série",
          subtitulo: "Subtítulo",
          episodios: 1,
          sinopse: "Sinopse",
          //categoria: "" Ainda não envia!
          classificacaoIndicativa: "Classificação indicativa",
        },
      },
    };
  },
  mounted() {
    if(this.serie) {
      this.editSerieData.serie_model.titulo = this.serie.titulo;
      this.editSerieData.serie_model.subtitulo = this.serie.subtitulo;
      this.editSerieData.serie_model.episodios = this.serie.episodios;
      this.editSerieData.serie_model.sinopse = this.serie.sinopse;
      // this.serie_model.categoriaId = Object.assign({}, this.serie.categoriaId;
      this.editSerieData.serie_model.classificacaoIndicativa = this.serie.classificacaoIndicativa;
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.callback(evt, this.editSerieData);
      this.$emit("exit", true);
    },
  },
};
</script>

<style>
</style>