import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Markdown from 'vue3-markdown-it';

import App from './App.vue';
import svgIcon from './components/SvgIcon/SvgIcon.vue';
import router from './router';

createApp(App)
  .component('svg-icon', svgIcon)
  .use(router)
  .use(createPinia())
  .use(Markdown)
  .mount('#app');
