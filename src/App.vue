<template>
  <div id="App">
      <TheHome />
  </div>
</template>

<script>
import TheHome from "@/views/TheHome.vue";

export default {
  name: "App",
  components: {
    TheHome,

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

a {
  text-decoration: nome;
}
</style>
