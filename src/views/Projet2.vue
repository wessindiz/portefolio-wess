<template>
  <section class="projet1" id="projet1">
    <h1 class="heading"><span>Projet</span>02</h1>

    <div class="box-container">
      <h3><span>Sugar Baby</span><i class="fas fa-candy-cane"></i></h3>
      <p>
        Après avoir réalisé ce portfolio en Neumorphism, je voulais relever 
        un nouveau défi en m'attaquant au Glassmorphism.<br/> 
        Le Glassmorphism est un nouveau style d’UI Design. 
        Cette nouvelle tendance se différencie du Neumorphism grâce à plusieurs aspects : 
        la transparence (effet de verre),&nbsp;
        l' utilisation de plusieurs couleurs avec des objets flottants,&nbsp;
        des contours fins et nets et des couleurs vives.<br/> <br/> 
        J'ai donc réalisé la maquette d'une interface de sucreries sur Figma.
      </p>

      <slider-2 />

      <div class="techno">

        <h3>Technologies utilisées</h3>

        <div class="techno-items">

          <div class="item">
            <img src="@/assets/Projets/Projet2/figma.png" alt="logo Figma" />
            <h4>Figma</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<script>
import Slider2 from "../components/Slider2.vue";

export default {
  components: {
    Slider2,
  },
};
</script>


<style scoped>
h3 {
  color:var(--candy);
  font-weight: normal;
  margin-top: 1rem;
  font-size: 1.75rem;
}

h3 span{
  color: var(--sugar);
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
    padding: .5rem;
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
    height: 7rem;
    width: 7rem;
    line-height: 7rem;
    padding: 1em;
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

  p {
    font-size: 1.2em;
  }
}
</style>