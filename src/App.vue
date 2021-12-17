<template>
  <div id="nav">
      <header :class="{ 'active':menuOpen }" class="header">
        <div class="user">
          <img src="@/assets/wess.jpeg" alt="wess">
          <h3>Wesley ROSEMAIN</h3>
          <p>Développeur Web</p>
        </div>
        <nav class="navbar">
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="#Services">Services</a>
          <a href="#projects">Mes projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <!-- Menu Hamburger -->
      <div v-on:click="menuOpen = !menuOpen" :class="{ 'fa-times':menuOpen }" id="menu-btn" class="fas fa-bars"></div>

      <!-- Theme de l'app -->
      <div v-on:click="dark = !dark" :class="{ 'fa-sun':dark }"  id="theme-toggler" class="fas fa-moon"></div>

  </div>
  <router-view/>
</template>




<script>
export default {
  data(){
    return{
      menuOpen:false,
      dark: false,
    }
  },
} 
</script>

