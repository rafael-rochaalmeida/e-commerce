<template>
  <div id="nav_sacola">
    <button id="btn-mobile">
      <FontAwesome
        @click="toggleMenu"
        @touchstart="toggleMenu"
        class="icon_mobile"
        icon="fa-solid fa-bag-shopping"
        id="nav_sacola"
      />
    </button>
    <ul id="menu" class="menu">
     
      <li><a href=""> Minha conta</a></li>
      <li><a href=""> Pedidos </a></li>
      <li><a href=""> Carrinho </a></li>
      <li><a href=""> Lista de Desejos </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSacolaMobile.vue",

  components: {},

  methods: {
    toggleMenu: (event) => {
      if (event.type === "touchstart") event.parentDefault();

      const nav_sacola = document.getElementById("nav_sacola");
      nav_sacola.classList.toggle("active");

      const active = nav_sacola.classList.contains("active");

      event.currentTarget.setAttribute("aria-expanded", active);

      if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
      }
    },
  },
};
</script>

<style scoped>
.icon_mobile {
  height: 30px;
  cursor: pointer;
  color: #ffffff;
  display: none;
}

a {
  color: #ffffff;
  text-decoration: none;
  font-family: sans-serif;
}

a:hover {
  background: rgba(255, 255, 255, 0.1);
}

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile,
#nav_sacola {
  display: none;
}

@media screen and (max-width: 830px) {
  .icon_mobile {
    display: flex;
    height: 20px;
  }

  #nav_sacola {
    display: block;
  }

  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #333333;
    z-index: 1000;
    height: 0px;
    transition: 0.6s;
    visibility: hidden;
    overflow-y: hidden;
    /* box-shadow: 0px 0px 15px 5px rgba(0,0,5,0.8); */
    box-shadow: 0px 30px 100px 0px rgba(0, 0, 5, 0.8);
  }

  #nav_sacola.active #menu {
    height: calc(60vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }

  #menu a {
    padding: 1rem 0;
    margin: 0 3rem;
    border-bottom: 0.1px solid rgba(255, 255, 2555, 0.2);
  }

  #btn-mobile {
    display: flex;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
}
</style>
