<template>
  <ul id="rutas">
    <li>
      <router-link to="/">Home | </router-link>
    </li>
    <li>
      <router-link to="/deportes">Deportes | </router-link>
    </li>
    <li>
      <router-link to="/numeros">Números | </router-link>
    </li>
    <li>
      <router-link to="/comics">Comics | </router-link>
    </li>
    <li>
      <router-link to="/multiple">Select multiple | </router-link>
    </li>
    <li>
      <router-link to="/checkbox">CheckBox | </router-link>
    </li>
    <li>
      <router-link to="/doble">Número doble | </router-link>
    </li>
    <li>
      <router-link to="/doble/22">Número doble 22 | </router-link>
    </li>
    <li>
      <router-link to="/doble/34">Número doble 34 | </router-link>
    </li>
    <li>
      <router-link to="/doble/64">Número doble 64 | </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#rutas li{
    display: inline;
}
</style>