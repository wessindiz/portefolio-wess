<template>
  <section class="contact" id="contact">

    <h1 class="heading"><span>Contactez</span>-moi</h1>

    <div class="row">

      <div class="content">

        <h3>Mes coordonnées</h3>

        <div class="infos-contact">
        

         <div class="icons">
            <i class="fas fa-mobile-alt"></i>
            <h4>Téléphone</h4>
            <p><a href="tel:+33663484450>"> 06.63.48.44.50 </a></p>
          </div>

          <div class="icons">
            <i class="fas fa-map-marker-alt"></i>
            <h4>Adresse</h4>
            <p>2, Avenue du Dr. LAMAZE <br> 93200 Saint-Denis</p>
          </div>
            
           

          <div class="icons">
            <i class="far fa-paper-plane"></i>
            <h4>Email</h4>
            <p><a href="mailto:wessrosemain@hotmail.fr">wessrosemain@hotmail.fr</a></p>
          </div>

          </div>

      

      <div class="contentCarte">
        <Map v-if="dark" :dark="dark "/>
        <Map v-else :dark="dark "/>
      </div>
</div>
    </div>

    <div class="credits">
      créé par <span>Wesley ROSEMAIN</span> | tous les droits sont réservés
    </div>
  </section>
</template>

<script>
import Map from '../components/Map.vue'

export default {
  components: {
    Map,
  },
  props: {
    dark: {
      type: Boolean,
    }
  }
}
</script>
