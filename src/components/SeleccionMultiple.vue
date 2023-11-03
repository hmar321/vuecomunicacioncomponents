<template>
  <div>
    <h1>Selección multiple</h1>
    <div>
      <MultiSelect optionLabel="name" v-model="value" :options="options" placeholder="Deportes"/>
    </div>
  </div>
</template>
<script>
import MultiSelect from "primevue/multiselect";

import { ref } from "vue";

export default {
  name: "SeleccionMultipleComponent",
  components: {
    MultiSelect,
  },
  data() {
    return {
      options: ref([
        { name: "futbol", code: "futbol" },
        { name: "tenis", code: "tenis" },
        { name: "basket", code: "basket" },
        { name: "baseball", code: "baseball" },
      ]),
      value: ref(),
    };
  },
};
</script>