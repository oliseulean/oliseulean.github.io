<script setup>
/*
  imports
*/

import NavbarVue from './components/Navbar.vue';
import Land from './views/Land.vue';
import LeftNavbar from './components/LeftNavbar.vue';
import WorkAndStudies from './views/WorkAndStudies.vue';
import TechnologiesCarousel from './views/TechnologiesCarousel.vue';
</script>

<template>
  <NavbarVue />
  <LeftNavbar />
  <Land />
  <WorkAndStudies id="projects" />
  <TechnologiesCarousel />
</template>

<style lang="scss">
@import 'floating-vue/dist/style.css';
@import 'vue3-carousel/dist/carousel.css';
</style>
