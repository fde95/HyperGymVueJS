<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__brand">
                <a class="footer__brand__link" href="https://www.linkedin.com/in/fde95/" target="_blank">
                    <img class="footer__brand__link__logo" src="../../public/images/navbar__logo.png" alt="">
                </a>
            </div>

            <!-- Menu de Rodapé -->
            <ul class="footer__menu">
                <a class="footer__menu__link" href="">
                    <li class="footer__menu__link__item">Sobre</li>
                </a>
                <a class="footer__menu__link" href="">
                    <li class="footer__menu__link__item">Contratos</li>
                </a>
                <a class="footer__menu__link" href="">
                    <li class="footer__menu__link__item">Fale Conosco</li>
                </a>
                <a class="footer__menu__link" href="">
                    <li class="footer__menu__link__item">Parcerias</li>
                </a>
            </ul>

            <!-- Redes Sociais -->
            <ul class="footer__social--midia">
                <a class="footer__social--midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="Conheça o dev">
                    <li class="footer__social--midia__link__item">
                        <i class="bi bi-facebook"></i>
                    </li>
                </a>
                <a class="footer__social--midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="Conheça o dev">
                    <li class="footer__social--midia__link__item">
                        <i class="bi bi-instagram"></i>
                    </li>
                </a>
                <a class="footer__social--midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="Conheça o dev">
                    <li class="footer__social--midia__link__item">
                        <i class="bi bi-linkedin"></i>
                    </li>
                </a>
                <a class="footer__social--midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="Conheça o dev">
                    <li class="footer__social--midia__link__item">
                        <i class="bi bi-youtube"></i>
                    </li>
                </a>
                <a class="footer__social--midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="Conheça o dev">
                    <li class="footer__social--midia__link__item">
                        <i class="bi bi-spotify"></i>
                    </li>
                </a>
            </ul>

            <!-- Informações da Empresa -->
            <p class="footer__description">
                Avenida do Maromba, nº1000 - Jardim No Pain No Gain - 00000-000
                <br>
                HYPER GYM Centro de Treinamento Atlético e Dança ltda.
                <br>
                CNPJ: 00.000.000/0000-00
                <br>
                faleconosco@hypergym.com
            </p>

            <!-- Copy -->
            <p class="copy">2023 &copy; Criado e Desenvolvido por <a class="copy__link" href="https://www.linkedin.com/in/fde95/" target="_blank">Felipe Espinoza</a></p>
        </div>
    </footer>
</template>

<style scoped>
.container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.footer{
    padding: 24px;
}
.footer__brand__link__logo{
    max-height: 60px;
}

.footer__menu{
    display: flex;
    justify-content: center;
    margin-top: 16px;
}
.footer__menu__link{
    text-decoration: none;
    margin: 10px;
}
.footer__menu__link__item{
    color: #CCCCCC;
    border-bottom: 2px solid transparent;
    transition: 1s ease;
}
.footer__menu__link__item:hover{
    border-bottom: 2px solid #13F261;
    transition: 1s ease;
}

.footer__social--midia{
    display: flex;
    justify-content: center;
}
.footer__social--midia__link{
    text-decoration: none;
    margin: 10px;
    font-size: 1.5em;
}
.footer__social--midia__link__item{
    color: #13F261;
}
.footer__social--midia__link__item:hover{
    color: #0DA643;
}

.footer__description{
    font-size: .8em;
    margin-top: 16px;
}

.copy{
    margin-top: 16px;
    text-align: center;
}
.copy__link{
    color: #0DA643;
    text-decoration: none;
    font-weight: bold;
}

@media screen and (max-width: 767px){
    .container{
            max-width: 80%;
            display: inline;
            text-align: center;
        }
.footer__brand__link__logo{
    height: 40px;
}
.footer__menu__link{
    font-size: .9em;
}

.footer__social--midia{
    display: flex;
    justify-content: center;
}
.footer__social--midia__link{
    font-size: 1.5em;
}
.footer__description{
    font-size: .6em;
    margin-top: 16px;
}
.copy{
    font-size: .7em;
}
}
</style>
