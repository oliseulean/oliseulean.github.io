<script setup>
/* Imports */
import {
  ref,
  computed,
} from 'vue';
import { useScrollPosition } from '../composable/useScrollPosition.js';
import { getCurrentYear } from '../helpers/getCurrentYear.js';
import pdfResume from '/Olimpiu-Seulean-Resume.pdf';

/* State */
const state = ref({
  links: [
    { text: 'Linkedin | ', href: 'https://www.linkedin.com/in/seulean-olimpiu/' },
    { text: 'Github |', href: 'https://github.com/oliseulean' },
    { text: 'Contact Me |', href: 'mailto:seulean.olimpiu@gmai.com' },
    { text: 'Resume |', href: pdfResume },
  ],
});

/* Composable */
const { shouldShow } = useScrollPosition();

const footerClasses = computed(() =>{
  return {
    'footer': true,
    'footer--fixed': !shouldShow.value,
    'footer--relative': shouldShow.value,
  }
});

const footerVerbiage = `Olimpiu Seulean &copy; ${getCurrentYear()} | All rights reserved.`;
</script>

<template>
  <div :class="footerClasses">
    <div class="footer-left">
      <!-- eslint-disable vue/no-v-html -->
      <p
        class="footer-left__copyright"
        v-html="footerVerbiage"
      />
      <!-- eslint-enable vue/no-v-html -->
    </div>

    <div class="footer-right">
      <ul class="footer-right__list">
        <li
          v-for="(link, index) in state.links"
          :key="index"
          class="footer-right__list-item"
        >
          <!-- eslint-disable vue/no-v-html -->
          <a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-right__list-item-link"
            v-html="link.text"
          />
          <!-- eslint-enable vue/no-v-html -->
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  bottom: 0;
  background: $color-black-pearl;
  border-top: 1px solid $color-black-pearl;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  flex-direction: column;

  &--relative {
    position: relative;
  }

  &--fixed {
    position: fixed;
  }

  @include sm {
    flex-direction: row;
    padding: 0.5rem 2rem;
  }

  &-left {
    color: $color-white;
  }

  &-right {
    &__list {
      display: flex;
      list-style: none;
      margin: 0;
      padding-right: 0;

      @include sm {
        padding-right: 1.5rem;
      }

      &-item {
        margin: 0.2rem;

        @include sm {
          margin: 0.5rem;
        }

        &-link {
          text-decoration: none;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: $color-white;
          }
        }
      }
    }
  }
}
</style>
