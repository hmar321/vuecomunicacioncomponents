<template>
  <MenuComponent />
  <MenuTablaComponent />
  <router-view></router-view>
</template>

<script>
import MenuComponent from "./components/Menu.vue";
import MenuTablaComponent from "./components/MenuTabla.vue";

export default {
  name: "App",
  components: {
    MenuComponent,
    MenuTablaComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import 'primevue/resources/themes/lara-light-teal/theme.css';
</style>
