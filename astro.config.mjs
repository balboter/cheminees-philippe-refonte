// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// PHASE PREVIEW — déployé sur GitHub Pages (page projet) :
//   https://balboter.github.io/cheminees-philippe-refonte/
// Le chemin de base est donc obligatoire. Tous les liens internes et assets du site
// le prennent en compte via import.meta.env.BASE_URL.
//
// BASCULE SUR LE DOMAINE FINAL (cheminees-poeles-philippe.com) :
//   1) site -> 'https://cheminees-poeles-philippe.com'
//   2) supprimer la ligne "base"
//   3) lever le noindex dans BaseLayout.astro + rouvrir public/robots.txt
export default defineConfig({
  site: 'https://balboter.github.io',
  base: '/cheminees-philippe-refonte',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-de-confidentialite'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
