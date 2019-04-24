<template>
    <v-toolbar>
    <v-toolbar-title>
      <router-link to="/" id="homeLink">Imóveis</router-link>
      </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
#homeLink {
  color: black;
  text-decoration: none;
}
</style>

