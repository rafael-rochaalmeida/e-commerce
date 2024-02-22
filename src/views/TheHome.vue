<template>
  <div class="body_home">
    <TheHeader />

    <div class="container_banner">
      <div class="banner"></div>
      <div class="container_frase">
        <h1>CAP STORE</h1>
        <h1>PESQUISAR SOBRE FLEX ROW E FLEX WRAP E ITENS FLEX QUE SE ADPTÃO AO TAMANHO DO ITEM PAI</h1>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "TheHome",

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.body_home {
  background: #fbfbfd;
}

.container_banner {
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
  background: green;
}

.banner {
  background: url("@/../public/assets/banners/banner-rio.jpg") no-repeat;
  height: 100%;
  width: 60%;   
  background-size: contain;
  background-color: red;
  flex-grow: 2;
}

.container_frase{
  background: blue;
  /* height: 100%; */
  width: 40%;
  flex-grow: 1;
}
</style>
