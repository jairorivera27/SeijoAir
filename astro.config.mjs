import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://seijoair.com',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO'
        }
      }
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});

