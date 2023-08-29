import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.customcoded.io',
  base: '/',
  integrations: [starlight({
    title: 'CustomCoded',
	customCss: [
		'./src/tailwind.css',
    '@fontsource/inter',
	],
    social: {
      github: 'https://www.youtube.com/@customcoded'
    },
    sidebar: [{
      label: 'Home',
      link: '/'
    }]
  }), tailwind({
	applyBaseStyles: false,
  })],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});