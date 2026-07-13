// @ts-check
import { defineConfig } from 'astro/config';

// Org/user GitHub Pages site: served at the domain root.
// https://akrion-sim.github.io/
export default defineConfig({
  site: 'https://akrion-sim.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
