export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  ui: {
    icons: ['heroicons'],
  },

  imports: {
    dirs: ['~/components'], // good to have
  },

  // 🔧 Add this if needed
  components: {
    global: true,
  },

  css: ["~/assets/css/main.css","~/assets/scss/main.scss"],

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/s6a52okgg'
    }
  }
});
