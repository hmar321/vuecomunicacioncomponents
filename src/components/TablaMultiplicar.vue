<template>
  <div>
    <h1>Tabla multiplicar</h1>
    <table border="1">
      <thead>
        <tr>
          <th>operacion</th>
          <th>resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="numero in 10" :key="numero">
          <td>{{ base }}x{{ numero }}</td>
          <td>{{ base * numero }}</td>
        </tr>
      </tbody>
    </table>
    <DataTable :value="tabla" tableStyle="width: 30rem">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicarComponent",
  data() {
    return {
      base: 0,
      columns: [
        { field: "operacion", header: "Operacion" },
        { field: "resultado", header: "Resultado" },
      ],
      tabla: [],
    };
  },
  mounted() {
    this.asignarNumero();
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.asignarNumero();
      }
    },
  },
  methods: {
    asignarNumero() {
      var params = this.$route.params;
      this.base = params.numero;
      this.tabla=[];
      for (let i = 1; i <= 10; i++) {
        var fila = { operacion: this.base + "x" + i, resultado: this.base * i };
        this.tabla.push(fila);
      }
    },
  },
};
</script>

<style>
</style>