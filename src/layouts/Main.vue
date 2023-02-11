<template>
  <Land />
  <LeftNavbar />
  <Cookie />
  <Navbar />
  <Experience />
  <Technologies />
  <Projects />
  <Copyright />
  <BackToTop />
</template>

<script setup>
/* Imports */
import Land from '../views/Land.vue';
import LeftNavbar from '../components/LeftNavbar.vue';

import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));

const Experience = defineAsyncComponent(() =>
  import('../views/Experience.vue')
);

const Technologies = defineAsyncComponent(() =>
  import('../views/Technologies')
);

const Projects = defineAsyncComponent(() => import('../views/Projects.vue'));

const Copyright = defineAsyncComponent(() => import('../../src/views/Copyright/Copyright.vue'));

const BackToTop = defineAsyncComponent(() =>
  import('../components/BackToTop.vue')
);

const Cookie = defineAsyncComponent(() => import('../components/Cookie.vue'));
</script>
