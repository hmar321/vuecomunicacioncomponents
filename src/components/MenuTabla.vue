<template>
  <ul id="rutas">
    <li v-for="numero in numeros" :key="numero">
      <router-link :to="'/tabla/' + numero">Tabla {{ numero }} | </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuTablaComponent",
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      var random = parseInt(Math.random() * 30 + 1);
      this.numeros.push(random);
    }
  },
};
</script>

<style>
ul#rutas li {
  display: inline;
}
</style>