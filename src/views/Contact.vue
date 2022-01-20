<template>
  <section class="contact" id="contact">

    <h1 class="heading"><span>Contactez</span>-moi</h1>

    <div class="row">

      <div class="content">

            <div class="icons">
            <h3><i class="fas fa-phone-alt"></i>Téléphone</h3>
            <p><a href="tel:+33663484450>">+336XXXXXX50</a></p>
            </div>

            <div class="icons">
            <h3><i class="fas fa-envelope"></i>Email</h3>
            <p><a href="mailto:wessrosemain@hotmail.fr">wessrosemain@hotmail.fr</a></p>
            </div>

            <div class="icons">
            <h3><i class="fas fa-map-marker-alt"></i>Adresse</h3>
            <p>2, XXXXXXXX <br> 93200 Saint-Denis</p>
            </div>              



      </div>

      <div class="contentCarte">
        <Map v-if="dark" :dark="dark "/>
        <Map v-else :dark="dark "/>
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
