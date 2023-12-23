<script setup>
/* Imports */
import { ref } from 'vue';
import { getCurrentYear } from '../helpers/getCurrentYear';

const verbiage = `Olimpiu Seulean &copy; ${getCurrentYear()} | All rights reserved.`;

const state = ref({
  links: [
    { text: 'Linkedin | ', href: 'https://www.linkedin.com/in/seulean-olimpiu/' },
    { text: 'Github |', href: 'https://github.com/oliseulean' },
    { text: 'Contact Me |', href: 'mailto:seulean.olimpiu@gmai.com' },
    { text: 'Resume |', href: 'https://drive.google.com/file/d/1FB8DOQORG_3ug05Ctprp-zR27cn6vBRj/view?usp=sharing' },
  ],
});
</script>

<template>
  <div class="app-footer">
    <div class="app-footer-left">
      <p class="app-footer-left__copyright" v-html="verbiage" />
    </div>

    <div class="app-footer-right">
      <ul class="app-footer-right__list">
        <li
          v-for="(link, index) in state.links"
          :key="index"
          class="app-footer-right__list-item"
        >
          <a
            :href="link.href"
            target="_blank"
            class="app-footer-right__list-item-link"
            v-html="link.text"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  bottom: 0;
  background: $color-black-pearl;
  border-top: 1px solid $color-black-pearl;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  flex-direction: column;

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

