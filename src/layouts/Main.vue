<script setup>
/* Imports */
import HeroSection from '../views/HeroSection.vue';
import Navbar from '../components/Navbar.vue';
import Work from '../views/Work.vue';
import Technologies from '../views/Technologies.vue';
import Projects from '../views/Projects.vue';
import Footer from '../views/Footer.vue';
import Cookies from '../components/Cookies.vue';
import {
  experience,
  education,
  technologies,
  tools,
  projects,
} from '../data/main.js';
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <Work
      :experience="experience"
      :education="education"
    />
    <Technologies
      :technologies="technologies"
      :tools="tools"
    />
    <Projects :projects="projects" />
  </main>
  <Cookies />
  <Footer />
</template>
