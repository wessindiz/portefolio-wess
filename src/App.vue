<template>
  <div id="nav">
      <header :class="{ 'active':menuOpen }" class="header">
        <div class="user">
          <img src="@/assets/wess.jpeg" alt="wess">
          <h3>Wesley ROSEMAIN</h3>
          <p>Développeur Web</p>
        </div>
        <nav class="menu">
          <router-link class="item" v-on:click="menuOpen = !menuOpen" to="/">Accueil</router-link>
          <router-link class="item" v-on:click="menuOpen = !menuOpen" to="/about">À propos</router-link>
          <router-link class="item" v-on:click="menuOpen = !menuOpen" to="/competences">Compétences</router-link>
          <router-link class="item" v-on:click="menuOpen = !menuOpen" to="/portfolio">Mes projets</router-link>
          <router-link class="item" v-on:click="menuOpen = !menuOpen" to="/contact">Contact</router-link>
        </nav>
      </header>

      <!-- Menu Hamburger -->
      <div v-on:click="menuOpen = !menuOpen" :class="{ 'fa-times':menuOpen }" id="menu-btn" class="fas fa-bars"></div>

      <!-- Theme de l'app -->
      <div v-on:click="changeTheme()" :class="{ 'fa-sun':dark, 'fa-moon':!dark }"  id="theme-toggler" class="fas"></div>

  </div>
  <router-view :dark="dark" />
</template>




<script>

export default {
  data(){
    return{
      menuOpen:false,
      dark: false,
    }
  },
  
  methods:{ 
    changeTheme(){
      this.dark = !this.dark;
      let themeToggler = document.querySelector('#theme-toggler');
      if(themeToggler.classList.contains('fa-moon')){
        document.body.classList.add('active');
      }else if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.remove('active');
      }
    }
  }
}
</script>

