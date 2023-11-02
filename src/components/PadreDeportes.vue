<template>
  <div>
    <h1 style="color: red">Padre deportes</h1>
    <h2 style="background-color:yellow" v-if="favorito">Su deporte favorito es {{favorito}}</h2>
    <ul>
        <li v-for="deporte in deportes" :key="deporte">
            <HijoDeporteComponent :deporte="deporte" v-on:metodoPadre="metodoPadre"/>
        </li>
    </ul>
  </div>
</template>
<script>
import HijoDeporteComponent from "./HijoDeporte.vue";
export default {
  name: "PadreDeportesComponent",
  components: {
    HijoDeporteComponent,
  },
  data() {
    return {
      deportes: ["fútbol", "basket", "tenis", "baseball"],
      favorito:"",
    };
  },
  methods:{
    metodoPadre(paramFavorito){
        this.favorito=paramFavorito;
    }
  }
};
</script>