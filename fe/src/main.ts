import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import svgIcon from './components/SvgIcon/SvgIcon.vue';
import { createPinia } from 'pinia';
import Markdown from 'vue3-markdown-it';

createApp(App)
  .component('svg-icon', svgIcon)
  .use(router)
  .use(createPinia())
  .use(Markdown)
  .mount('#app');
