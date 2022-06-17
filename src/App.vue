<script setup>
/*
  imports
*/

import NavbarVue from './components/Navbar.vue';
import Land from './views/Land.vue';
import LeftNavbar from './components/LeftNavbar.vue';
import Experience from './views/Experience.vue';
import TechnologiesCarousel from './views/TechnologiesCarousel.vue';
import Projects from './views/Projects.vue';
import Copyright from './views/Copyright.vue';
import BackToTop from './components/BackToTop.vue';
</script>

<template>
  <NavbarVue />
  <LeftNavbar />
  <Land />
  <Experience id="projects" />
  <TechnologiesCarousel />
  <Projects />
  <Copyright />
  <BackToTop />
</template>

<style lang="scss">
@import 'floating-vue/dist/style.css';
@import 'vue3-carousel/dist/carousel.css';
</style>
