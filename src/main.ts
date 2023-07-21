import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'virtual:svg-icons-register';
import globalComponents from '@/components';

const app = createApp(App);

app.use(createPinia()).use(router).use(globalComponents).mount('#app');
