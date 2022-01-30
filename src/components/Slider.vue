<template>
<div class="slider">

    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/Projets/Projet1/moodboard.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/Projets/Projet1/24kdesktop.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../assets/Projets/Projet1/24krwd.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</div>
</template>

<style scoped>
.slider{
    width: 100%;
    height: 100%;
    margin-bottom: 2em;
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    padding: 2em;   
}

.container-slides{
    display: flex;
}

.img-slider{
    width: 100%;
    height: auto;
}

.btn-slide .fa-arrow-alt-circle-left, 
.btn-slide .fa-arrow-alt-circle-right{
    font-size: 1.75em;
    color: var(--black);
}

.btn-slide{
    width: 3em;
    height: 3em;
    display: block;
    position: absolute;
    z-index: 1000;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    opacity: .5;
}
.btn-slide:hover{
    opacity: 1;
}
.btn-slide:active{
    opacity: 1;
    box-shadow: var(--box-shadow-inset);
}

.btn-left{
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}

.btn-right{
    top: 50%;
    right: 5px;
    transform: translateY(-50%); 
}
@media(max-width:450px){
  .slider{
    width: 100%;
    height: 100%;
    margin-bottom: 2em;
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    padding: 2em;   
    }
}

</style>