<template>
  <div id="comics">
    <h2 style="color: Red">{{ comic.titulo }}</h2>
    <p>{{ comic.descripcion }}</p>
    <img :src="comic.imagen" />
    <h3
      :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000,
      }"
    >
      Año {{ comic.year }}
    </h3>
    <button @click="enviarFavorito()">Seleccionar</button><br>
    <button @click="seleccionarEliminado()">Eliminar</button>
  </div>
</template>
<script>
export default {
  name: "ComicComponent",
  props: ["comic","index"],
  methods: {
    enviarFavorito() {
      this.$emit("seleccionarFavorito", this.comic);
    },
    seleccionarEliminado(){
        this.$emit("eliminarComic", this.index);
    }
  },
};
</script>
<style>
@import "../assets/css/estilocomics.css";
</style>