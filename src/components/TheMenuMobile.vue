<template>
  <div id="nav_mobile">
    <button
      @click="toggleMenu"
      @touchstart="toggleMenu"
      aria-label="Abrir Menu"
      id="btn-mobile"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
    >
      <span id="hamburguer"></span>
    </button>

    <ul id="menu" role="menu">
      <li>
        <input @click="buscar" placeholder="Buscar" type="text" />
        <FontAwesome
          class="icon icon_search"
          icon="fa-solid fa-magnifying-glass"
          alt="Pesquisar"
        />
      </li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Camisas</a></li>
      <li><a href="#">Bonés</a></li>
      <li><a href="#">Lupas (Em breve)</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheMenuMobile",

  components: {},

  methods: {
    toggleMenu: (event) => {
      if (event.type === "touchstart") event.parentDefault();

      const nav_mobile = document.getElementById("nav_mobile");
      nav_mobile.classList.toggle("active");

      const active = nav_mobile.classList.contains("active");

      event.currentTarget.setAttribute("aria-expanded", active);

      if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
      }
    },
    buscar: () => {},
  },
};
</script>

<style scoped>
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

 input {
  margin: 3rem;
  padding: 8px;
  border: solid black 1px;
  width: 80%;
  border-radius: 2px;
  font-size: 20px;
} 

#btn-mobile,
#nav_mobile {
  display: none;
}

.icon {
  height: 20px;
  cursor: pointer;
  color: #ffffff;
  margin: 0 0 0 50px;
}

.icon_search {
  margin-left: -90px;
  color: #333333;
}


@media (max-width: 830px) {
  #nav_mobile {
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
  }

  #nav_mobile.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }

  #menu a {
    padding: 1rem 0;
    margin: 0 3rem;
    width: 80%;
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

  #hamburguer {
    width: 20px;
    border-top: 2px solid;
    display: block;
    color: #ffffff;
  }

  #hamburguer::after,
  #hamburguer::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }

  #nav_mobile.active #hamburguer {
    border-top-color: transparent;
  }

  #nav_mobile.active #hamburguer::before {
    transform: rotate(135deg);
  }

  #nav_mobile.active #hamburguer::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
