<template>
  <ul>
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
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul li{
    display: inline;
}
</style>