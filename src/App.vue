<template>
  <div id="App">
    
    <TheHeader />
    <TheFooter />

    <TheHome />
  </div>
</template>

<script>
import TheHome from "@/components/TheHome.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHome,
    TheHeader,
    TheFooter,
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

a{
  text-decoration: nome;
}

</style>
