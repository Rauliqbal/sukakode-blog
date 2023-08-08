// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=JetBrains+Mono&family=Poppins:wght@400;500;600&display=swap" }],
         meta: [
            {
               name: "google-site-verification",
               content: "Dh5WebMpXLjyWXTl9crOY7Y3rTQ7c1Bgfxyvvz6p1XM",
            },
         ],
      },

      pageTransition: { name: "page", mode: "out-in" },
   },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ["@nuxt/content", "nuxt-swiper"],
});
