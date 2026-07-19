<script setup>
/* Imports */
import { getCurrentYear } from '../helpers/getCurrentYear.js';
import pdfResume from '/Olimpiu-Seulean-Resume.pdf';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon.vue';
import UpArrowIcon from '../components/icons/UpArrowIcon.vue';

const links = [
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/seulean-olimpiu/' },
  { text: 'GitHub', href: 'https://github.com/oliseulean' },
  { text: 'Resume', href: pdfResume },
];
</script>

<template>
  <footer
    id="contact"
    class="footer"
  >
    <div class="footer__inner">
      <div class="footer__main">
        <div class="footer__message">
          <p class="footer__eyebrow">
            Let’s connect
          </p>
          <h2 class="footer__title">
            Frontend experience that scales beyond the interface.
          </h2>
          <p class="footer__description">
            Always happy to talk about building solid frontend products.
          </p>
        </div>

        <div class="footer__actions">
          <a
            href="mailto:seulean.olimpiu@gmail.com"
            class="footer__contact"
          >
            Email me
            <ExternalLinkIcon
              class="footer__link-icon"
            />
          </a>

          <nav aria-label="Professional profiles">
            <ul class="footer__links">
              <li
                v-for="link in links"
                :key="link.text"
              >
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.text }}
                  <ExternalLinkIcon
                    class="footer__link-icon"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ getCurrentYear() }} Olimpiu Șeulean
        </p>
        <a href="#home">
          Back to top
          <UpArrowIcon
            class="footer__back-icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include section-spacing;
  @include section-divider;
  background:
    radial-gradient(circle at 15% 20%, rgba($color-web-orange, 0.09), transparent 26rem),
    $color-black-pearl;
  color: $color-white;
  @include font-primary;

  &__inner {
    margin: 0 auto;
    @include content-section;
  }

  &__main {
    display: grid;
    gap: 2.5rem;
    padding: 2rem;
    @include surface-card;
    @include interactive-card(0);

    @include md {
      grid-template-columns: minmax(0, 1.25fr) minmax(15rem, 0.75fr);
      gap: 4rem;
      align-items: end;
      padding: 3rem;
    }
  }

  &__eyebrow {
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-xs;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    max-width: 44rem;
    margin-top: 0.75rem;
    color: $color-white;
    @include font-weight(bold);
    font-size: $font-size-3xl;
    line-height: 1.2;
    letter-spacing: -0.02em;

    @include md {
      font-size: $font-size-4xl;
    }
  }

  &__description {
    max-width: 40rem;
    margin-top: 1rem;
    color: $color-bombay;
    font-size: $font-size-base;
    line-height: 1.7;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-start;

    @include md {
      align-items: flex-end;
    }
  }

  &__contact {
    --footer-link-transform: translate(0, 0);

    display: inline-flex;
    gap: 0.55rem;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.75rem 1.1rem;
    border: 1px solid $color-web-orange;
    border-radius: 999px;
    background-color: $color-web-orange;
    color: $color-black-pearl;
    @include font-weight(bold);
    font-size: $font-size-sm;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      border-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: $color-amber;
        background-color: $color-amber;
        box-shadow: 0 0.8rem 2rem rgba($color-web-orange, 0.16);
        color: $color-black-pearl;
        transform: translateY(-2px);

        --footer-link-transform: translate(0.12rem, -0.12rem);
      }
    }

    &:focus-visible {
      @include focus-ring;
    }
  }

  &__links {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    flex-wrap: wrap;

    @include md {
      justify-content: flex-end;
    }

    a {
      --footer-link-transform: translate(0, 0);

      display: inline-flex;
      gap: 0.35rem;
      padding: 0.55rem 0.75rem;
      border: 1px solid rgba($color-white, 0.12);
      border-radius: 999px;
      color: $color-catskill-white;
      @include font-weight(medium);
      font-size: $font-size-sm;
      transition:
        border-color $motion-duration-base $motion-ease-standard,
        background-color $motion-duration-base $motion-ease-standard,
        color $motion-duration-base $motion-ease-standard,
        transform $motion-duration-base $motion-ease-emphasized;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: rgba($color-web-orange, 0.4);
          background-color: rgba($color-web-orange, 0.06);
          color: $color-amber;
          transform: translateY(-1px);

          --footer-link-transform: translate(0.1rem, -0.1rem);
        }
      }

      &:focus-visible {
        @include focus-ring(2px);
      }
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba($color-white, 0.08);
    color: $color-bombay;
    font-size: $font-size-sm;

    @include sm {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    a {
      --footer-back-transform: translateY(0);

      display: inline-flex;
      gap: 0.4rem;
      color: $color-catskill-white;
      @include font-weight(medium);
      transition: color $motion-duration-base $motion-ease-standard, gap $motion-duration-base $motion-ease-standard;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          gap: 0.6rem;
          color: $color-amber;

          --footer-back-transform: translateY(-0.15rem);
        }
      }

      &:focus-visible {
        @include focus-ring(2px);
      }
    }
  }

  &__link-icon,
  &__back-icon {
    display: inline-block;
    transition: transform $motion-duration-base $motion-ease-emphasized;
  }

  &__link-icon {
    transform: var(--footer-link-transform, translate(0, 0));
  }

  &__back-icon {
    transform: var(--footer-back-transform, translateY(0));
  }
}
</style>
