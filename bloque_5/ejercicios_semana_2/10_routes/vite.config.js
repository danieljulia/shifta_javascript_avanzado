import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' hace que dist/ funcione aunque se sirva desde una subcarpeta
export default defineConfig({
  base: './',
  plugins: [vue()]
})
