import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://williambierbower.github.io',
  base: '/waypoint-talks',
  integrations: [tailwind(), mdx()],
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
