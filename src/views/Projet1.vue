<template>
  <section class="projet1" id="projet1">
    <h1 class="heading"><span>Projet</span>01</h1>

    <div class="box-container">
      <h3><span>24 Carats Musique</span> <i class="far fa-gem"></i></h3>
      <p>
        Étant passionné de musique, il me tenait à coeur de réaliser mon projet
        sur ce thème.<br/> 24 Carats Music est le nom de mon label de musique,
        et également du studio mis à disposition de tous.<br/>Mon application vise à informer, présenter et faire découvrir le label 24 Carats Music Record au 
        grand public. Les utilisateurs qui le souhaitent pourront bénéficier des différents studios, et 
        pourront réserver leurs sessions via le site.<br><br>
        Pour ce projet, j'ai réalisé une charte graphique, un cahier des charges, des diagrammes UML, le front-end et le back-end.

      </p>

      <slider-1 />

      <div class="techno">

        <h3>Technologies utilisées</h3>

        <div class="techno-items">

          <div class="item">
            <img src="@/assets/Projets/Projet1/symfony.png" alt="logo Symfony" />
            <h4>Symfony</h4>
          </div>

          <div class="item">
            <img src="@/assets/Projets/Projet1/twig.png" alt="logo Twig" />
            <h4>Twig</h4>
          </div>

          <div class="item">
            <img src="@/assets/Projets/Projet1/bootstrap.png" alt=" logo Bootstrap" />
            <h4>Bootstrap</h4>
          </div>

          <div class="item">
            <img src="@/assets/Projets/Projet1/phpmyadmin.png" alt="logo phpMyAdmin" />
            <h4>PhpMyAdmin</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<script>
import Slider1 from "../components/Slider1.vue";

export default {
  components: {
    Slider1,
  },
};
</script>


<style scoped>

h3 {
  color:var(--diamant);
  font-weight: normal;
  margin-top: 1rem;
  font-size: 1.75rem;
}
h3 span{
  color:var(--blue);
  font-weight: normal;
  margin-top: 1rem;
  font-size: 1.75rem;
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
    padding:1rem;
    font-size: 1rem;
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