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
        primary: "#4CAF50",
        secondary: "#C8E6C9",
        accent: "#FFC107",
        surface: "#FFFFFF",
        background: "#FAFAFA",
        success: "#388E3C",
        error: "#D32F2F",
        text: "#212121",
      },
    },
  },
  darkMode: false, // You can change to 'class' if you want dark support later
  plugins: [],
};

export default config;
