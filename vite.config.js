JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 이 부분만 바꾸면 경로 문제가 대부분 해결됩니다.
})
