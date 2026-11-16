import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/zico-studios/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
