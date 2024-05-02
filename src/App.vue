<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navMenu animate__animated animate__fadeInDownBig">
      <a href="#">
        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
      </a>
      <!-- <a href="#">
        <RouterLink :to="{ name: 'detail' }" class="nav-link">Detail</RouterLink>
      </a> -->
      <a href="#">
        <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
      </a>
      <!-- <div class="dot"></div> -->
    </nav>
    <transition name="fade" mode="out-in">
      <RouterView></RouterView>
    </transition>
</template>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active di bawah Vue versi 2.1.8 */ {
  opacity: 0;
}

.navMenu {
  position: absolute;
  top: 10%;
  left: 45%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.navMenu a {
  text-align: center;
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 100px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #fddb3a;
}

/* .navMenu .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(3):hover ~ .dot {
  -webkit-transform: translateX(200px);
  transform: translateX(200px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
} */


</style>