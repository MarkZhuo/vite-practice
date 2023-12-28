import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/global.scss';
import 'virtual:svg-icons-register';
import globalComponents from '@/components';
import pinia from './stores';

const app = createApp(App);

app.use(pinia).use(ElementPlus).use(createPinia()).use(router).use(globalComponents).mount('#app');
