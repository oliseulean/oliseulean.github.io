<template>
  <div
    class="app-footer"
    v-html="
      `&copy; Copyright &copy; ${getCurrentYear()} | All rights reserved.
      <br />
      Designed by Olimpiu Șeulean`
    "
  />
</template>

<script setup>
/*
 * Imports
 */
import getCurrentYear from '../helpers/getCurrentYear';
</script>

<style lang="scss" scoped>
.app-footer {
  display: block;
  margin: 0 auto;
  @include font-roboto-slab();
  color: $color-light;
  background: $color-dark-blue;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  padding: 1rem;
}
</style>
