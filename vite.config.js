import htmlPurge from 'vite-plugin-purgecss';
import { defineConfig } from 'vite';

export default defineConfig({
  build: { outDir: 'build' },
  plugins: [htmlPurge()],
});
