<template>
  <div>
    <h1>Padre números</h1>
    <h2 style="background-color: yellow">La suma es: {{ suma }}</h2>
    <button @click="nuevoNumero()">Nuevo número</button>
    <HijoNumeroComponent
      v-for="numero in numeros"
      :key="numero"
      :numero="numero"
      v-on:sumarNumero="sumarNumero"
    />
  </div>
</template>
<script>
import HijoNumeroComponent from "./HijoNumero.vue";
export default {
  name: "PadreNumeros",
  components: {
    HijoNumeroComponent,
  },
  data() {
    return {
      suma: 0,
      numeros: [],
      array: [],
    };
  },
  methods: {
    sumarNumero(numero) {
      this.suma += numero;
    },
    fibonacci() {
      var anterior = 0;
      var numero = 1;
      var aux = 0;
      while (numero < 200) {
        anterior = aux;
        aux = numero;
        numero += anterior;
        this.array.push(numero);
      }
    },
    nuevoNumero() {
      this.numeros.push(parseInt(Math.random() * 200 + 1));
    },
  },

  mounted() {
    for (let i = 0; i < 2; i++) {
      this.numeros.push(parseInt(Math.random() * 200 + 1));
    }
  },
};
</script>
