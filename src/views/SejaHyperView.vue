<template>
    <main id="SejaMembro">

        <!-- Banner -->
        <img class="SejaMembro__banner" src="../../public/images/banner__SejaHyper/banner__SejaHyper__desktop.png" alt="Imagem de halteres verdes no chão de uma academia">
        <div class="container">

        <!-- Diferenciais -->
            <section id="Member" class="member">
                <h1 class="member__title">
                    De o primeiro passo para <span class="member__title__emphasis">uma vida mais saudável</span>.
                </h1>
                <p class="member__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores animi sed illo enim, aspernatur blanditiis voluptates eligendi, ipsa aperiam ea aliquid voluptate exercitationem ipsam nisi, neque expedita omnis sequi!
                </p>
                <div class="member__card">
                    <img class="member__card__brand" src="../../public/images/navbar__logo.png" alt="Hyper Logo">
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

        <!-- Formulário -->
            <section id="MemberForm">
                <div class="container">
                    <h2 class="member__title--form">Seja <span class="member__title--form__emphasis">Hyper</span>!</h2>
                    <form class="member__form">
                        <label class="member__form__label" for="name">Nome Completo</label>
                        <input class="member__form__input" type="text" id="name">
                        <label class="member__form__label" for="cpf">CPF</label>
                        <input class="member__form__input" type="text" id="cpf">
                        <label class="member__form__label" for="birthday">Data de Nasc.</label>
                        <input class="member__form__input" type="date" id="birthday">
                        <label class="member__form__label" for="cel">Celular</label>
                        <input class="member__form__input" type="text" id="cel">
                        <label class="member__form__label" for="email">E-mail</label>
                        <input class="member__form__input" type="email" id="email">

                        <label class="member__form__label" for="password">Senha de acesso</label>
                        <input class="member__form__input" type="password" name="password" id="password">
                        <label class="member__form__label" for="passwordConfirm">Confirmação de senha</label>
                        <input class="member__form__input" type="password" name="passwordConfirm" id="passwordConfirm">

                        <button class="member__form__button">Cadastrar</button>
                    </form>
                </div>
            </section>
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

/* Banner */
.SejaMembro__banner{
    max-width: 100%;
}

/* Diferenciais */
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
    text-align: justify;
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
.member__card__list__item__description{
    text-align: justify;
}


/* Formulário */
#MemberForm{
    background-color: #CCCCCC;
}
.member__title--form{
    font-size: 2em;
    font-weight: normal;
    text-align: center;
    margin-bottom: 24px;
    color: #0D0D0D;
    text-transform: uppercase;
}
.member__title--form__emphasis{
    font-weight: bold;
}
.member__form{
    background-color:#0da643;
    padding: 50px;
    border-radius: 20px;
    opacity: 80%;
    display: grid;
}
.member__form__label{
    margin: 24px 0 8px;
}
.member__form__input{
    padding: 6px;
    border: none;
    border-radius: 8px;
}
.member__form__button{
    cursor: pointer;
    margin-top: 24px;
    padding: 16px;
    border: none;
    border-radius:0 0 8px 8px;
    background-color: #0D0D0D;
    color: #CCCCCC;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2em;
}
.member__form__button:hover{
    background-color: #2c2c2c;
}


@media (max-width: 768px){
    .container{
        width: 80%;
        padding-top: 20px;
    }
    .member__title{
        font-size: 1.5em;
    }
    .member__description{
        font-size: 1em;
    }
    .member__card{
        display: block;
        padding: 49px 25px 25px;
    }
    .member__card__brand{
        display: none;
    }
    .member__card__list__item__title{
        font-size: 24px;
        text-align: center;
    }
    .member__card__list__item__description{
        text-align: justify;
    }
}


@media (min-width: 768px) and (max-width:1022px){
    .container{
        width: 90%;
    }
    .member__card__brand{
        margin-right: 40px;
    }
}

</style>