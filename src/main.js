import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// tooltip
import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue);

app.use(createPinia());
app.use(router);

app.mount('#app');
