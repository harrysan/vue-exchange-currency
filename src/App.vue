<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
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
  /* overflow: hidden; */
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;
}
</style>
