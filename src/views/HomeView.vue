<script setup>

</script>

<template>
    <main>
        <!-- Hero -->
        <div class="hero"></div>

        <!-- Container -->
        <div id="location" class="container">

        <!-- Localização -->
            <section id="Direction" class="direction">
                <div class="direction__info">
                    <h2 class="direction__info__title">Localização da academia</h2>
                    <p class="direction__info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis modi maiores neque atque nam cupiditate suscipit, harum dolores impedit sed, vero ducimus quo animi, saepe quaerat beatae ipsa quod?</p>
                </div>
                <div class="direction__image">
                    <img class="direction__image__item" src="http://via.placeholder.com/300x300" alt="">
                </div>
            </section>

        <!-- Experiencias do Espaço -->
            <section id="Experience" class="experience">
                <h2 class="experience__title">Experiencia <span class="experience__brand">HYPER</span></h2>
                <p class="experience__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui quidem totam quia tenetur at illum accusamus harum impedit nobis quam ipsam ullam blanditiis magnam, deserunt commodi rerum explicabo id!</p>

                <ul class="experience__list">
                    <li class="experience__list__item">
                        <img class="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                        <h3 class="experience__list__item__title">Privacidade</h3>
                        <img src="../../public/images/sgv/experience__item__privacity.svg" alt="">
                    </li>
                    <li class="experience__list__item">
                        <img class="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                        <h3 class="experience__list__item__title">Qualidade</h3>
                        <img src="../../public/images/sgv/experience__item__quality.svg" alt="">
                    </li>
                    <li class="experience__list__item">
                        <img class="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                        <h3 class="experience__list__item__title">Exclusividade</h3>
                        <img src="../../public/images/sgv/experience__item__exclusive.svg" alt="">
                    </li>
                </ul>
            </section>
        </div>

        <!-- Aulas -->
            <section id="Classes" class="classes">
                <div class="container">
                    <h2 class="classes__title">
                    Aqui é real <span class="classes__title__emphasis">NO PAIN, NO GAIN</span>!
                </h2>
                <p class="classes__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur fuga atque animi architecto fugit mollitia, nisi dolorum, est error quidem nam placeat sint suscipit libero at sapiente debitis aspernatur.
                </p>
                </div>
                <div class="classes__cards">
                    <ul class="classes__cards__list">
                        <li class="classes__cards__list__item">
                            <img class="classes__cards__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                            <h3 class="classes__cards__list__item__title">Dança</h3>
                            <img class="classes__cards__list__item__simbol" src="../../public/images/sgv/classes__dance.svg" alt="">
                        </li>
                        <li class="classes__cards__list__item">
                            <img class="classes__cards__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                            <h3 class="classes__cards__list__item__title">Musculação</h3>
                            <img class="classes__cards__list__item__simbol" src="../../public/images/sgv/classes__ gym.svg" alt="">
                        </li>
                        <li class="classes__cards__list__item">
                            <img class="classes__cards__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                            <h3 class="classes__cards__list__item__title">Natação</h3>
                            <img class="classes__cards__list__item__simbol" src="../../public/images/sgv/classes__ swimming.svg" alt="">
                        </li>
                        <li class="classes__cards__list__item">
                            <img class="classes__cards__list__item__image" src="http://via.placeholder.com/300x300" alt="">
                            <h3 class="classes__cards__list__item__title">Combate</h3>
                            <img class="classes__cards__list__item__simbol" src="../../public/images/sgv/classes__combat.svg" alt="">
                        </li>
                    </ul>
                </div>
            </section>
        
    </main>
</template>

<style scoped>
.hero{
    padding: 5.6vw;
    min-height: 80vh;
    background-image: url(../../public/images/hero/hero__image.png);
    text-align: center;
    background-size: cover;
    }
.container{
    padding-top: 150px;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    color: #CCCCCC;
}

/* Localização */
.direction{
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 1fr;
}
.direction__info{
    margin-right: 40px;
}
.direction__info__title{
    color: #13F261;
    text-transform: uppercase;
    margin-bottom: 24px;
}
.direction__info__description{
    text-align: justify;
}
.direction__image__item{
    border-radius: 8px;
    box-shadow: 10px 10px 10px rgba(22, 242, 117, .2);
}

/* Experiencias */
.experience{
    padding-top: 150px;
}
.experience__title{
    font-weight: normal;
    font-size: 2em;
    text-align: center;
    margin-bottom: 16px;
}
.experience__brand{
    font-weight: bold;
    color:#16F275;
}
.experience__description{
    text-align: justify;
}
.experience__list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    margin-top: 32px;
}
.experience__list__item{
    transition: .5s ease;
}
.experience__list__item:hover{
    scale: 1.03;
    transition: .5s ease;
}
.experience__list__item__image{
    border-radius: 8px;
    margin-bottom: 16px;
}
.experience__list__item__title{
    margin-bottom: 16px;
    text-transform: uppercase;
    color: #13F261;
}


/* Aulas */
.classes__title{
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 24px;
    font-weight: normal;
    font-size: 2em;
}
.classes__title__emphasis{
    font-weight: bold;
    color: #13F261;
}
.classes__description{
    text-align: justify;
}
.classes__cards{
    margin: 32px auto 50px;
    text-align: center;
}
.classes__cards__list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.classes__cards__list__item{
    background-color: #0DA643;
    padding: 24px;
    margin: 0 30px;
    border-radius: 8px;
    transition: .5s ease;
}
.classes__cards__list__item:hover{
    scale: 1.03;
    transition: .5s ease;
}
.classes__cards__list__item__image{
    border-radius: 8px;
    width: 200px;
}
.classes__cards__list__item__title{
    font-size: 1.17em;
    margin-top: 24px;
    text-transform: uppercase;
}
.classes__cards__list__item__simbol{
    width: 50px;
}


@media (max-width: 768px){
    .hero{
    background-image: url(../../public/images/hero/hero__image__smartphone.png);
    background-size:cover;
    background-repeat: no-repeat
    }
    .container{
        width: 80%;
    }

    /* Localização */
    .direction{
        display: block;
        text-align: center;
    }
    .direction__info{
        margin-right: 0;
        margin-bottom: 24px;
    }
    .direction__image__item{
        margin-top: 24px;
        box-shadow: 10px 10px 10px rgba(22, 242, 117, .2);
    }

    /* Experiencias */
    .experience__list{
        display: block;
    }
    .experience__list__item{
        margin-bottom: 40px;
    }

    /* Aulas */
    .classes__cards__list{
    display: block;
    }
    .classes__cards__list__item{
        margin:0 60px 40px;
    }
    .classes__cards__list__item__image{
        width: 200px;
    }
}

@media (min-width: 768px) and (max-width: 1022px){
    .hero{
        background-image: url(../../public/images/hero/hero__image__tablet.png);
    background-size:cover;
    background-repeat: no-repeat;
    }
    .container{
        width: 90%;
    }

    /* Localizações */
    .direction{
        display: grid;
        grid-template-columns: 1fr fr;
    }
    .direction__info__title{
    text-align: start;
}
    .direction__info{
        text-align: center;
        margin-right: 24px
    }

    /* Experiencias */
    .experience__list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .experience__list__item__image{
        max-width: 200px;
    }

    /* Aulas */
    .classes__cards{
        margin-top: 60px;
    }
    .classes__cards__list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    }
    .classes__cards__list__item{
        margin:0 60px 40px;
    }
    .classes__cards__list__item__image{
        width: 200px;
    }
}
</style>