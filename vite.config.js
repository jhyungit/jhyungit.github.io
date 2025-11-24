import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',        // 유저 페이지라 반드시 '/' !
  build: {
    outDir: 'docs', // GitHub Pages에서 docs 폴더를 배포용으로 사용
  },
})