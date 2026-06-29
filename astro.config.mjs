// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User page served at the domain root — no `base` needed.
export default defineConfig({
  site: 'https://duongnhatthang.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
