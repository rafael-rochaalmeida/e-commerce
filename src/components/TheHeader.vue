<template>
  <nav>
    <router-link to="/">
      <img src="@/../public/assets/logo.png" alt="" />
    </router-link>

    <router-link to="/">
      <input placeholder="Buscar" type="text" />

      <FontAwesome class="icon" icon="fa-solid fa-magnifying-glass" />
    </router-link>

    <router-link to="/">
      <FontAwesome class="icon" icon="fa-solid fa-user" />
    </router-link>

    <router-link to="/">
      <FontAwesome class="icon" icon="fa-solid fa-cart-shopping" />
    </router-link>

    <router-link to="/"> <FontAwesome class="icon" icon="fa-solid fa-heart" /> </router-link>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
};
console.log("Teste")
</script>

<style scoped>
nav {
  height: 150px;
  width: 100%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 130px;
  border-radius: 100%;
  cursor: pointer;
}


.icon {
  height: 20px;
  cursor: pointer;
  color: gray;
  padding: 0 20px;
}

input {
  padding: 15px;
  border: solid black 3px;
  width: 400px;
  border-radius: 2px;
  font-size: 20px;
}

</style>
