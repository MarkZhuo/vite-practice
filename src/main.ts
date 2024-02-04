import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'element-plus/dist/index.css';
import './styles/global.scss';
import 'virtual:svg-icons-register';
import globalComponents from '@/components';
import pinia from './stores';
import './permission';

const app = createApp(App);

app.use(ElementPlus, { locale: zhCn }).use(router).use(pinia).use(globalComponents).mount('#app');
