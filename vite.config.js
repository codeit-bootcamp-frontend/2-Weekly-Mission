// vite.config.js
/**
 * Vite의 구성 옵션을 정의하는 곳입니다.
 * React를 사용하는 경우 JSX를 처리하기 위한 플러그인을 설정할 수 있습니다.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});
