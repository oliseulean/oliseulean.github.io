<script setup>
import Land from '../views/Land.vue';
import LeftNavbar from '../components/LeftNavbar.vue';

import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));

const Experience = defineAsyncComponent(() =>
  import('../views/Experience.vue')
);

const TechnologiesCarousel = defineAsyncComponent(() =>
  import('../views/TechnologiesCarousel.vue')
);

const Projects = defineAsyncComponent(() => import('../views/Projects.vue'));

const Copyright = defineAsyncComponent(() => import('../views/Copyright.vue'));

const BackToTop = defineAsyncComponent(() =>
  import('../components/BackToTop.vue')
);

const Cookie = defineAsyncComponent(() => import('../components/Cookie.vue'));
</script>

<template>
  <Land />
  <LeftNavbar />
  <Cookie />
  <Navbar />
  <Experience />
  <TechnologiesCarousel />
  <Projects />
  <Copyright />
  <BackToTop />
</template>

<style lang="scss">
@import 'vue3-carousel/dist/carousel.css';
@import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
</style>
