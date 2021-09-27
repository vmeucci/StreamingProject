<template>
  <div class="minhas-series">
    <h1>Catálogo de Séries</h1>
    <b-button @click="criarSerie()" variant="primary">
      <b-icon icon="plus-square"></b-icon>
    </b-button>
    
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:Cell(editar)="linhaSerie">
        <b-button @click="editarSerie(linhaSerie)">Editar</b-button>
      </template>
    </b-table>

    <b-modal v-bind:id="modalData.id">
      <MinhaSerieEditor></MinhaSerieEditor>
    </b-modal>
  </div>
</template>

<script>
import MinhaSerieEditor from "@/components/MinhaSerieEditor.vue";
export default {
  name: "CatalogoSeries",
  components: {
    MinhaSerieEditor
  },
  data(){
    return {
      items: [
        {
          titulo: "The walking dead", 
          subtitulo: "", 
          episodios: 100, 
          sinopse: "Série com temática pós-apocalíptica e zumbis", 
          classificacaoIndicativa: "16 anos"
        },
        {
          titulo: "The Mandalorian", 
          subtitulo: "Uma história Star Wars", 
          episodios: 20, 
          sinopse: "Acontecimentos baseados no fim no império galáctico", 
          classificacaoIndicativa: "14 anos"
        },
        {
          titulo: "Invencible", 
          subtitulo: "", 
          episodios: 10, 
          sinopse: "Animação de uma visão deturpada de heróis", 
          classificacaoIndicativa: "18 anos"
        },
      ],
      fields: ["titulo", "subtitulo", "episodios", "sinopse", "classificacaoIndicativa", "editar"],
      modalData: {
        id:"modal-minhaserie"
      }
    };
  },
  methods:{
    criarSerie(){
      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    editarSerie(linhaSerie){
      console.log(linhaSerie);
      this.$root.$emit("bv::show::modal", this.modalData.id);
    }
  }
};
</script>

<style>
.minhas-series h1 {
  display: inline;
}

.minhas-series button {
  margin-left: 4px;
  margin-bottom: 4px;
}
</style>