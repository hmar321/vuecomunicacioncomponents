<template>
  <div>
    <h3>{{ numero }}</h3>
    <button @click="pasarNumero()">sumar {{ numero }}</button>
  </div>
</template>
<script>
export default {
  name: "HijoNumeroComponent",
  props: ["numero"],
  methods: {
    pasarNumero() {
      this.$emit("sumarNumero", this.numero);
    },
  },
};
</script>