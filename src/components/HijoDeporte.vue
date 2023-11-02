<template>
  <div>
    <h2 style="color: blue">{{deporte}}</h2>
    <button @click="metodoHijo()">Favorito</button>
  </div>
</template>

<script>
export default {
  name: "HijoDeporteComponent",
  props: ["deporte"],
  methods:{
    metodoHijo(){
        this.$emit("metodoPadre",this.deporte);
    }
  }
};
</script>
