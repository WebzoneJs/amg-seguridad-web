// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Origen actual del sitio (dominio temporal). Usado para canonical y sitemap.
// ⚠️ Al conectar el dominio real, cambiar por 'https://amgseguridad.com.ar'
//    (también en src/consts.ts y public/robots.txt). Ver DEPLOY.md.
export const SITE_URL = 'https://azure-ant-447026.hostingersite.com';

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
