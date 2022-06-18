<script setup>
import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));

const Land = defineAsyncComponent(() => import('../views/Land.vue'));

const LeftNavbar = defineAsyncComponent(() =>
  import('../components/LeftNavbar.vue')
);

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
</script>

<template>
  <Land />
  <LeftNavbar />
  <Navbar />
  <Experience />
  <TechnologiesCarousel />
  <Projects />
  <Copyright />
  <BackToTop />
</template>

<style lang="scss">
@import 'floating-vue/dist/style.css';
@import 'vue3-carousel/dist/carousel.css';
</style>
