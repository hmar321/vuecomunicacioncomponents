<template>
  <div>
    <h1>Numero Doble</h1>
    <h2 style="color: red" v-if="mensaje">{{ mensaje }}</h2>
    <div v-else>
      <h2 style="color: blue">El número es {{ numero }}</h2>
      <h2 style="color: green">El doble del número es {{ doble }}</h2>
    </div>
    <button @click="redirectToHome()">casa</button>
  </div>
</template>

<script>
export default {
  name: "NumeroDobleComponent",
  data() {
    return {
      mensaje: null,
      numero: 0,
      doble: 0,
    };
  },
  methods: {
    leerParametro() {
      //DIBUJAMOS NUESTRO PARAMETRO
      var params = this.$route.params;
      var paramNumero = params.numero;
      if (paramNumero == "") {
        this.mensaje = "No tenemos parámetros...";
      } else {
        this.numero = parseInt(params.numero);
        this.doble = this.numero * 2;
      }
    },
    redirectToHome(){
        this.$router.push("/");
    }
  },
  mounted() {
    this.leerParametro();
  },
  watch:{
    '$route.params.numero'(nextVal,oldVal){
        if (nextVal!=oldVal) {
            this.leerParametro();
        }
    }
  }
};
</script>

<style>
</style>