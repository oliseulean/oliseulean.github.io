<script setup>
/* Imports */
import Land from '../views/Land.vue';
import { useGlobalStore } from '../stores/global';
import { useExperienceStore } from '../stores/experience';
import { useTechnologies } from '../stores/technologies';
import { useProjectsStore } from '../stores/projects';

import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));
const Work = defineAsyncComponent(() => import('../views/Work.vue'));
const Technologies = defineAsyncComponent(() => import('../views/Technologies'));
const Projects = defineAsyncComponent(() => import('../views/Projects.vue'));
const Footer = defineAsyncComponent(() => import('../../src/views/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('../components/BackToTop.vue'));
const Cookie = defineAsyncComponent(() => import('../components/Cookie.vue'));

/* Store */
const globalStore = useGlobalStore();
const experienceStore = useExperienceStore();
const technologiesStore = useTechnologies();
const projectsStore = useProjectsStore();
</script>

<template>
  <Land />
  <Cookie
    :global-store="globalStore"
  />
  <Navbar />
  <Work
    :global-store="globalStore"
    :experience-store="experienceStore"
  />
  <Technologies
    :global-store="globalStore"
    :technologies-store="technologiesStore"
  />
  <Projects
    :global-store="globalStore"
    :projects-store="projectsStore"
  />
  <Footer />
  <BackToTop />
</template>
