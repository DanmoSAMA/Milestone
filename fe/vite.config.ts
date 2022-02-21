import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svgBuilder } from './src/plugins/svgBuilder';

export default defineConfig({
  plugins: [vue(), svgBuilder('./src/assets/fonts/svg/')],
  // 存放环境变量
  envDir: "env",
});
