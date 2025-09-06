import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig } from 'vite';

export default defineConfig({
  build: { outDir: 'dist' },
  plugins: [htmlPurge()],
  base: 'https://anac2828.github.io/chef/',
});
