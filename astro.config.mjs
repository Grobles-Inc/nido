// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://nidoperulina.edu.pe',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  image: {
    domains: ["images.unsplash.com","i.ibb.co", "img.icons8.com", "mighty.tools", "sistemas15.minedu.gob.pe", "123language.pe", "images.pexels.com"],
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com"
      },
      {
        protocol: "https",
        hostname: "mighty.tools",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "sistemas15.minedu.gob.pe",
      },
      {
        protocol: "https",
        hostname: "123language.pe",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
  },
  server: {
    host: true, // Esto permite que el servidor escuche desde otras IPs (como la de tu celular)
    port: 4321, // Puedes elegir el puerto que quieras
  },
});