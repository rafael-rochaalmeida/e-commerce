<template>
  <header>
    <nav>

      <TheMenuMobile />

      <!-- <router-link to=""> -->
      <img src="@/../public/assets/logo.png" alt="" />
      <!-- </router-link> -->

      <!-- <router-link class="router_link_icon_search" to=""> -->
      <input placeholder="Buscar" type="text" />
      <FontAwesome
        class="icon icon_search"
        icon="fa-solid fa-magnifying-glass"
        alt="Pesquisar"
      />
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

      <TheSacolaMobile />

    </nav>
  </header>
</template>

<script>
import TheMenuMobile from "@/components/TheMenuMobile.vue";
import TheSacolaMobile from "@/components/TheSacolaMobile.vue";

export default {
  name: "TheHeader",

  components: {
    TheMenuMobile,
    TheSacolaMobile,
  },
};
</script>

<style scoped>
nav {
  height: 100px;
  width: 100%;
  background: #333333;  
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px 5px rgba(0,0,5,0.8);
}

img {
  height: 100px;
  cursor: pointer;
  margin: 0 70px;
}

.icon {
  height: 20px;
  cursor: pointer;
  color: #FFFFFF;
  margin: 0 0 0 50px;
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
  color: #333333;
}

.container_icons_menu {
  margin: 0 0 0 10%;
}


/*INICIO MENU MOBILE */

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
    justify-content: space-between;
    padding: 0 3rem;;
  }

  input,
  .icon_search,
  .icon,
  .icon_search,
  .container_icons_menu,
  .router_link_icon_search {
    display: none;
  }


  img {
    margin: 0;
    height: 80px;
  }

  nav {
    height: 80px;
    background: #333333;
  }
}

/*FIM MENU MOBILE */
</style>
