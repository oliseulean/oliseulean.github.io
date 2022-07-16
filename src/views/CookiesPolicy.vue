<template>
  <LeftNavbar />
  <Navbar />
  <div class="app__cookiesPolicy">
    <div class="app__cookiesPolicy__inline">
      <button
        class="app__cookiesPolicy__inline-btn"
        @click="$router.push('/')"
      >
        🏠 Go Home
      </button>
      <PageTitle
        :color="globalStore?.colors?.colorDark"
        class="app__cookiesPolicy__inline-title"
      >
        COOKIES POLICY
      </PageTitle>
    </div>
    <p><strong>The policy of the use of cookies</strong></p>
    <p><strong>Please read the following information carefully:</strong></p>
    <p>
      In order to comply with the requirements established in the&nbsp;<strong>EU Directive of May 26,
      2012&nbsp;</strong>and the provisions of&nbsp;<strong>Law no. 506 of November 17, 2004</strong>
      regarding the processing of personal data and the protection of privacy in
      the electronic communications sector, all visitors to the website are
      required to consent before sending cookies to their computers.
    </p>
    <p>
      This website uses its own and third-party cookies to provide visitors with
      a much better browsing experience and services tailored to their needs and
      interests.
    </p>
    <p>
      Cookies play an important role in facilitating access and delivery of
      multiple services that the user enjoys on the Internet, such as:
    </p>
    <ul>
      <li>
        Customize certain settings such as the language in which a site is
        viewed, accessing old preferences by accessing the &rdquo; forward
        &rdquo; and &rdquo; back &rdquo; buttons.
      </li>
      <li>
        Cookies provide site owners with valuable feedback on how their websites
        are used by users, so that they can make them even more efficient and
        accessible to users.
      </li>
      <li>
        Allow multimedia or other applications on other sites to be included in
        a particular site to create a more valuable, useful and enjoyable
        browsing experience.
      </li>
    </ul>
    <p><strong>What is a &ldquo;cookie&rdquo;?</strong></p>
    <p>
      An &ldquo;Internet Cookie&rdquo; (also known as a &ldquo;browser
      cookie&rdquo; or &ldquo;HTTP cookie&rdquo; or simply &ldquo;cookie&rdquo;)
      is a small file, consisting of letters and numbers, that will be stored on
      your computer, mobile device or other equipment of a user accessing the
      Internet.
    </p>
    <p>
      The cookie is installed by a web-server-issued request to a browser (eg
      Internet Explorer, Chrome) and is completely &ldquo;passive&rdquo; (does
      not contain software, viruses or spyware and cannot access information on
      the hard drive user).
    </p>
    <p>
      A cookie consists of 2 parts: the name and content or value of the cookie.
      Furthermore, the cookie&rsquo;s lifetime is determined; technically, only
      the webserver that sent the cookie can access it again when a user returns
      to the website associated with that webserver.
    </p>
    <p>
      <strong>Cookies themselves do not require personal information to be used and,
        in most cases, do not personally identify Internet users.</strong>
    </p>
    <p>There are 2 major categories of cookies:</p>
    <ol>
      <li>
        <strong>Session cookies</strong> &ndash; these are temporarily stored in
        the cookie folder of the web browser to store them until the user exits
        the respective website or closes the browser window (eg when logging in
        / logging in to an account webmail or social media).
      </li>
      <li>
        <strong>Persistent cookies</strong> &ndash; these are stored on the hard
        drive of a computer or device (and generally depends on the default
        cookie lifetime). Persistent cookies include those placed by a website
        other than the one the user visits at that time &ndash; known as
        &lsquo;third party cookies&rsquo; &ndash; which can be used anonymously.
        to memorize a user&rsquo;s interests so that they are delivered as
        relevant to the user as possible.
      </li>
    </ol>
    <p><strong>What are the benefits of cookies?</strong></p>
    <p>
      A cookie contains information that links a web-browser (the user) and a
      particular web-server (the website). If a browser accesses that web server
      again, it can read the information already stored and react accordingly.
      Cookies provide users with a pleasant browsing experience and support the
      efforts of many websites to provide comfortable services to users: eg
      online privacy preferences, site language options, shopping carts or
      relevant advertising.
    </p>
    <p><strong>How long is a cookie?</strong></p>
    <p>
      Cookies are managed by web servers. The lifetime of a cookie may vary
      significantly, depending on the purpose for which it is placed. Some
      cookies are used exclusively for a single session (session cookies) and
      are no longer retained once the user has left the website, and some
      cookies are retained and reused each time the user returns to that website
      ( permanent hours). However, cookies can be deleted by a user at any time
      through the browser settings.
    </p>
    <p><strong>What are cookies placed by third parties?</strong></p>
    <p>
      Certain content sections on some sites may be provided through third
      parties / providers (eg news box, video or advertising). These third
      parties may also place cookies through the site and they are called
      &ldquo;third party cookies&rdquo; because they are not placed by the owner
      of the respective website. Third-party providers must also comply with the
      law in force and the privacy policies of the site owner.
    </p>
    <p><strong>How cookies are used by a site.</strong></p>
    <p><strong>A visit to a website may place cookies for:</strong></p>
    <ul>
      <li>increasing the performance of the website;</li>
      <li>a visitor analysis;</li>
      <li>geotargetting;</li>
      <li>user registration.</li>
    </ul>
    <p><strong>Performance cookies</strong></p>
    <p>
      This type of cookie retains the preferences of the user on this site, so
      no need to set them every time you visit the site.
    </p>
    <p>
      Examples: the volume settings for the video player, the streaming video
      speed at which the browser is compatible.
    </p>
    <p><strong>Cookies for visitor analysis</strong></p>
    <p>
      Each time a user visits a site, third-party analytics software generates a
      user analytics cookie. This cookie says if you&rsquo;ve visited this site
      before. The browser will signal if you have this cookie, and if not, one
      will be generated. It allows monitoring the unique users who visit the
      site and how often they do.
    </p>
    <p>
      As long as the visitor is not registered on the site, this cookie cannot
      be used to identify individuals, they are only used for statistical
      purposes. If it is registered, the details provided, such as the e-mail
      address and the username, can also be known &ndash; these are subject to
      confidentiality, according to the provisions of the legislation in force
      regarding the protection of personal data.
    </p>
    <p><strong>Cookies for geotargetting</strong></p>
    <p>
      These cookies are used by software that determines which country you come
      from. It is completely anonymous and is used only to target the content
      &ndash; even when the visitor is on the page in Romanian or another
      language, the same advertisement will be received.
    </p>
    <p><strong>Cookies for registration</strong></p>
    <p>
      When you register on a site, a cookie is generated that alerts you whether
      or not you are registered. The servers use these cookies to show the
      account with which you are registered and if you have permission for a
      particular service. It is also allowed to associate any comment posted on
      the site with your username. If you did not select &ldquo;keep me
      registered&rdquo;, this cookie will be automatically deleted when you
      close your browser or computer.
    </p>
    <p><strong>Other third-party cookies</strong></p>
    <p>
      On some pages, third parties may set their own anonymous cookies, in order
      to track the success of an application or to customize an application.
    </p>
    <p>
      For example, when you share (share) an article using the social media
      button on a site, that social network will record your activity.
    </p>
    <p>
      <strong>&nbsp;What kind of information is stored and accessed through
        cookies?</strong>
    </p>
    <p>
      Cookies store information in a small text file that allows a website to
      recognize a browser. The web server will recognize the browser until the
      cookie expires or is deleted.
    </p>
    <p>
      The cookie stores important information that improves the Internet
      browsing experience (eg the language settings in which you want to access
      a site; keeping a user logged in to your webmail account; online banking
      security; keeping products in the shopping cart)
    </p>
    <p><strong>Why are cookies important for the Internet?</strong></p>
    <p>
      Cookies are the central point of the efficient functioning of the
      Internet, helping to generate a friendly browsing experience and adapted
      to the preferences and interests of each user. Refusing or disabling
      cookies can make some sites impossible to use.
    </p>
    <p>
      Examples of important uses of cookies (which do not require user
      authentication through an account):
    </p>
    <ul>
      <li>
        Content and services tailored to user preferences &ndash; categories of
        news, weather, sports, maps, public and government services,
        entertainment sites and travel services.
      </li>
      <li>
        Offers tailored to the interests of the users &ndash; password
        retention, language preferences (eg displaying search results in
        Romanian).
      </li>
      <li>
        Retain child protection filters on Internet content (family mode
        options, safe search features).
      </li>
      <li>
        Measurement, optimization and analytics features &ndash; such as
        confirming a certain level of traffic on a website, what type of content
        is viewed and how a user reaches a website (eg through search engines,
        directly from other websites). hours). The websites carry out these
        analyzes of their use to improve the websites for the benefit of the
        users.
      </li>
    </ul>
    <p><strong>Security and privacy issues</strong></p>
    <p>
      <strong>Cookies are NOT viruses!</strong> They use plain text formats.
      They are not made up of pieces of code, so they cannot be executed or
      self-executing. Consequently, they cannot be duplicated or replicated on
      other networks to run or replicate again. Because they cannot perform
      these functions, they cannot be considered viruses.
    </p>
    <p>
      However, cookies can be used for negative purposes. Because it stores
      information about users&rsquo; browsing preferences and browsing history,
      both on a particular site and on several other sites, cookies can be used
      as a form of Spyware. Many anti-spyware products are aware of this fact
      and are constantly flagging cookies for deletion in anti-virus /
      anti-spyware removal / scanning procedures.
    </p>
    <p>
      In general, browsers have integrated privacy settings that provide
      different levels of cookie acceptance, validity period and automatic
      deletion after the user has visited a particular site.
    </p>
    <p>
      <strong>Tips for safe and responsible browsing, based on cookies.</strong>
    </p>
    <p>
      Customize your browser settings for cookies to reflect a comfortable level
      of cookie security for you.
    </p>
    <p>
      If you share computer access, you can consider setting the browser to
      delete individual browsing data each time you close the browser. This is a
      way to access websites that place cookies and delete any visit information
      at the end of the browsing session.
    </p>
    <p>Always install and update your antispyware applications.</p>
    <p>
      Many spyware detection and prevention applications include site attack
      detection. This prevents the browser from accessing websites that could
      exploit browser vulnerabilities or download dangerous software.
    </p>
    <p><strong>How can I stop cookies?</strong></p>
    <p>
      <strong>Disabling and refusing to receive cookies can make certain websites
        impractical or difficult to visit and use.</strong>
    </p>
    <p>
      It is possible to set it in the browser so that these cookies are no
      longer accepted or you can set your browser to accept cookies from a
      particular site. But for example, if a visitor is not logged in using
      cookies, he will not be able to leave comments.
    </p>
    <p>
      All modern browsers offer the ability to change cookie settings. These
      settings are usually found in the&nbsp;<strong>Options / Settings</strong>
      menu or in the&nbsp;<strong>Preferences / Favorites</strong> menu of the
      browser.
    </p>
    <p>To understand these settings, the following links may be useful:</p>
    <p>
      <a
        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
      >
        Cookie settings in Firefox
      </a>
    </p>
    <p>
      <a
        href="https://support.google.com/chrome/answer/95647?hl=en"
      >
        Cookie settings in Chrome
      </a>
    </p>
    <p>
      <a
        href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
      >
        Cookie settings in Safari
      </a>
    </p>
  </div>
  <Copyright />
  <BackToTop />
