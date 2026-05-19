import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ndcorder.github.io',
  base: '/may',
  output: 'static',
  build: { assets: '_assets' },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@lib': '/src/lib', '@components': '/src/components' }
    }
  }
});