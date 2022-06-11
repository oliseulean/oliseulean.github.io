<script setup>
/*
  imports
*/

import NavbarVue from './components/Navbar.vue';
import Land from './views/Land.vue';
import LeftNavbar from './components/LeftNavbar.vue';
import WorkAndStudies from './views/WorkAndStudies.vue';
</script>

<template>
  <NavbarVue />
  <LeftNavbar />
  <Land />
  <WorkAndStudies id="projects" />
</template>

<style lang="scss">
// import styling for the floating-vue module.
@import 'floating-vue/dist/style.css';
</style>
