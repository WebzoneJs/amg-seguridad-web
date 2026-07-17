// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio de producción — usado para canonical, Open Graph y sitemap.
export const SITE_URL = 'https://amgseguridad.com.ar';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'monthly',
      priority: 1.0,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
