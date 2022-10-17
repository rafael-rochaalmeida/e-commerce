<template>
  <nav>

    <FontAwesome class="icon_mobile" icon="fa-solid fa-bag-shopping" />
  
      <!-- <router-link to=""> -->
        <img src="@/../public/assets/logo.png" alt="" />
      <!-- </router-link> -->
    
    <!-- <router-link class="router_link_icon_search" to=""> -->
      <input placeholder="Buscar" type="text" />
      <FontAwesome class="icon icon_search" icon="fa-solid fa-magnifying-glass" alt="Pesquisar"/>
    <!-- </router-link> -->

    <div class="container_icons_menu">
      <!-- <router-link to=""> -->
        <FontAwesome class="icon" icon="fa-solid fa-user" />
      <!-- </router-link> -->

      <!-- <router-link to=""> -->
        <FontAwesome class="icon" icon="fa-solid fa-cart-shopping" />
      <!-- </router-link> -->

      <!-- <router-link to=""> -->
        <FontAwesome class="icon" icon="fa-solid fa-heart" />
      <!-- </router-link> -->
      
    </div>

    <FontAwesome class="icon_mobile" icon="fa-solid fa-bag-shopping" />
  </nav>


</template>

<script>
export default {
  name: "TheHeader",
};
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
  cursor: pointer;
  margin: 0 70px;
}

.icon {
  height: 20px;
  cursor: pointer;
  color: gray;
  margin: 0 0 0 50px;
}

.icon_mobile {
  height: 30px;
  cursor: pointer;
  color: gray;
}

input {
  padding: 8px;
  border: solid black 1px;
  width: 400px;
  border-radius: 2px;
  font-size: 20px;
}

.icon_search {
  margin-left: -40px;
}

.container_icons_menu {
  background: red;
  margin: 0 0 0 10%;
}

.icon_mobile{
  display: none;
}

@media screen and (max-width: 980px) {
  input {
    width: 300px;
  }
  .container_icons_menu {
    margin: 0 0 0 5%;
  }
}

@media screen and (max-width: 830px) {
  nav {
    justify-content: space-around;
  }

  input, .icon_search, .icon, .icon_search, .container_icons_menu, .router_link_icon_search {
    display: none;
  }

  .icon_mobile {
    display: flex;
    background: yellow;
  }

  img {
    margin: 0;
  }


}
</style>