</template>

<script setup>
/*
 * Imports
 */
import { useGlobalStore } from '@/stores/global';
import { defineAsyncComponent } from 'vue';

import LeftNavbar from '../components/LeftNavbar.vue';

const PageTitle = defineAsyncComponent(() =>
  import('../components/PageTitle.vue')
);

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'));

const Copyright = defineAsyncComponent(() => import('../views/Copyright.vue'));

const BackToTop = defineAsyncComponent(() =>
  import('../components/BackToTop.vue')
);

/*
 * Store
 */
const globalStore = useGlobalStore();
</script>

<style scoped lang="scss">
.app__cookiesPolicy {
  @include font-roboto-slab();
  margin: 3rem 3rem;
  font-size: $font-size-normal;

  @include md {
    margin: 2rem 5.5rem;
  }

  @include lg {
    margin: 2rem 7rem;
  }

  &__inline {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;

    @include md {
      flex-direction: row;
      margin-bottom: 3rem;
    }

    @include lg {
      flex-direction: row;
      margin-bottom: 3rem;
    }

    &-title {
      display: block;
      margin: auto;
    }

    &-btn {
      background-color: $color-dark;
      margin-bottom: 1rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.9rem;
      padding: 0.5rem 1.2rem;
      display: block;
      width: fit-content;
      font-size: 0.9rem;
      border: 1px solid $color-dark;
      margin-top: 1rem;
      cursor: pointer;
      @include font-roboto-slab();
      width: 100%;

      @include md {
        width: auto;
      }

      @include lg {
        width: auto;
      }
    }
  }

  p {
    margin: 1rem 0;
  }

  ul,
  ol {
    margin-left: 1.5rem;

    @include md {
      margin-left: 3rem;
    }

    @include lg {
      margin-left: 3rem;
    }
  }

  li {
    padding-bottom: 0.5rem;
  }

  a {
    color: $color-orange-primary;

    &:hover {
      color: $color-dark-blue;
    }
  }
}
</style>
