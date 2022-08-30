import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    proxy: {
      '/api': { 
        target: 'http://175.178.118.138:8080/admin',
        changeOrigin:true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
