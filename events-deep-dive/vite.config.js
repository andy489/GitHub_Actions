import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['src/**/*.js', 'src/**/*.jsx'],
      exclude: ['node_modules/**', '**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});