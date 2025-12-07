<script setup>
/* Imports */
import HeroSection from '../views/HeroSection.vue';
import {
  experience,
  studies,
  technologies,
  tools,
  projects,
} from '../data/main.js';
import { defineAsyncComponent } from 'vue';

/* Async Components */
const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));
const Work = defineAsyncComponent(() => import('../views/Work.vue'));
const Technologies = defineAsyncComponent(() => import('../views/Technologies.vue'));
const Projects = defineAsyncComponent(() => import('../views/Projects.vue'));
const Footer = defineAsyncComponent(() => import('../../src/views/Footer.vue'));
const BackToTopBtn = defineAsyncComponent(() => import('../components/BackToTopBtn.vue'));
const Cookies = defineAsyncComponent(() => import('../components/Cookies.vue'));
</script>

<template>
  <HeroSection />
  <Cookies />
  <Navbar />
  <Work
    :experience="experience"
    :studies="studies"
  />
  <Technologies
    :technologies="technologies"
    :tools="tools"
  />
  <Projects :projects="projects" />
  <Footer />
  <BackToTopBtn />
</template>
