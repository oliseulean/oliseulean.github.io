<template>
  <div
    class="app__footer"
    v-html="
      `&copy; Copyright &copy; ${getCurrentYear()} | All rights reserved. <br /> Designed by Olimpiu Șeulean`
    "
  />
</template>

<script setup>
import getCurrentYear from '../helpers/getCurrentYear';
</script>

<style scoped lang="scss">
.app__footer {
  color: $color-light;
  background: $color-dark-blue;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
}
</style>
