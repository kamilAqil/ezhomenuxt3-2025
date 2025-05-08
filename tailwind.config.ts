import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E88E5",
        secondary: "#E3F2FD",
        accent: "#FF6F00",
        surface: "#F5F5F5",
        background: "#FFFFFF", // override default bg
        success: "#43A047",
        error: "#E53935",
        text: "#212121", // neutral dark text
      },
    },
  },
  darkMode: false, // You can change to 'class' if you want dark support later
  plugins: [],
};

export default config;
