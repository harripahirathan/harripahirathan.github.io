import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the site works at any URL, including GitHub Pages subpaths
  base: './',
});
