<template>
    <main id="SejaMembro">
        <img class="SejaMembro__banner" src="http://via.placeholder.com/1920x250" alt="">
        <div class="container">
            <section class="member">
                <h1 class="member__title">
                    De o primeiro passo para <span class="member__title__emphasis">uma vida mais saudável</span>.
                </h1>
                <p class="member__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores animi sed illo enim, aspernatur blanditiis voluptates eligendi, ipsa aperiam ea aliquid voluptate exercitationem ipsam nisi, neque expedita omnis sequi!
                </p>
                <div class="member__card">
                    <img class="member__card__brand" src="../../public/images/navbar__logo.png" alt="">
                    <ul class="member__card__list">
                        <li class="member__card__list__item">
                            <h3 class="member__card__list__item__title">
                                Qualidade
                            </h3>
                            <p class="member__card__list__item__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis amet repellendus alias eius et, ipsa quaerat dolores vero veniam voluptatibus libero reiciendis? Maxime adipisci vitae corporis eligendi. Animi, deleniti commodi?</p>
                        </li>
                        <li class="member__card__list__item">
                            <h3 class="member__card__list__item__title">
                                Exclusividade
                            </h3>
                            <p class="member__card__list__item__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis amet repellendus alias eius et, ipsa quaerat dolores vero veniam voluptatibus libero reiciendis? Maxime adipisci vitae corporis eligendi. Animi, deleniti commodi?</p>
                        </li>
                        <li class="member__card__list__item">
                            <h3 class="member__card__list__item__title">
                                Privacidade
                            </h3>
                            <p class="member__card__list__item__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis amet repellendus alias eius et, ipsa quaerat dolores vero veniam voluptatibus libero reiciendis? Maxime adipisci vitae corporis eligendi. Animi, deleniti commodi?</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
#SejaMembro{
    background-color:#0DA643;
}
.container{
    max-width: 1024px;
    padding: 100px 0;
    width: 100%;
    margin: 0 auto;
    color: #FFF;
}
.SejaMembro__banner{
    max-width: 100%;
}
.member__title{
    font-weight: normal;
    font-size: 2em;
    text-align: center;
    margin-bottom: 24px;
    text-transform: uppercase;
}
.member__title__emphasis{
    font-weight: bold;
    color: #0D0D0D;
}
.member__description{
    font-size: 1.3em;
    margin-bottom: 80px;
}

.member__card{
    padding: 50px;
    background-color: #0D0D0D;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.20);
}
.member__card__list__item{
    margin-bottom: 24px;
}
.member__card__list__item__title{
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #13F261;
}
.member__card__brand{
    width: 100px;
}

</style>