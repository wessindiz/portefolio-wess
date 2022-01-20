<template>

<div id="mapContainer"></div>  

</template>

<script>
import L from "leaflet";

export default {
  data() {
    return {
      center: [48.935932116730335, 2.3595527290396645],
    };
  },


   props: {
    dark: {
      type: Boolean,
    }
   },


  methods: {
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView(this.center, 12);

      
      if ( this.dark ) {
        L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // liens pour choisir des cartes "https://wiki.openstreetmap.org/wiki/Tiles#Servers" voire "https://leaflet-extras.github.io/leaflet-providers/preview/"
        {
          attribution:
            '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 14,
        }
      ).addTo(mapDiv);
      }
      
      else{
        L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', // liens pour choisir des cartes "https://wiki.openstreetmap.org/wiki/Tiles#Servers" voire "https://leaflet-extras.github.io/leaflet-providers/preview/"
        {
          attribution:
            '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 14,
        }
      ).addTo(mapDiv);
      }
      
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
  watch: {
    dark: function(){
      mapDiv.remove();
    }  
  }
};

</script>



<style>
#mapContainer {
    width : 400px;
    height: 410px;
    margin-left: auto;
    margin-right: auto;
    margin: 0.8em;
    border-radius: 1rem;
}
</style>
