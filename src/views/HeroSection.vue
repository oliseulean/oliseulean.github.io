<script setup>
/* Imports */
import pdfResume from '/Olimpiu-Seulean-Resume.pdf';
import DownArrowIcon from '../components/icons/DownArrowIcon.vue';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon.vue';
import ProfilePicture from '../components/ProfilePicture.vue';
import { sendGAEvent } from '../helpers/sendAnalyticsEvent.js';

const handleExperienceLinkClick = () => {
  sendGAEvent(
    'Olimpiu Seulean Portfolio',
    'Scroll Btn',
    'Scroll Down Button',
    1
  );
};
</script>

<template>
  <section
    id="home"
    class="hero-section"
  >
    <div class="hero-section__shell">
      <div class="hero-section__content">
        <p class="hero-section__eyebrow">
          Hello, I’m Olimpiu Șeulean
        </p>
        <h1 class="hero-section__title">
          Building frontend systems that <span>scale.</span>
        </h1>
        <p class="hero-section__summary">
          <strong>6+ years</strong> as a Senior Frontend Developer, turning complex requirements into accessible, maintainable experiences, and helping the teams behind them deliver with confidence.
        </p>

        <div class="hero-section__actions">
          <a
            href="#experience"
            class="hero-section__action hero-section__action--primary"
            @click="handleExperienceLinkClick"
          >
            Explore my experience
            <DownArrowIcon
              class="hero-section__action-icon"
            />
          </a>
          <a
            :href="pdfResume"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-section__action hero-section__action--secondary"
          >
            View resume
            <ExternalLinkIcon
              class="hero-section__action-icon"
            />
          </a>
        </div>
      </div>

      <aside
        class="hero-section__snapshot"
        aria-label="Professional profile summary"
      >
        <div class="hero-section__snapshot-header">
          <ProfilePicture
            variant="compact"
            priority
          />
          <div class="hero-section__snapshot-heading">
            <span class="hero-section__status">Current role</span>
            <h2 class="hero-section__snapshot-role">
              Senior Frontend Developer
            </h2>
            <p class="hero-section__snapshot-company">
              Sage · Cluj-Napoca, Romania
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/seulean-olimpiu/"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-section__profile-link"
        >
          Open LinkedIn profile
          <ExternalLinkIcon
            class="hero-section__profile-link-icon"
          />
        </a>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  width: 100%;
  padding: 7rem 0 4rem;
  border-bottom: 1px solid rgba($color-white, 0.08);
  background:
    radial-gradient(circle at 80% 15%, rgba($color-web-orange, 0.13), transparent 26rem),
    radial-gradient(circle at 5% 80%, rgba($color-web-orange, 0.055), transparent 24rem),
    $color-black-pearl;
  color: $color-white;
  @include font-primary;

  &__shell {
    display: grid;
    gap: 2.5rem;
    @include content-section;

    @include lg {
      grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
      gap: 4.5rem;
      align-items: center;
    }
  }

  &__content {
    max-width: 47rem;
  }

  &__eyebrow {
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-sm;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    max-width: 42rem;
    margin-top: 1rem;
    color: $color-white;
    @include font-weight(bold);
    font-size: $font-size-4xl;
    line-height: 1.08;
    letter-spacing: -0.035em;

    span {
      color: $color-web-orange;
    }

    @include sm {
      font-size: $font-size-5xl;
    }

    @include lg {
      font-size: $font-size-6xl;
    }
  }

  &__summary {
    max-width: 40rem;
    margin-top: 1.5rem;
    color: $color-catskill-white;
    font-size: $font-size-md;
    line-height: 1.7;
  }

  &__actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  &__action {
    --action-icon-transform: translate(0, 0);

    display: inline-flex;
    gap: 0.55rem;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.75rem 1.1rem;
    border-radius: 999px;
    @include font-primary;
    @include font-weight(bold);
    font-size: $font-size-sm;
    cursor: pointer;
    transition:
      background-color $motion-duration-base $motion-ease-standard,
      border-color $motion-duration-base $motion-ease-standard,
      box-shadow $motion-duration-base $motion-ease-standard,
      color $motion-duration-base $motion-ease-standard,
      transform $motion-duration-base $motion-ease-emphasized;

    &--primary {
      border: 1px solid $color-web-orange;
      background-color: $color-web-orange;
      color: $color-black-pearl;
    }

    &--secondary {
      border: 1px solid rgba($color-white, 0.2);
      background-color: rgba($color-white, 0.045);
      color: $color-white;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: $color-amber;
        background-color: $color-amber;
        box-shadow: 0 0.8rem 2rem rgba($color-web-orange, 0.18);
        color: $color-black-pearl;
        transform: translateY(-2px);

        --action-icon-transform: translate(0.1rem, -0.1rem);
      }
    }

    &:focus-visible {
      @include focus-ring;
    }
  }

  &__action-icon,
  &__profile-link-icon {
    display: inline-block;
    transform: var(--action-icon-transform, translate(0, 0));
    transition: transform $motion-duration-base $motion-ease-emphasized;
  }

  &__snapshot {
    padding: 1.5rem;
    @include surface-card;
    @include interactive-card;
    background: linear-gradient(145deg, rgba($color-web-orange, 0.09), rgba($color-white, 0.025));

    @include md {
      padding: 2rem;
    }
  }

  &__snapshot-header {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    color: $color-white;
  }

  &__snapshot-heading {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 0.35rem;
    align-items: flex-start;
  }

  &__status {
    display: inline-flex;
    padding: 0.3rem 0.6rem;
    border: 1px solid rgba($color-web-orange, 0.35);
    border-radius: 999px;
    background-color: rgba($color-web-orange, 0.1);
    color: $color-amber;
    font-size: $font-size-sm;
  }

  &__snapshot-role {
    color: $color-white;
    @include font-weight(bold);
    font-size: $font-size-lg;
    line-height: 1.3;
  }

  &__snapshot-company {
    color: $color-bombay;
    font-size: $font-size-sm;
  }

  &__profile-link {
    --action-icon-transform: translate(0, 0);

    display: inline-flex;
    gap: 0.45rem;
    margin-top: 1.5rem;
    color: $color-web-orange;
    @include font-weight(bold);
    font-size: $font-size-sm;
    transition: color $motion-duration-base $motion-ease-standard, gap $motion-duration-base $motion-ease-standard;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        gap: 0.65rem;
        color: $color-amber;

        --action-icon-transform: translate(0.12rem, -0.12rem);
      }
    }

    &:focus-visible {
      border-radius: 0.2rem;
      @include focus-ring(4px);
    }
  }
}
</style>
