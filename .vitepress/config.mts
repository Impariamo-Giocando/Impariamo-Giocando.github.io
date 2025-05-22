import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Impariamo Giocando",
  description: "Impariamo, Giocando!",
  cleanUrls: true,
  mpa: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: "github", link: "https://github.com/Impariamo-Giocando" },
    ],
    footer: {
      copyright: "© 2025 - Tutti i diritti riservati.",
      message: "Forniglia Lorenzo - Giordana Giulia - Gollè Lorenzo - Pocchiola Arianna",
    },
    logo: {
      src: "/logo.webp",
    },
  },
});
