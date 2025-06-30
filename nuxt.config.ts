// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui","@nuxt/image"],
  css: ["~/assets/css/main.css"],
    ui: {
    fonts: false // <-- disable the automatic font injection
  }
});
