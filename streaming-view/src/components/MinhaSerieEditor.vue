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

      <b-button type="submit" variant="primary">Editar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serie_model: {
        titulo: "The Mandalorian",
        subtitulo: "Uma história Star Wars",
        episodios: 20,
        sinopse: "Acontecimentos baseados no fim no império galáctico",
        classificacaoIndicativa: "14 anos",
      },
    };
  },

  methods: {
    onSubmit() {},
  },
};
</script>

<style>
</style>