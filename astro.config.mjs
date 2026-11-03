// @ts-check
import { defineConfig } from 'astro/config';

// Static output: Vercel detects Astro automatically and serves the build
// from its global edge network. No server adapter is required.
export default defineConfig({
  site: 'https://domaine-st-apollinaire.com',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
