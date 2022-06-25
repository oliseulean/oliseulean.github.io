import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import VueCookieAcceptDecline from 'vue-cookie-accept-decline';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('vue-cookie-accept-decline', VueCookieAcceptDecline);

app.mount('#app');
