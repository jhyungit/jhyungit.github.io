import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',         // ✔ user page라 반드시 '/'
  build: {
    outDir: 'dist',  // ✔ Actions는 dist를 배포하므로 반드시 dist!
  },
})