// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: Echte Domain eintragen, sobald sie registriert ist.
export default defineConfig({
  site: 'https://www.gartenpflege-sr.de',
  integrations: [sitemap()],
});
