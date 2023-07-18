<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footerbar from './components/Footerbar.vue';

</script>

<template>
  <header>
        <div class="container">
            <a href="#" class="navbar">
                <img class="navbar__brand" src="../public/images/navbar__logo.png" alt="">
            </a>
              <nav class="navbar__links">
                      <li>
                        <RouterLink to="/" class="navbar__links__item">Home</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/about" class="navbar__links__item">Unidades</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/about" class="navbar__links__item">Membros</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/about" class="navbar__links__item__emphasis">SEJA HYPER</RouterLink>
                      </li>
              </nav>
        </div>
    </header>
    <RouterView/>
    <Footerbar/>
</template>

<style scoped>
header{
    position: sticky;
    top: 0;
    left: 0;
    background-color: #0D0D0D;
    box-shadow: 10px 10px 10px rgba(22, 242, 117, .2);
    z-index: 1;
}

.container{
    padding: 16px 36px;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar{
    text-decoration: none;
    color: #16F275;
    }
.navbar__brand{
  margin: 0;
  height: 40px;
}
.navbar__links{
  list-style: none;
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
}
.navbar__links__item{
  margin: 8px 16PX;
  color: #13F261;
  border-bottom: 2px solid transparent;
  transition: 1s ease;
  text-decoration: none;
}
.navbar__links__item:hover{
  border-bottom: 2px solid #13F261;
  transition: 1s ease;
}
.navbar__links__item__emphasis{
  color: #0D0D0D;
  background-color: #13F261;
  padding: 8px;
  border-radius: 8px;
  margin: 8px 16PX;
  transition: .3s ease;
  font-weight: 500;
  text-decoration: none;
}
.navbar__links__item__emphasis:hover{
  background-color: #0DA643;
  transition: .3s ease;
}

@media (max-width: 767px){
  .container{
      max-width: 80%;
      display: inline;
      text-align: center;
  }
  .navbar{
    display: block;
  }
  .navbar__brand{
    text-align: center;
  }
  .navbar__links{
    font-size: .9em;
    margin: 24px auto 0;
  }
}

</style>
