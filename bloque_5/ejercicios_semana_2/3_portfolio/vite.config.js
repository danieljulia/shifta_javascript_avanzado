import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // <-- this makes URLs relative
  server: {
    port: 3000,
    open: true
  }
})
