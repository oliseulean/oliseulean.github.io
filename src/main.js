import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// imports for the Vue icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

// inject Vue icons
library.add(fas);
app.component('FontIcon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
