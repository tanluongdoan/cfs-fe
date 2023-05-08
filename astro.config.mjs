import htmlMinify from "@frontendista/astro-html-minify";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [htmlMinify(), sanity(
    {
      projectId: 'o453sx0w',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }
  )],
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/assets/scss/variable.scss";`
        }
      }
    }
  }
});