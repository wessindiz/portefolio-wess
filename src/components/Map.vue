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
          maxZoom: 18,
        }
      ).addTo(mapDiv);
      }
      
      else{
        L.tileLayer(
        'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', // liens pour choisir des cartes "https://wiki.openstreetmap.org/wiki/Tiles#Servers" voire "https://leaflet-extras.github.io/leaflet-providers/preview/"
        {
          attribution:
            '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }
      ).addTo(mapDiv);
      }
      
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};

</script>



<style>
#mapContainer {
    width : 100%;
    height: 530px;
    margin-left: auto;
    margin-right: auto;
    margin: auto; 
    border-radius: 1rem;
}

@media(max-width:1024px){
  #mapContainer {
    width : 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin: auto; 
    border-radius: 1rem;
  }
}


@media(max-width:450px){
  #mapContainer {
    width : 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    /* margin: 0.8em;  */
    border-radius: 1rem;
  }
}
</style>
