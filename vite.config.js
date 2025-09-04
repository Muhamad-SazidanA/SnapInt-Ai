import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['quill-delta-to-html', 'isomorphic-dompurify'],
  },
  ssr: {
    noExternal: ['quill-delta-to-html', 'isomorphic-dompurify'],
  },
  server: {
    host: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // BE Next.js jalan di sini
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
