// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://nidoperulina.netlify.app',
  integrations: [mdx(), sitemap()],
  vite: {
      plugins: [tailwindcss()],
	},
  adapter: netlify(),
  image: {
    domains: ["images.unsplash.com", "img.icons8.com"],
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com"
      }
    ],
  }
});