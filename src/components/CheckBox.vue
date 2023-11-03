<template>
  <div>
    <h1>Ejemplo CheckBox</h1>
    <button @click="generarCheckBox()">Generar checkbox</button>
    <div v-for="(numero, index) in numeros" :key="numero">
      <input
        type="checkbox"
        v-model="numeros[index].checked"
        @change="check($event)"
      />
      <label>{{ numero.valor }}</label>
    </div>
    <h1 style="color: blue">La suma es {{ suma }}</h1>
  </div>
</template>

<script>
export default {
  name: "CheckBoxComponent",
  methods: {
    generarCheckBox() {
      var random = parseInt(Math.random() * 100 + 1);
      var check = {
        checked: false,
        valor: random,
      };
      this.numeros.push(check);
    },
    check(e) {
        console.log(e);
      this.suma = 0;
      for (const check of this.numeros) {
        if (check.checked === true) {
          this.suma += check.valor;
        }
      }
    },
  },
  data() {
    return {
      html: "",
      numeros: [],
      suma: 0,
    };
  },
};
</script>

<style>
</style>