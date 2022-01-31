<template>
  <section class="projet1" id="projet1">
    <h1 class="heading"><span>Projet</span>03</h1>

    <div class="box-container">
      <h3>Beard&Coffee<img src="@/assets/Projets/Projet3/lame.png" class="filter-gold"></h3>
      <p>
        Beard&Coffee est avant toutes choses, un concept.<br>
        Il s'agit d'un barbershop qui rempli sa fonction principale de coiffeur,&nbsp;
        mais qui avec son coffee space, offre la possibilité aux clients de découvrir les meilleurs thés et cafés provenants
        de différents horizons (Honduras, Éthiopie, Indonésie, Jamaïque, Japon, etc... ).<br><br>
        Je développe actuellement ce site en Wordpress avec Elementor (pour la mise en page et la mise en forme), et
        WooCommerce (pour la création et la gestion des produits du shop).
      </p>

      <slider-3 />

      <div class="techno">

        <h3>Technologies utilisées</h3>

        <div class="techno-items">

          <div class="item">
            <img src="../assets/Projets/Projet3/wordpress.png" alt="logo Wordpress" />
            <h4>Wordpress</h4>
          </div>

          <div class="item">
            <img src="../assets/Projets/Projet3/elementor.png" alt="logo Elementor" />
            <h4>Elementor</h4>
          </div>

          <div class="item">
            <img src="../assets/Projets/Projet3/woo.png" alt="logo WooCommerce" />
            <h4>WooCommerce</h4>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>




<script>
import Slider3 from "../components/Slider3.vue";

export default {
  components: {
    Slider3,
  },
};
</script>


<style scoped>

.projet1{
    background: var(--bg-color) !important;
}

h3 {
  color: var(--gold);
  font-weight: normal;
  margin-top: 1rem;
  font-size: 1.75rem;
}

h3 img{
    font-size: 1.25rem;
}

.filter-gold{
    width: 1.75em;
    filter: invert(38%) sepia(73%) saturate(505%) hue-rotate(4deg) brightness(96%) contrast(90%);;
}

p {
  font-size: 1.25em;
  margin-bottom: 3em;
  color: var(--light-color);
  font-size: 1rem;
  color: var(--black);
  line-height: 1.8;
  text-align: justify;
}
.box-container{
  margin-bottom: 5em;
}
.techno{
    position: relative;
    top: 2rem;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    padding: 1rem;
}
.techno-items{
    display: flex;
    justify-content: space-around;
    margin: .5em;
}

.techno h3{
    margin-top: 1rem;
    font-size: 1.25rem;
    color: var(--light-color);
    text-align: center;
}

.techno .techno-items img{
    text-align: center;
    border-radius: 10%;
    box-shadow: var(--box-shadow);
    color: var(--black);
    margin-top: 1em;
    margin-bottom: 1em;
    height: 8rem;
    width: 8rem;
    padding: 1rem;
    font-size: 1rem;
    text-decoration: none;
}

.techno .techno-items h4{
    color: var(--light-color);
    font-size: 1rem;
}
.item{
    text-align: center;
}

@media(max-width:450px){
  .techno-items{
    display: flex;
    flex-direction: column;
    margin: 5em;
  }
}
</style>