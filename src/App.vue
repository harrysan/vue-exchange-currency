<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  font-family: "Mulish Variable", sans-serif;
}

body {
  margin: 0;
}
</style>
