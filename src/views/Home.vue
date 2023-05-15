<template>
    <section class="home" id="home">
        <div class="home_container">
            <div class="content">
                <h3>Wesley ROSEMAIN</h3>
                <p>Développeur web</p>
            
            
            <!-- <a href="#introduceMe">
                En découvrir plus
                <i class="fas fa-arrow-down"></i>
            </a> -->
        </div>
        <!-- <div id="introduceMe">  
            <div class="introduceMe_container">
                <div class="imgContainer">
                    <img src="../assets/mission.png">
                </div>
                <div class="presentation">
                    <h2>Parcours</h2>
                    De nature curieuse et enthousiaste ma détermination m'a toujours amené à acquérir de nouvelles compétences et à rencontrer de nouvelles personnes. <br>
                    

                </div>
            </div> -->
            <div class="share">
                <!-- <a href="" class="fab fa-facebook-f"></a> -->
                <a v-bind:href="instaLink" class="fab fa-instagram"></a>
                <a v-bind:href="mailLink" class="fas fa-envelope"></a>
                <a v-bind:href="linkdedinLink" class="fab fa-linkedin" target="blank"></a>
                <!-- <a href="https://www.youtube.com/channel/UClvMufg6jreNMO6917_EnMw" class="fab fa-youtube"></a> -->
            </div>
            </div>
        <!-- </div> -->
    </section>
</template>





<script>
export default {
  data(){
    return{
        instaLink: 'https://www.instagram.com/wessindiz/',
        mailLink: 'mailto:wessrosemain@hotmail.fr',
        linkdedinLink: 'https://www.linkedin.com/in/wesley-rosemain-b28838151/',
    }
  },
  
  methods:{ 
    changeTheme(){
      this.dark = !this.dark;
      console.log(this.dark);
      let themeToggler = document.querySelector('#theme-toggler');
      if(themeToggler.classList.contains('fa-moon')){
        document.body.classList.add('active');
      }else if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.remove('active');
      }
    },
    // slideToBottom(){
    //   console.log('lala');
    // }
  }
}
</script>