<template>
    <section class="portfolio" id="portfolio">
         <h1 class="heading"> Mon <span>portfolio</span></h1>
         

         <div class="box-container">

             <div class="box">
                 <img src="../assets/24Carat.png" alt="24K">
                 <div class="content">
                     <h3><router-link to="/Projet1">Projet 01</router-link></h3>
                 </div>
             </div>

             <div class="box">
                 <img src="../assets/Sugarbaby.png"  alt="">
                 <div class="content">
                     <h3><a href="/Projet2">Projet 02</a></h3>
                 </div>
             </div>

             <div class="box">
                 <img src="../assets/b&c.png" alt="">
                 <div class="content">
                     <h3><a href="/Projet3">Projet 03</a></h3>
                 </div>
             </div>
         </div>
    </section>
</template>