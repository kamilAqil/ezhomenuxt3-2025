export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-gtag" ],
  gtag: {
    id: 'G-WBKWLJ15E6'
  },
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
  },
    runtimeConfig: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    sendGridApiKey: process.env.NUXT_SENDGRID_API_KEY,
    sendGridFrom: process.env.NUXT_SENDGRID_FROM,
    sendGridTo: process.env.NUXT_SENDGRID_TO,
    databaseUrl: process.env.DATABASE_URL, // e.g. for Supabase or other DBs
    // Private keys are only available on the server side

    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      sendGridApiKey: process.env.NUXT_SENDGRID_API_KEY,
      sendGridFrom: process.env.NUXT_SENDGRID_FROM,
      sendGridTo: process.env.NUXT_SENDGRID_TO,
      databaseUrl: process.env.DATABASE_URL 
    }
  }
});