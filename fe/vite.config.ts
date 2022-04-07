import { defineConfig } from 'vite'
import { svgBuilder } from './src/plugins/svgBuilder'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), svgBuilder('./src/assets/fonts/svg/'), viteCompression()],
  // 存放环境变量
  envDir: './src/env'
})
