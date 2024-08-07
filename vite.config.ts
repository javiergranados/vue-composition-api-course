import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      '@ui/': new URL('./src/components/', import.meta.url).pathname,
      '@views/': new URL('./src/views/', import.meta.url).pathname,
    },
  },
})
